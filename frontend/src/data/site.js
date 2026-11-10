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

// ===== 1. BRIDAL MAKEUP PACKAGES (Image 1: ₹7,999 to ₹25,000) =====
export const BRIDAL_PACKAGES = [
  {
    key: "bridal-7999",
    name: "₹7,999 Bridal Package",
    price: "₹7,999",
    category: "Bridal Makeup Packages",
    artistLevel: "Basic Artist",
    artistNote: "Prepared by Basic Artist (₹7,999 - ₹11,000)",
    desc: "Essential bridal makeover package with classic Lakmé makeup, 2-time facial, bleaching, waxing and juda.",
    inclusions: [
      "Lake-me Makeup",
      "2Time Facial",
      "1Time Blech",
      "Hand Leg Wax Normal",
      "Eybrow For . upe. Hair cutting",
      "Juda",
    ],
    bookingLabel: "₹7,999 Bridal Package",
  },
  {
    key: "bridal-11000",
    name: "₹11,000 Bridal Package",
    price: "₹11,000",
    category: "Bridal Makeup Packages",
    artistLevel: "Basic Artist",
    artistNote: "Prepared by Basic Artist (₹7,999 - ₹11,000)",
    desc: "Popular bridal package with Kryolan makeup, 3-time facial, hair spa, normal body wax and juda gajara.",
    inclusions: [
      "Krylon Make-up",
      "3Time Facial",
      "1Time Bleach",
      "Body Wax Normal",
      "Hair spa",
      "Eye.For.Up. hair cut",
      "Juda gajara",
    ],
    bookingLabel: "₹11,000 Bridal Package",
  },
  {
    key: "bridal-15000",
    name: "₹15,000 HD Bridal Package",
    price: "₹15,000",
    category: "Bridal Makeup Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    highlight: true,
    badge: "MOST POPULAR",
    desc: "Flawless HD bridal transformation with chocolate body wax, hair spa, body bleach, B.Wax and manicure-pedicure.",
    inclusions: [
      "Makeup Hd",
      "3Time Facial",
      "2Time blech",
      "Body Bleach",
      "Body Wax chocklety",
      "B. Wax",
      "Eye.For.up.haircut. free",
      "Juda Gajara",
      "Hairspa",
      "Manicure,Padicure",
    ],
    bookingLabel: "₹15,000 HD Bridal Package",
  },
  {
    key: "bridal-21000",
    name: "₹21,000 HD & 3D Bridal Package",
    price: "₹21,000",
    category: "Bridal Makeup Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    desc: "Advanced HD & 3D bridal artistry with body polishing, 3D eye lashes, nude lenses, best hairstyle and original gajara.",
    inclusions: [
      "Makeup HD & 3D",
      "3Time Facial",
      "2Time Bleach",
      "Body Wax",
      "Body Bleach",
      "Body Polishing",
      "B.Wax",
      "Hair Spa",
      "Manicure & Padicure",
      "Best Hairstyle",
      "eye. For. Up> Haircut (free)",
      "3D Eye lasses",
      "Nude Lance",
      "juda orignal gajara",
    ],
    bookingLabel: "₹21,000 HD & 3D Bridal Package",
  },
  {
    key: "bridal-25000",
    name: "₹25,000 5D Look Luxury Bridal Package",
    price: "₹25,000",
    category: "Bridal Makeup Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    badge: "LUXURY BRIDE",
    desc: "Signature 5D look bridal experience with O3+ facials, O3+ bleach, hair colour, chocolate body wax, face wax, bridal seat and complete eye styling.",
    inclusions: [
      "Make-up - 5D look",
      "3Time Facial o3+",
      "2Time Bleach o3+",
      "Hair Spa, Hair Clour",
      "Body Wax Cholaty",
      "Body Bleach",
      "Body Polishing",
      "B. Wax",
      "Face Wax",
      "Manicure & Padicure",
      "Bridal Seat",
      "Eye.For.up.HairCut,juda,Gajara",
      "Eyelace ,Eye lasese",
    ],
    bookingLabel: "₹25,000 5D Bridal Package",
  },
];

