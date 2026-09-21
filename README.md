# Ganga Beauty Parlour

Premium single-page website for Ganga Beauty Parlour, Sujangarh.

## Project Structure

```text
backend/
  server.py              FastAPI app, validated booking APIs, MongoDB + local JSON fallback
  requirements.txt       Python dependencies
  .env.example           Backend environment variable sample

frontend/
  index.html             Vite HTML entry and SEO meta tags
  package.json           Frontend scripts and dependencies
  vite.config.js         Vite config and @ alias
  tailwind.config.js     Tailwind file scanning config
  public/images/         Replaceable website images
  src/main.jsx           React entry point
  src/App.jsx            Page section order
  src/index.css          Global theme, buttons, cards, responsive utilities
  src/data/site.js       Business info, text, pricing, packages, gallery, image paths
  src/components/layout/ Navbar, footer, floating WhatsApp
  src/components/sections/ All visible page sections

ganga-admin/
  sanity.config.js       Sanity Studio configuration
  schemaTypes/           Studio schemas
```

## Common Edits

- Change images: replace files inside `frontend/public/images/` with the same file names, or update paths in `frontend/src/data/site.js`.
- Change website text: edit `frontend/src/data/site.js` first. Most business text, services, packages, prices, testimonials, gallery captions, phone numbers, WhatsApp and map links live there.
- Change section order: edit `frontend/src/App.jsx`.
- Change colors, buttons, fonts, spacing: edit `frontend/src/index.css`.
- Change SEO title/meta/static crawler files: edit `frontend/index.html` and `frontend/public/`.
- Change backend API/database settings: copy `backend/.env.example` to `backend/.env` locally and edit values there.

## Environment

Frontend:

```env
# Mobile access ke liye 'localhost' ki jagah laptop ka IP use karein
VITE_BACKEND_URL=http://192.168.x.x:8001
```

Backend:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=ganga_beauty
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
ADMIN_API_KEY=
BOOKING_RATE_LIMIT_WINDOW=60
BOOKING_RATE_LIMIT_MAX=5
```

MongoDB is preferred for production. For local beginner setup, if MongoDB is not running, bookings are saved to `backend/data/bookings.json` automatically. That file is ignored by git.

## Local Run Commands

Backend:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Open:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:8001/api/
Health:   http://localhost:8001/api/health
```

Production build:

```powershell
cd frontend
npm run build
```

## Deployment

This repository is configured for automatic deploys to Vercel. Two approaches are supported:

- GitHub ↔ Vercel integration (recommended):
  - In Vercel, import the GitHub repository and either set the project root to `/` (root) so Vercel reads `vercel.json`, or set the root directory to `frontend` and let Vercel use the `frontend` folder directly.
  - Link the repository and enable Automatic Deploys — Vercel will deploy on every push to the selected branches (e.g. `main`).

- GitHub Actions (CI + deploy):
  - A workflow is added at `.github/workflows/vercel-deploy.yml` that:
    - Runs `npm ci` in `frontend/`, optionally optimizes images, runs `npm run build`, and deploys to Vercel using the Vercel Action.
    - It triggers on `push` to `main` and on `pull_request` targeting `main`.

Required GitHub repository secrets (for the workflow to deploy):

- `VERCEL_TOKEN` — a personal token from Vercel (Account Settings → Tokens).
- `VERCEL_ORG_ID` — team/org ID for your Vercel account (available in the Vercel dashboard or via `vercel projects ls`).
- `VERCEL_PROJECT_ID` — project ID for the Vercel project (available in the Vercel dashboard or via `vercel projects ls`).

Vercel / Environment variables:

- Set `VITE_BACKEND_URL` in the Vercel Project → Settings → Environment Variables to point to your backend (e.g. `https://api.yourdomain.com`), or leave empty if the frontend talks to public APIs.
- To find `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` via Vercel CLI (after `npm i -g vercel` and `vercel login`):

```bash
vercel teams ls        # lists your orgs and their ids
vercel projects ls     # lists projects and their ids (after you create/import a project)
```

Alternatively, copy the IDs directly from the Vercel Dashboard (Project → Settings → General).

Adding secrets to GitHub:

1. Go to your repository → Settings → Secrets & variables → Actions → New repository secret.
2. Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.


Quick local verification:

```powershell
cd frontend
npm ci
npm run optimize-images   # optional, converts JPG/PNG to WebP
npm run build
```

If the build succeeds locally, the GitHub workflow will also validate the build on every push.


Admin Studio:

```powershell
cd ganga-admin
npm install
npm run dev
```
