export const BUSINESS = {
  name: "Ganga Beauty Parlour",
  owner: "Ganga Manish Soni",
  tagline: "Your Beauty, Our Passion",
  address:
    "Near SBI Bank, Sabji Mandi, Sumeru Complex, 1st Floor, Sujangarh",
  phones: ["7733079941", "7014221824"],
  whatsappNumber: "917733079941",
  whatsappLink: "https://wa.me/917733079941",
  instagram: "https://instagram.com/ganga_beauty_parlour_",
  hours: "Mon - Sun \u00b7 10:00 AM - 8:00 PM",
  hoursNote: "Bridal bookings on prior appointment",
  mapsEmbed:
    "https://www.google.com/maps?q=Sumeru+Complex+Sujangarh+Sabji+Mandi&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Sumeru+Complex+Sabji+Mandi+Sujangarh",
  didwanaMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Ganga+Beauty+Parlour+Didwana+Rajasthan",
};

export const BRANCH_OPTIONS = ["Sujangarh", "Didwana", "Ladnun"];

const __IMG_DEV_BUST = import.meta.env && import.meta.env.DEV ? `?v=${Date.now()}` : "";
export const HERO_IMAGE = `/images/hero/hero-bridal-main-1920.webp${__IMG_DEV_BUST}`;
export const HERO_BLUR_IMAGE = `/images/hero/hero-blur.webp${__IMG_DEV_BUST}`;
export const HERO_SRCSET = [
  `/images/hero/hero-bridal-main-640.webp${__IMG_DEV_BUST} 640w`,
  `/images/hero/hero-bridal-main-960.webp${__IMG_DEV_BUST} 960w`,
  `/images/hero/hero-bridal-main-1280.webp${__IMG_DEV_BUST} 1280w`,
  `/images/hero/hero-bridal-main-1920.webp${__IMG_DEV_BUST} 1920w`,
  `/images/hero/hero-bridal-main-2560.webp${__IMG_DEV_BUST} 2560w`,
].join(", ");

export const IMAGE_DIMENSIONS = {
  hero: { width: 1920, height: 1080 },
  logo: { width: 512, height: 512 },
  gallery: {
    "gallery-bridal-look": { width: 750, height: 927 },
  },
  services: {
    hair: { width: 533, height: 767 },
    facial: { width: 750, height: 1008 },
    waxing: { width: 1000, height: 1000 },
    nail: { width: 853, height: 1844 },
    bridal: { width: 750, height: 928 },
    tattoo: { width: 1125, height: 1398 },
  },
};