// ===== 2. PREMIUM BRIDAL PACKAGES (Image 2: ₹31,000 to ₹61,000) =====
export const PREMIUM_BRIDAL_PACKAGES = [
  {
    key: "premium-31000",
    name: "₹31,000 Airbrush & HD Bridal Package",
    price: "₹31,000",
    category: "Premium Bridal Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    desc: "Seamless Airbrush & HD bridal combination package including the complete ₹15,000 bridal package.",
    inclusions: [
      "Aibrush Makeup",
      "Hd Makeup",
      "15000/- bridal Package Included",
      "Flower Juda",
      "Bridal Set Face Accourding",
    ],
    bookingLabel: "₹31,000 Premium Bridal Package",
  },
  {
    key: "premium-35000",
    name: "₹35,000 5D Airbrush & 3D Bridal Package",
    price: "₹35,000",
    category: "Premium Bridal Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    desc: "Camera-perfect 5D Airbrush and 3D bridal styling with ₹15,000 package and complimentary party makeup.",
    inclusions: [
      "5D Airbrush Makeup",
      "3D makeup",
      "15000 Bridal Packge Included",
      "Bridal Set",
      "Flower Juda",
      "1 Party Makeup",
    ],
    bookingLabel: "₹35,000 Premium Bridal Package",
  },
  {
    key: "premium-41000",
    name: "₹41,000 5D Airbrush & 5D Makeup Package",
    price: "₹41,000",
    category: "Premium Bridal Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    desc: "High-glamour dual 5D bridal makeup combining the ₹21,000 package, bridal set and traditional paranda.",
    inclusions: [
      "5D Airbrush Makeup",
      "5D Makeup",
      "21000/- Bridal Packge Included",
      "Bridal Set",
      "1Part Makeup",
      "Juda Flower/ chotti Paranda",
    ],
    bookingLabel: "₹41,000 Premium Bridal Package",
  },
  {
    key: "premium-45000",
    name: "₹45,000 5D Airbrush + Haldi Bridal Package",
    price: "₹45,000",
    category: "Premium Bridal Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    highlight: true,
    badge: "ROYAL COMBO",
    desc: "Complete wedding celebration suite: 5D Airbrush, Airbrush makeup, Haldi makeup, ₹21,000 package, bridal set and nail art.",
    inclusions: [
      "5D Airbrush Makeup",
      "Airbrush Makeup",
      "Haldi Makeup",
      "21000/- Package Included",
      "Bridal Set",
      "Nail aart",
    ],
    bookingLabel: "₹45,000 Premium Bridal Package",
  },
  {
    key: "premium-51000",
    name: "₹51,000 Royal Bridal, Sangeet & Haldi Package",
    price: "₹51,000",
    category: "Premium Bridal Packages",
    artistLevel: "Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    desc: "Three-function royal transformation: Airbrush bridal, 3D Sangeet, HD Haldi, hair smoothening, ₹21,000 package, bridal sets and 5 months grooming free.",
    inclusions: [
      "Airbrush Makeup",
      "Sangeet Makeup 3D",
      "Haldi Makeup Hd",
      "21000/- Bridal Package Included",
      "1 party Makeup Free",
      "5months Eye,,For,Up, HairCurt Free",
      "Hair Smoothning",
      "Bridal Set",
      "Haldi Bridal Set",
    ],
    bookingLabel: "₹51,000 Royal Bridal Package",
  },
  {
    key: "premium-61000",
    name: "₹61,000 Grand Imperial 5D Bridal Suite",
    price: "₹61,000",
    category: "Premium Bridal Packages",
    artistLevel: "Top Professional Artist",
    artistNote: "Professional Makeup Artist • 100% Makeup Guarantee",
    highlight: true,
    badge: "CELEBRITY SUITE",
    desc: "The ultimate bridal luxury: 5D Airbrush bridal, 5D Airbrush Sangeet, 3D Haldi, hair kerasmoothening, ₹25,000 package, complete sets, nail art and 100% makeup guarantee.",
    inclusions: [
      "5D Aribrush Bridal",
      "5D Airbrush Sangeet",
      "Haldi Makeup 3D",
      "25000 Package Included",
      "1 Party makeup",
      "Bridal Makeup",
      "Hair Kerasmoothning",
      "HAldi Set",
      "Nail Aart",
      "Eye.For ,up, Hair Cutting free",
      "(Professional Makeup Artist)",
    ],
    bookingLabel: "₹61,000 Grand Imperial Package",
  },
];

export const ARTIST_GUARANTEE_NOTE =
  "NOTE: ₹7,999 to ₹11,000 packages prepared by Basic Artists. ₹15,000 to ₹61,000 packages prepared by certified Professional Makeup Artists (*4 certified artists ready to serve you. 100% Makeup Guarantee).";

