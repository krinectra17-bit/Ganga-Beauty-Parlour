import {
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Link } from "@/router/Router";
import SEOHead from "@/components/SEOHead";
import { LOCAL_SEO_PAGES } from "@/data/localSeoPages";
import { BUSINESS, buildPhoneLink, buildWhatsAppLink, buildWhatsAppBookingMessage } from "@/data/site";

export default function LocalSeoPage({ pageKey }) {
  const page = LOCAL_SEO_PAGES[pageKey] || LOCAL_SEO_PAGES["beauty-parlour-sujangarh"];

  const bookingMessage = buildWhatsAppBookingMessage({
    branch: "Sujangarh",
    service: page.h1,
  });
  const waLink = buildWhatsAppLink(bookingMessage);

  // Other local service pages for crawlable internal linking
  const otherPages = Object.values(LOCAL_SEO_PAGES).filter((p) => p.slug !== page.slug);

  // Schema.org JSON-LD structured data for this landing page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${page.canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gangabeautyparlour.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.h1,
            "item": page.canonical
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${page.canonical}#service`,
        "name": page.h1,
        "description": page.metaDescription,
        "url": page.canonical,
        "provider": {
          "@id": "https://gangabeautyparlour.com/#salon"
        },
        "areaServed": [
          { "@type": "City", "name": "Sujangarh" },
          { "@type": "City", "name": "Didwana" },
          { "@type": "City", "name": "Ladnun" }
        ],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "7999",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${page.canonical}#faq`,
        "mainEntity": page.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#080706] text-[#fcf9f4] pt-24 pb-20 sm:pt-28 md:pt-32">
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={page.canonical}
      />

      {/* JSON-LD Script in DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-stone-400 font-light"
        >
          <Link
            to="/"
            className="transition-colors hover:text-[#d4af6e] inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-600" />
          <span className="text-stone-500">Sujangarh Services</span>
          <ChevronRight className="w-3 h-3 text-stone-600" />
          <span className="text-[#f3e5c8] font-medium truncate max-w-[200px] sm:max-w-none">
            {page.h1}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(22,18,14,0.7),rgba(10,8,6,0.85))] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af6e]/30 bg-[#d4af6e]/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#d4af6e] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af6e]" />
            {page.eyebrow}
          </div>

          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fcf9f4] tracking-tight leading-[1.1] mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {page.h1}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light mb-6">
            {page.lead}
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#d4af6e]/15 mb-6">
            {page.stats.map((st) => (
              <div key={st.label} className="text-center sm:text-left">
                <p className="font-serif text-xl sm:text-2xl font-bold gold-text">
                  {st.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-stone-400 font-medium">
                  {st.label}
                </p>
              </div>
            ))}
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
              aria-label={`Book appointment for ${page.h1} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4 text-[#080706]" />
              <span>Book Appointment on WhatsApp</span>
            </a>
            <a
              href={buildPhoneLink(BUSINESS.phones[0])}
              className="btn-outline-gold justify-center px-5 py-3 text-sm font-semibold inline-flex items-center gap-2"
              aria-label={`Call Ganga Beauty Parlour at +91 ${BUSINESS.phones[0]}`}
            >
              <Phone className="w-4 h-4 text-[#d4af6e]" />
              <span>Call +91 {BUSINESS.phones[0]}</span>
            </a>
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-10 mb-10">
          {page.sections.map((section, sIdx) => (
            <section
              key={section.heading}
              className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(18,15,12,0.7),rgba(10,8,6,0.85))] p-6 sm:p-8 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)]"
            >
              <h2
                className="font-serif text-2xl sm:text-3xl text-[#f3e5c8] tracking-tight mb-3 flex items-center gap-2.5"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4af6e]/40 bg-[#d4af6e]/10 text-xs text-[#d4af6e] font-mono font-semibold">
                  0{sIdx + 1}
                </span>
                <span>{section.heading}</span>
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                {section.content}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((it) => (
                  <div
                    key={it.title}
                    className="rounded-xl border border-[#d4af6e]/15 bg-[#120f0d]/60 p-4 sm:p-5 transition-all duration-300 hover:border-[#d4af6e]/40 hover:-translate-y-0.5"
                  >
                    <h3
                      className="font-serif text-base sm:text-lg text-[#fcf9f4] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {it.title}
                    </h3>
                    <p className="text-stone-300 text-xs leading-relaxed font-light mb-3">
                      {it.desc}
                    </p>
                    {it.link && (
                      <Link
                        to={it.link}
                        className="inline-flex items-center gap-1 text-xs text-[#d4af6e] hover:text-[#f3e5c8] font-medium transition-colors"
                      >
                        <span>{it.linkText || "Learn more"}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Local Landmark & Studio Location Info */}
        <section className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(22,18,14,0.7),rgba(10,8,6,0.85))] p-6 sm:p-8 mb-10 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d4af6e] font-semibold mb-2">
            <MapPin className="w-4 h-4 text-[#d4af6e]" />
            Local Studio Location &middot; Sujangarh
          </div>
          <h2
            className="font-serif text-2xl sm:text-3xl text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Visit Our Salon in Sujangarh
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-3xl">
            {page.landmarkNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300 font-light mb-6">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4af6e] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#f3e5c8] font-medium">Address</p>
                <p>{BUSINESS.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#d4af6e] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#f3e5c8] font-medium">Salon Hours</p>
                <p>{BUSINESS.hours}</p>
                <p className="text-stone-400 text-[11px]">{BUSINESS.hoursNote}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#d4af6e] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#f3e5c8] font-medium">On-Location Services</p>
                <p>Wedding venue bookings across Sujangarh, Didwana &amp; Ladnun</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-1.5"
              aria-label="Open directions to Ganga Beauty Parlour in Google Maps"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/bridal-booking-policy"
              className="px-4 py-2.5 rounded-full border border-white/10 text-xs text-stone-300 hover:text-white hover:border-[#d4af6e]/40 transition-colors"
            >
              Read Bridal Booking Policy
            </Link>
          </div>
        </section>

        {/* FAQs Section with FAQPage Schema */}
        <section className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(18,15,12,0.7),rgba(10,8,6,0.85))] p-6 sm:p-8 mb-10 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d4af6e] font-semibold mb-2">
            <HelpCircle className="w-4 h-4 text-[#d4af6e]" />
            Frequently Asked Questions
          </div>
          <h2
            className="font-serif text-2xl sm:text-3xl text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently Asked Questions in Sujangarh
          </h2>

          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-[#d4af6e]/15 bg-[#120f0d]/60 p-4 sm:p-5"
              >
                <h3
                  className="font-serif text-base sm:text-lg text-[#f3e5c8] mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Local Services Internal Links */}
        <section className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(22,18,14,0.7),rgba(10,8,6,0.85))] p-6 sm:p-8 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)]">
          <h2
            className="font-serif text-xl sm:text-2xl text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Explore Other Salon Services in Sujangarh
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {otherPages.map((op) => (
              <Link
                key={op.slug}
                to={op.path}
                className="rounded-xl border border-[#d4af6e]/15 bg-[#120f0d]/60 p-4 transition-all duration-300 hover:border-[#d4af6e]/50 hover:-translate-y-0.5 group"
              >
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#d4af6e] font-medium mb-1">
                  Sujangarh
                </p>
                <h3
                  className="font-serif text-sm sm:text-base text-white group-hover:text-[#f3e5c8] transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {op.h1}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
