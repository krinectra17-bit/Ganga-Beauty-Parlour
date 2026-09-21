import logging
import json
import os
import re
import time
import uuid
from collections import defaultdict, deque
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Deque, List, Optional

from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, HTTPException, Request, status
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, Field, field_validator
from pymongo.errors import PyMongoError
from starlette.middleware.cors import CORSMiddleware


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "ganga_beauty")
FALLBACK_BOOKINGS_FILE = ROOT_DIR / "data" / "bookings.json"
# Laptop IP ko yahan add karein taaki mobile se access ho sake
DEFAULT_CORS_ORIGINS = "http://localhost:3000,http://127.0.0.1:3000,http://0.0.0.0:3000"
CORS_ORIGINS = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", DEFAULT_CORS_ORIGINS).split(",")
    if origin.strip()
]
ALLOW_ALL_CORS = CORS_ORIGINS == ["*"]
ADMIN_API_KEY = os.getenv("ADMIN_API_KEY", "").strip()
BOOKING_RATE_LIMIT_WINDOW = int(os.getenv("BOOKING_RATE_LIMIT_WINDOW", "60"))
BOOKING_RATE_LIMIT_MAX = int(os.getenv("BOOKING_RATE_LIMIT_MAX", "5"))
ALLOWED_BRANCHES = {"Sujangarh", "Didwana"}
PHONE_PATTERN = re.compile(r"^[6-9]\d{9}$")
booking_attempts: dict[str, Deque[float]] = defaultdict(deque)

client = AsyncIOMotorClient(MONGO_URL, serverSelectionTimeoutMS=3000)
db = client[DB_NAME]

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_: FastAPI):
    yield
    client.close()


app = FastAPI(title="Ganga Beauty Parlour API", lifespan=lifespan)

api_router = APIRouter(prefix="/api")


# ===== Models =====
class BookingCreate(BaseModel):
    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)

    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=10, max_length=15)
    branch: str = Field(min_length=1, max_length=40)
    service: str = Field(min_length=2, max_length=120)
    date: Optional[str] = Field(default=None, max_length=20)
    time: Optional[str] = Field(default=None, max_length=20)
    message: Optional[str] = Field(default=None, max_length=500)

    @field_validator("name", "service", "message", mode="before")
    @classmethod
    def normalize_text(cls, value: Optional[str]) -> Optional[str]:
        if value is None:
            return value
        text = re.sub(r"[\x00-\x1f\x7f]", " ", str(value))
        return re.sub(r"\s+", " ", text).strip()

    @field_validator("phone", mode="before")
    @classmethod
    def normalize_phone(cls, value: str) -> str:
        phone = re.sub(r"\D", "", str(value))
        if not PHONE_PATTERN.fullmatch(phone):
            raise ValueError("Enter a valid 10-digit Indian mobile number")
        return phone

    @field_validator("branch")
    @classmethod
    def validate_branch(cls, value: str) -> str:
        if value not in ALLOWED_BRANCHES:
            raise ValueError("Select a valid branch")
        return value

    @field_validator("date", "time", mode="before")
    @classmethod
    def blank_to_none(cls, value: Optional[str]) -> Optional[str]:
        if value is None:
            return None
        text = str(value).strip()
        return text or None


class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    branch: str
    service: str
    date: Optional[str] = None
    time: Optional[str] = None
    message: Optional[str] = None
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def booking_to_doc(booking: Booking) -> dict:
    doc = booking.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    return doc


def read_fallback_bookings() -> list[dict]:
    if not FALLBACK_BOOKINGS_FILE.exists():
        return []

    try:
        return json.loads(FALLBACK_BOOKINGS_FILE.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        logger.exception("Could not read fallback bookings file")
        return []


def save_fallback_booking(doc: dict) -> None:
    FALLBACK_BOOKINGS_FILE.parent.mkdir(parents=True, exist_ok=True)
    items = read_fallback_bookings()
    items.insert(0, doc)
    FALLBACK_BOOKINGS_FILE.write_text(
        json.dumps(items, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def get_client_ip(request: Request) -> str:
    forwarded_for = request.headers.get("x-forwarded-for", "")
    if forwarded_for:
        return forwarded_for.split(",", 1)[0].strip()
    return request.client.host if request.client else "unknown"


def enforce_booking_rate_limit(request: Request) -> None:
    now = time.monotonic()
    key = get_client_ip(request)
    attempts = booking_attempts[key]

    while attempts and now - attempts[0] > BOOKING_RATE_LIMIT_WINDOW:
        attempts.popleft()

    if len(attempts) >= BOOKING_RATE_LIMIT_MAX:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many booking requests. Please try again shortly.",
        )

    attempts.append(now)


def require_admin_token(request: Request) -> None:
    if not ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access is not configured",
        )

    token = request.headers.get("x-admin-token", "")
    if token != ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin token",
        )


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Ganga Beauty Parlour API is running"}


@api_router.get("/health")
async def health_check():
    try:
        await client.admin.command("ping")
        storage = "mongo"
    except PyMongoError:
        storage = "file-fallback"

    return {"api": "ok", "storage": storage}


@api_router.post("/booking", response_model=Booking)
async def create_booking(payload: BookingCreate, request: Request):
    enforce_booking_rate_limit(request)
    booking = Booking(**payload.model_dump())
    doc = booking_to_doc(booking)

    try:
        await db.bookings.insert_one(doc.copy())
    except PyMongoError:
        try:
            save_fallback_booking(doc)
        except OSError:
            logger.exception("Could not save fallback booking")
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Booking service is temporarily unavailable",
            )

    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings(request: Request):
    require_admin_token(request)

    try:
        items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    except PyMongoError:
        items = read_fallback_bookings()

    for item in items:
        item.setdefault("branch", "Sujangarh")
        if isinstance(item.get("created_at"), str):
            try:
                item["created_at"] = datetime.fromisoformat(item["created_at"])
            except Exception:
                item["created_at"] = datetime.now(timezone.utc)
    return items


app.include_router(api_router)


@app.middleware("http")
async def add_security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
    response.headers.setdefault(
        "Permissions-Policy",
        "camera=(), microphone=(), payment=(), usb=()",
    )
    return response

app.add_middleware(
    CORSMiddleware,
    allow_credentials=not ALLOW_ALL_CORS,
    allow_origins=CORS_ORIGINS,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "X-Admin-Token"],
)