// ===== 3. OUT OF PARLOUR MAKEUP (Image 3: ₹6,100 to ₹45,000) =====
export const OUT_OF_PARLOUR_MAKEUP = [
  { name: "Lakeme staff", price: "₹6,100" },
  { name: "Lakeme staff (Senior)", price: "₹8,100" },
  { name: "Krylon Staff", price: "₹10,000" },
  { name: "Krylon Hd", price: "₹13,000" },
  { name: "Forever 52", price: "₹14,000" },
  { name: "Makeup Studio", price: "₹16,000" },
  { name: "Huda HD", price: "₹18,000" },
  { name: "Huda nude", price: "₹18,000" },
  { name: "3D Makeup", price: "₹18,000" },
  { name: "5D Makeup", price: "₹19,000" },
  { name: "NARS 3D", price: "₹21,000" },
  { name: "NARS/HuDa 5D", price: "₹23,000" },
  { name: "Krylon Airbursh", price: "₹23,000" },
  { name: "Makeup Airburs", price: "₹25,000" },
  { name: "Makeup Airbrush glossy", price: "₹31,000" },
  { name: "Makeup 5D Airbrush glossy", price: "₹45,000" },
];

export const OUT_OF_PARLOUR_TRAVEL_NOTE =
  "Bridal makeup rate k according long lasting and glow show hoga + travelling charges km k according hoga (₹2,000 - ₹50,000).";

// ===== 4. TWO-TIME MAKEUP (Image 3: ₹25,000 to ₹75,000) =====
export const TWO_TIME_MAKEUP = [
  {
    key: "two-time-krylon",
    name: "Two-Time Krylon Makeup",
    price: "₹25,000",
    desc: "Dual event bridal makeover (Wedding + Sangeet / Reception) using Kryolan professional cosmetics.",
    bookingLabel: "Two-Time Krylon Makeup (₹25,000)",
  },
  {
    key: "two-time-hd",
    name: "Two-Time HD Makeup",
    price: "₹30,000",
    desc: "Two high-definition transformations with camera-perfect finish and extended staying power.",
    bookingLabel: "Two-Time HD Makeup (₹30,000)",
  },
  {
    key: "two-time-huda-hd",
    name: "Two-Time Huda HD Makeup",
    price: "₹35,000",
    desc: "Luxury dual makeover crafted with authentic Huda Beauty HD formulation.",
    bookingLabel: "Two-Time Huda HD Makeup (₹35,000)",
  },
  {
    key: "two-time-huda-nars-3d",
    name: "Two-Time Huda / NARS 3D",
    price: "₹45,000",
    desc: "Multidimensional 3D styling for two celebrations using luxury Huda and NARS cosmetics.",
    bookingLabel: "Two-Time Huda / NARS 3D (₹45,000)",
  },
  {
    key: "two-time-huda-nars-5d",
    name: "Two-Time Huda / NARS 5D",
    price: "₹55,000",
    desc: "Top-tier 5D bridal transformation across two functions with bespoke contour and glow.",
    bookingLabel: "Two-Time Huda / NARS 5D (₹55,000)",
  },
  {
    key: "two-time-airbrush",
    name: "Two-Time Airbrush Makeup",
    price: "₹65,000",
    desc: "Silky, sweat-resistant airbrush application for two wedding functions.",
    bookingLabel: "Two-Time Airbrush Makeup (₹65,000)",
  },
  {
    key: "two-time-airbrush-5d",
    name: "Two-Time Airbrush 5D Makeup",
    price: "₹75,000",
    desc: "Ultimate 5D Airbrush bridal transformation across two major celebrations.",
    bookingLabel: "Two-Time Airbrush 5D Makeup (₹75,000)",
  },
];

// ===== 5. THREE-TIME MAKEUP (Image 3: ₹60,000 & ₹80,000) =====
export const THREE_TIME_MAKEUP = [
  {
    key: "three-time-3d-5d",
    name: "3 Time 3D and 5D Makeup",
    price: "₹60,000",
    desc: "Comprehensive 3-event bridal suite (Haldi + Sangeet + Wedding/Reception) in luxury 3D & 5D styling.",
    bookingLabel: "3 Time 3D and 5D Makeup (₹60,000)",
  },
  {
    key: "three-time-airbrush",
    name: "3 Time Airbrush 3D, 5D Combo",
    price: "₹80,000",
    desc: "Pinnacle 3-event bridal suite with professional airbrush 3D & 5D application for all three celebrations.",
    bookingLabel: "3 Time Airbrush 3D, 5D (₹80,000)",
  },
];