export const SERVICES = [
  {
    key: "hair",
    name: "Hair Styling",
    desc: "Cuts, blow-dry, curls and updos crafted to flatter your face.",
    image: `/images/services/service-hair-styling.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.hair.width,
    height: IMAGE_DIMENSIONS.services.hair.height,
  },
  {
    key: "facial",
    name: "Facial & Skincare",
    desc: "Glow facials, clean-ups and clinical-grade treatments.",
    image: `/images/services/service-facial-skincare.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.facial.width,
    height: IMAGE_DIMENSIONS.services.facial.height,
  },
  {
    key: "waxing",
    name: "Waxing & Threading",
    desc: "Smooth, gentle hair removal with premium imported waxes.",
    image: `/images/services/service-waxing-threading.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.waxing.width,
    height: IMAGE_DIMENSIONS.services.waxing.height,
  },
  {
    key: "nail",
    name: "Nail Artist Session",
    desc: "Luxury nail extensions, gel polish, bridal nail art and premium manicure designs crafted with precision and elegance.",
    image: `/images/services/service-nail-artist-session.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.nail.width,
    height: IMAGE_DIMENSIONS.services.nail.height,
  },
  {
    key: "bridal",
    name: "Bridal Makeup",
    desc: "Signature bridal looks - engagement, haldi, mehendi and reception.",
    image: `/images/services/service-bridal-makeup.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.bridal.width,
    height: IMAGE_DIMENSIONS.services.bridal.height,
  },
  {
    key: "tattoo",
    name: "Tattoo Studio",
    desc: "Custom tattoos, fine line art, portrait tattoos and professional body ink designed with precision and hygiene.",
    image: `/images/services/service-tattoo-studio.webp${__IMG_DEV_BUST}`,
    width: IMAGE_DIMENSIONS.services.tattoo.width,
    height: IMAGE_DIMENSIONS.services.tattoo.height,
  },
];

export const PREMIUM_SERVICES = [
  {
    key: "hd-bridal",
    name: "HD Bridal Makeup",
    price: "Starting \u20b915,000",
    desc: "Long-lasting HD bridal glam with flawless skin finish and luxury styling.",
    category: "Bridal Glam",
  },
  {
    key: "airbrush",
    name: "Airbrush Makeup",
    price: "Starting \u20b925,000",
    desc: "Ultra-smooth premium bridal airbrush makeup for camera-perfect results.",
    category: "Bridal Glam",
  },
  {
    key: "5d-bridal",
    name: "5D Bridal Makeup",
    price: "Starting \u20b945,000",
    desc: "Top-tier bridal transformation with luxury finishing and celebrity-style glam.",
    category: "Signature Bride",
  },
  {
    key: "bridal-engagement",
    name: "Bridal + Engagement Combo",
    price: "Starting \u20b917,000",
    desc: "Complete bridal and engagement makeover package with coordinated styling.",
    category: "Combo Package",
  },
  {
    key: "hair-spa",
    name: "Hair Spa",
    price: "\u20b9600 - \u20b92000",
    desc: "Deep nourishment and repair treatment for silky, healthy hair.",
    category: "Hair Ritual",
  },
  {
    key: "keratin",
    name: "Keratin Treatment",
    price: "\u20b94500 - \u20b97500",
    desc: "Smoothening treatment for frizz-free, glossy, manageable hair.",
    category: "Hair Ritual",
  },
  {
    key: "botox-hair",
    name: "Botox Hair Treatment",
    price: "\u20b94000 - \u20b97000",
    desc: "Advanced hair repair treatment for shine, softness, and damage recovery.",
    category: "Hair Ritual",
  },
  {
    key: "hair-extension",
    name: "Hair Extension",
    price: "\u20b915,000 - \u20b930,000",
    desc: "Premium volume and length enhancement with natural luxury finish.",
    category: "Luxury Hair",
  },
  {
    key: "hydra-facial",
    name: "Hydra Facial",
    price: "Starting \u20b93000",
    desc: "Deep hydration facial treatment for glowing, refreshed skin.",
    category: "Skin Care",
  },
  {
    key: "o3-bridal-glow",
    name: "O3+ Bridal Glow Facial",
    price: "Starting \u20b94200",
    desc: "Brightening bridal facial designed for instant glow and skin radiance.",
    category: "Skin Care",
  },
];

export const TESTIMONIALS = [
  {
    name: "Pooja S.",
    role: "Verified Bride \u00b7 Sujangarh",
    text:
      "Ganga ji made me feel like a queen on my wedding day. The makeup lasted through every function and looked flawless in photos.",
  },
  {
    name: "Anjali K.",
    role: "Regular Client \u00b7 Sujangarh",
    text:
      "Best beauty parlour in Sujangarh, hands down. Clean space, premium products, and so much warmth every visit.",
  },
  {
    name: "Ritu M.",
    role: "Verified Bride \u00b7 Sujangarh",
    text:
      "Everyone at my engagement asked who did my makeup. Got compliments for days! Highly recommend Ganga Beauty Parlour.",
  },
  {
    name: "Sneha P.",
    role: "Hair Spa Client \u00b7 Sujangarh",
    text:
      "My hair has never looked this healthy. The keratin treatment was worth every rupee - totally going back.",
  },
];

export const GALLERY = [
  {
    src: `/images/gallery/gallery-bridal-look.webp${__IMG_DEV_BUST}`,
    caption: "Bridal Look \u00b7 Wedding Day",
    width: IMAGE_DIMENSIONS.gallery["gallery-bridal-look"].width,
    height: IMAGE_DIMENSIONS.gallery["gallery-bridal-look"].height,
  },
  {
    src: `/images/services/service-bridal-makeup.webp${__IMG_DEV_BUST}`,
    caption: "Bridal Look \u00b7 Reception",
    width: IMAGE_DIMENSIONS.services.bridal.width,
    height: IMAGE_DIMENSIONS.services.bridal.height,
  },
  {
    src: HERO_IMAGE,
    caption: "Bridal Look \u00b7 Sangeet",
    width: IMAGE_DIMENSIONS.hero.width,
    height: IMAGE_DIMENSIONS.hero.height,
  },
  {
    src: `/images/services/service-nail-artist-session.webp${__IMG_DEV_BUST}`,
    caption: "Nail Art \u00b7 Engagement",
    width: IMAGE_DIMENSIONS.services.nail.width,
    height: IMAGE_DIMENSIONS.services.nail.height,
  },
  {
    src: `/images/services/service-hair-styling.webp${__IMG_DEV_BUST}`,
    caption: "Hair Styling \u00b7 Pre-wedding Shoot",
    width: IMAGE_DIMENSIONS.services.hair.width,
    height: IMAGE_DIMENSIONS.services.hair.height,
  },
  {
    src: `/images/services/service-tattoo-studio.webp${__IMG_DEV_BUST}`,
    caption: "Studio \u00b7 Sujangarh",
    width: IMAGE_DIMENSIONS.services.tattoo.width,
    height: IMAGE_DIMENSIONS.services.tattoo.height,
  },
];

export const OFFERS = [
  {
    title: "Bridal + Engagement Combo",
    badge: "SAVE \u20b93,000",
    subtitle: "Complete bridal transformation package",
    priceLabel: "\u20b917,000",
    perks: [
      "HD Bridal Makeup",
      "Engagement Makeup",
      "Hair Styling",
      "Complimentary Touch-up",
    ],
    service: "Bridal + Engagement Combo",
  },
  {
    title: "30% OFF Bridal Makeup",
    badge: "LIMITED OFFER",
    subtitle: "Luxury bridal makeover offer",
    priceLabel: "Flat 30% OFF",
    perks: [
      "HD Bridal Makeup",
      "Airbrush Makeup",
      "Premium Bridal Styling",
      "Skin Consultation",
      "Long-lasting Finish",
    ],
    service: "30% OFF Bridal Makeup",
    highlight: true,
  },
  {
    title: "Keratin + Hair Spa Combo",
    badge: "POPULAR",
    subtitle: "Smooth & glossy hair treatment",
    priceLabel: "Starting \u20b95,999",
    perks: [
      "Keratin Treatment",
      "Deep Hair Spa",
      "Frizz Control",
      "Shine Finish",
    ],
    service: "Keratin + Hair Spa Combo",
  },
];

export function buildWhatsAppLink(text) {
  const base = "https://wa.me/917733079941";
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function buildPhoneLink(phone) {
  return `tel:+91${phone}`;
}

export function bookService(serviceName) {
  if (typeof window === "undefined") return;
  const event = new CustomEvent("preselect-service", { detail: serviceName });
  window.dispatchEvent(event);
  const el = document.getElementById("booking");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
