import { ArrowLeft, ChevronRight, Phone, MessageCircle, MapPin, Calendar, ShieldCheck } from "lucide-react";
import { Link } from "@/router/Router";
import SEOHead from "@/components/SEOHead";
import { POLICIES, POLICY_LIST, POLICIES_LAST_UPDATED } from "@/data/policies";
import { BUSINESS, buildPhoneLink, buildWhatsAppLink } from "@/data/site";

export default function PolicyPage({ policyKey }) {
  const policy = POLICIES[policyKey] || POLICIES["privacy-policy"];
  const waLink = buildWhatsAppLink("Hello Ganga Beauty Parlour! I have a question regarding your studio policies.");

  return (
    <div className="min-h-screen bg-[#080706] text-[#fcf9f4] pt-24 pb-20 sm:pt-28 md:pt-32">
      <SEOHead
        title={policy.seoTitle}
        description={policy.metaDescription}
        canonical={policy.canonical}
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
          <span className="text-stone-500">Policies &amp; Information</span>
          <ChevronRight className="w-3 h-3 text-stone-600" />
          <span className="text-[#f3e5c8] font-medium">{policy.title}</span>
        </nav>

        {/* Policy Switcher Quick Navigation Tabs */}
        <div className="mb-10 overflow-x-auto no-scrollbar pb-2 border-b border-[#d4af6e]/15">
          <div className="flex items-center gap-2 min-w-max">
            {POLICY_LIST.map((p) => {
              const active = p.slug === policy.slug;
              return (
                <Link
                  key={p.slug}
                  to={p.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-300 font-medium ${
                    active
                      ? "bg-[#d4af6e]/15 border border-[#d4af6e]/50 text-[#f3e5c8] shadow-[0_0_15px_rgba(212,175,110,0.15)]"
                      : "border border-white/10 text-stone-400 hover:text-stone-200 hover:border-white/20 bg-[#120f0d]/60"
                  }`}
                >
                  {p.navLabel}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Policy Article */}
        <article className="rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,rgba(22,18,14,0.7),rgba(10,8,6,0.85))] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Header */}
          <header className="border-b border-[#d4af6e]/20 pb-8 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af6e]/30 bg-[#d4af6e]/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#d4af6e] font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af6e]" />
              Official Business Policy
            </div>
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fcf9f4] tracking-tight mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {policy.title}
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
              {policy.intro}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-stone-400 font-light">
              <Calendar className="w-3.5 h-3.5 text-[#d4af6e]" />
              <span>Last updated: {POLICIES_LAST_UPDATED}</span>
            </div>
          </header>

          {/* Policy Sections */}
          <div className="space-y-8 sm:space-y-10">
            {policy.sections.map((section, idx) => (
              <section key={section.heading} className="space-y-3.5">
                <h2
                  className="font-serif text-lg sm:text-xl md:text-2xl text-[#f3e5c8] flex items-center gap-2.5"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d4af6e]/40 bg-[#d4af6e]/10 text-xs text-[#d4af6e] font-mono font-semibold">
                    {idx + 1}
                  </span>
                  <span>{section.heading}</span>
                </h2>
                <ul className="space-y-2.5 pl-8 sm:pl-9">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-stone-300 text-xs sm:text-sm leading-relaxed relative before:content-['•'] before:absolute before:-left-4 before:text-[#d4af6e] font-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Support / Questions Card */}
          <div className="mt-12 pt-8 border-t border-[#d4af6e]/20 bg-[linear-gradient(135deg,rgba(26,21,16,0.6),rgba(12,10,8,0.7))] -mx-6 sm:-mx-10 md:-mx-12 -mb-6 sm:-mb-10 md:-mb-12 p-6 sm:p-10 rounded-b-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="font-serif text-lg sm:text-xl text-[#fcf9f4] mb-1.5" style={{ fontFamily: "Playfair Display, serif" }}>
                  Have questions about our policies?
                </p>
                <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                  Our team is available to assist you with appointment planning, bridal reservations, and any questions regarding salon services.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af6e]" />
                    Sujangarh &amp; Didwana
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af6e]" />
                    Mon - Sun &middot; 10:00 AM - 8:00 PM
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildPhoneLink(BUSINESS.phones[0])}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af6e]/40 bg-[#d4af6e]/10 px-4 py-2 text-xs font-medium text-[#f3e5c8] transition-colors hover:bg-[#d4af6e]/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af6e]" />
                  Call Us
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#25D366]/25"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