// ===== 6. FACIAL SERVICES (Image 4: ₹550 to ₹1,500) =====
export const FACIAL_SERVICES = [
  { name: "Fruit Facial", price: "₹550", desc: "Gentle natural fruit extraction for mild rejuvenation and glow." },
  { name: "Mix Fruit Facial", price: "₹800", desc: "Multi-fruit vitamin infusion for deep skin nourishment." },
  { name: "Gold Facial", price: "₹700 - ₹900 - ₹1,100 - ₹1,400", desc: "Lustrous gold particle treatment available in 4 premium brand grades." },
  { name: "Diamond Facial", price: "₹700 - ₹900 - ₹1,100 - ₹1,400", desc: "Skin polishing and clarifying diamond dust facial in 4 tier options." },
  { name: "Papaya Facial", price: "₹800, ₹1,100", desc: "Enzymatic blemish correction and pigmentation control treatment." },
  { name: "Red Wine Facial", price: "₹1,500", desc: "Antioxidant-rich red wine treatment for skin firmness, elasticity and youthfulness." },
  { name: "Whitening Facial", price: "₹1,100, ₹1,500", desc: "Intensive brightening and tone-evening facial treatment." },
  { name: "Pearl Facial", price: "₹1,100, ₹1,500", desc: "Natural pearl luster treatment for cooling, soothing and radiant glow." },
  { name: "Oxylife Whitening Facial", price: "₹1,100, ₹1,500", desc: "Active oxygen-boosted whitening treatment for dull, fatigued skin." },
];

export const FACIAL_CONSULTATION_NOTE =
  "Otherwise skin According to information to Manish Ganga Soni (Personalized skin consultation).";

// ===== 7. O3+ PROFESSIONAL FACIAL (Image 4: ₹1,800 to ₹4,200) =====
export const O3_PROFESSIONAL_FACIAL = [
  { name: "O3+ Whitening Facial", price: "₹1,800", desc: "Clinical O3+ brightening treatment for luminous, even-toned complexion." },
  { name: "O3+ Oil Control Facial", price: "₹1,800", desc: "Targeted sebum balancing and pore purifying treatment for clear matte skin." },
  { name: "O3+ Power Brightening", price: "₹2,000", desc: "Intensive radiance accelerator for stubborn tan removal and deep glow." },
  { name: "O3+ Glow Facial", price: "₹2,500", desc: "Signature O3+ instant bridal radiance ritual for supple, glass-like finish." },
  { name: "O3+ Glow + Mask Facial", price: "₹3,500", desc: "Advanced glow treatment enriched with customized professional peel-off rubber mask." },
  { name: "O3+ Bridal Glow Luxury Facial", price: "₹4,200", desc: "The ultimate O3+ bridal skin ritual for maximum luminosity, hydration and camera perfection." },
];

// ===== 8. HYDRA FACIAL & COLD MASSAGE (Image 4: ₹500 to ₹5,000) =====
export const HYDRA_FACIAL_SERVICES = [
  { name: "O3+ Hydra Facial (Tier 1)", price: "₹3,000", desc: "Multi-step deep aqua vortex cleansing, exfoliation and serum infusion." },
  { name: "O3+ Hydra Facial (Tier 2)", price: "₹4,000", desc: "Advanced hydro-dermabrasion with oxygen infusion and deep sonic extraction." },
  { name: "O3+ Hydra Facial (Tier 3 Luxury)", price: "₹5,000", desc: "Complete clinical Hydra experience with radiofrequency tightening, cold hammer and nutrient infusion." },
  { name: "Aloe Vera Ultrasound Cold Massage", price: "₹500 / ₹800 / ₹1,500", desc: "Soothing ultrasound cryogenic massage with pure aloe vera for pore tightening, redness reduction, and deep cellular hydration." },
];

// ===== 9. LASER TREATMENT (Image 4: 8-10 Sessions / Per Session Rate) =====
export const LASER_TREATMENTS = [
  { name: "Face Laser Treatment", price: "₹2,000 - ₹4,000", desc: "Precision laser hair reduction and skin toning for full facial area." },
  { name: "Hand Laser Treatment", price: "₹8,000", desc: "Complete bilateral hand and arm laser hair removal session." },
  { name: "Leg Laser Treatment", price: "₹8,000", desc: "Full bilateral legs smooth laser hair reduction treatment." },
  { name: "Full Body Laser Treatment", price: "₹20,000", desc: "Comprehensive head-to-toe full body laser hair reduction session." },
  { name: "Chin Laser Treatment", price: "₹2,500", desc: "Targeted submental and chin area permanent hair reduction." },
  { name: "Upper Lips Laser Treatment", price: "₹1,000", desc: "Delicate upper lip precision laser hair removal session." },
];

export const LASER_SESSION_NOTE =
  "Laser Treatment 8-10 Seat (Rates shown per seat / session).";

// Preserved for backward compatibility
export const PREMIUM_SERVICES = [
  ...BRIDAL_PACKAGES.map((p) => ({
    key: p.key,
    name: p.name,
    price: p.price,
    desc: p.desc,
    category: p.category,
  })),
  ...PREMIUM_BRIDAL_PACKAGES.map((p) => ({
    key: p.key,
    name: p.name,
    price: p.price,
    desc: p.desc,
    category: p.category,
  })),
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
