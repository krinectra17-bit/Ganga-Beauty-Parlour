import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  Crown,
  Check,
  ShieldCheck,
  Car,
  Clock,
  Sparkle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  BRIDAL_PACKAGES,
  PREMIUM_BRIDAL_PACKAGES,
  ARTIST_GUARANTEE_NOTE,
  OUT_OF_PARLOUR_MAKEUP,
  OUT_OF_PARLOUR_TRAVEL_NOTE,
  TWO_TIME_MAKEUP,
  THREE_TIME_MAKEUP,
  FACIAL_SERVICES,
  FACIAL_CONSULTATION_NOTE,
  O3_PROFESSIONAL_FACIAL,
  HYDRA_FACIAL_SERVICES,
  LASER_TREATMENTS,
  LASER_SESSION_NOTE,
  bookService,
} from "@/data/site";

const CATEGORIES = [
  { id: "bridal", label: "Bridal Packages", range: "₹7,999 - ₹25k" },
  { id: "premium", label: "Premium Bridal", range: "₹31,000 - ₹61k" },
  { id: "out-of-parlour", label: "Out of Parlour", range: "₹6,100 - ₹45k" },
  { id: "multi-time", label: "2-Time & 3-Time", range: "₹25k - ₹80k" },
  { id: "facials", label: "Facials & O3+", range: "₹550 - ₹4,200" },
  { id: "hydra", label: "Hydra Facial", range: "₹500 - ₹5,000" },
  { id: "laser", label: "Laser Treatment", range: "Per Session" },
];

export default function PremiumServices() {
  const [activeTab, setActiveTab] = useState("bridal");
  const [expandedCards, setExpandedCards] = useState({});
  const tabsContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollIndicators = useCallback(() => {
    const el = tabsContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    updateScrollIndicators();
    const handleResize = () => updateScrollIndicators();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScrollIndicators]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setTimeout(() => {
      const el = tabsContainerRef.current;
      if (el && el.scrollWidth > el.clientWidth) {
        const btn = el.querySelector(`[data-testid="pricing-tab-${tabId}"]`);
        if (btn) {
          btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
      updateScrollIndicators();
    }, 50);
  };

  const scrollTabs = (offset) => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
      setTimeout(updateScrollIndicators, 320);
    }
  };

  const toggleExpand = (key) => {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="premium-services"
      data-testid="premium-services-section"
      className="section relative overflow-hidden bg-black"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/24 to-transparent" />
      <div className="absolute left-1/2 top-16 h-52 w-52 -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[105px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-6 sm:mb-8 max-w-3xl text-center md:mb-12">
          <span className="eyebrow">Luxury Ritual Menu</span>
          <div className="gold-divider mx-auto mt-2.5 sm:mt-3 mb-4 sm:mb-5" />
          <h2
            className="font-serif text-2xl tracking-tight text-white min-[400px]:text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Services & <span className="italic gold-text">Package Pricing</span>
          </h2>
          <p className="mx-auto mt-2.5 sm:mt-3 max-w-2xl text-xs leading-relaxed text-zinc-300/85 sm:text-sm md:text-base sm:leading-6">
            Complete updated bridal packages, out-of-parlour makeup, luxury facial
            treatments and laser services with verified inclusions.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="relative mx-auto mb-6 sm:mb-8 md:mb-10 max-w-5xl px-2 sm:px-4">
          <div className="flex items-center gap-2">
            {/* Left Scroll Button (visible on tablet when scrollable) */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollTabs(-280)}
                aria-label="Scroll left categories"
                className="hidden sm:flex lg:hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-black/95 text-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all hover:bg-[#D4AF37] hover:text-black hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            {/* Scrollable / Centered Tabs Track */}
            <div
              ref={tabsContainerRef}
              onScroll={updateScrollIndicators}
              role="tablist"
              aria-label="Service categories"
              className="no-scrollbar flex-1 min-w-0 flex items-center gap-2 overflow-x-auto scroll-smooth py-2 px-1 snap-x snap-mandatory lg:flex-wrap lg:justify-center lg:gap-3 lg:overflow-visible lg:py-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {CATEGORIES.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`pricing-panel-${tab.id}`}
                    id={`pricing-tab-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                    data-testid={`pricing-tab-${tab.id}`}
                    className={`group relative flex shrink-0 snap-start items-center gap-1.5 rounded-full px-3.5 py-2 text-xs uppercase tracking-wider transition-all duration-300 sm:px-5 sm:py-2.5 min-h-[40px] sm:min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                      isActive
                        ? "bg-[#D4AF37] font-semibold text-black shadow-[0_4px_22px_rgba(212,175,55,0.45)] scale-[1.02]"
                        : "border border-[#D4AF37]/25 bg-zinc-950/80 text-zinc-300 hover:border-[#D4AF37]/60 hover:text-white hover:bg-zinc-900/60"
                    }`}
                  >
                    <span className="whitespace-nowrap font-medium">{tab.label}</span>
                    <span
                      className={`whitespace-nowrap text-[10px] lowercase tracking-normal transition-colors ${
                        isActive
                          ? "text-black/80 font-medium"
                          : "text-[#E8CA6B]/90 font-normal group-hover:text-[#E8CA6B]"
                      }`}
                    >
                      ({tab.range})
                    </span>
                  </button>
                );
              })}
              {/* Spacer to guarantee the last item is never clipped on mobile scroll */}
              <div className="shrink-0 w-6 lg:hidden" aria-hidden="true" />
            </div>

            {/* Right Scroll Button (visible on tablet when scrollable) */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollTabs(280)}
                aria-label="Scroll right categories"
                className="hidden sm:flex lg:hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-black/95 text-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all hover:bg-[#D4AF37] hover:text-black hover:scale-105 active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* =========================================================================
            TAB 1: BRIDAL PACKAGES (₹7,999 to ₹25,000)
           ========================================================================= */}
        {activeTab === "bridal" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {BRIDAL_PACKAGES.map((pkg) => {
                const isExpanded = !!expandedCards[pkg.key];

                return (
                  <div
                    key={pkg.key}
                    data-testid={`bridal-card-${pkg.key}`}
                    className={`luxe-card relative flex flex-col justify-between overflow-hidden p-4 min-[400px]:p-5 sm:p-5 lg:p-6 transition-all duration-500 ${
                      pkg.highlight
                        ? "border-[#D4AF37]/60 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_40%),linear-gradient(180deg,#15130d,#060606)] shadow-[0_24px_60px_-40px_rgba(212,175,55,0.5)]"
                        : ""
                    }`}
                  >
                    <div>
                      {/* 1. Category / Artist Level & Badge */}
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-[#E8CA6B] sm:text-[10px] sm:px-3 sm:py-1">
                          {pkg.artistLevel}
                        </span>
                        {pkg.badge && (
                          <span className="rounded-full bg-[#D4AF37] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-black sm:text-[9px] sm:px-2.5">
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* 2. Package Price */}
                      <h3
                        className="font-serif text-2xl font-semibold text-white sm:text-3xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {pkg.price}
                      </h3>

                      {/* 3. Short Description */}
                      <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
                        {pkg.desc}
                      </p>

                      <div className="my-3 sm:my-4 h-px bg-gradient-to-r from-[#D4AF37]/40 via-zinc-800 to-transparent" />

                      {/* 4. First 3 Inclusions (responsive expand) */}
                      <div className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#D4AF37] sm:text-[10px]">
                        Package Inclusions ({pkg.inclusions.length} items):
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.inclusions.map((item, idx) => {
                          const isMobileVisible = idx < 3 || isExpanded;
                          const isDesktopVisible = idx < 7 || isExpanded;
                          return (
                            <li
                              key={idx}
                              className={`items-start gap-2 text-[11px] text-zinc-300 sm:text-xs sm:gap-2.5 ${
                                isMobileVisible
                                  ? isDesktopVisible
                                    ? "flex"
                                    : "flex lg:hidden"
                                  : isDesktopVisible
                                  ? "hidden lg:flex"
                                  : "hidden"
                              }`}
                            >
                              <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37] sm:h-4 sm:w-4">
                                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              </span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* 5. View All Inclusions */}
                      {pkg.inclusions.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(pkg.key)}
                          data-testid={`toggle-inclusions-${pkg.key}`}
                          className={`mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D4AF37] hover:text-[#E8CA6B] transition-colors sm:text-xs ${
                            pkg.inclusions.length <= 7 && !isExpanded ? "lg:hidden" : ""
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              <span className="lg:hidden">Collapse Inclusions</span>
                              <span className="hidden lg:inline">Show fewer items</span>
                              <ChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              <span className="lg:hidden">
                                View All Inclusions ({pkg.inclusions.length})
                              </span>
                              <span className="hidden lg:inline">
                                {pkg.inclusions.length > 7
                                  ? `+${pkg.inclusions.length - 7} more inclusions`
                                  : "View All Inclusions"}
                              </span>
                              <ChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* 6. Book Appointment button */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-800/80">
                      <button
                        type="button"
                        onClick={() => bookService(pkg.bookingLabel)}
                        data-testid={`book-${pkg.key}`}
                        className={`w-full justify-center py-2.5 sm:py-3 text-xs uppercase tracking-wider ${
                          pkg.highlight ? "btn-gold" : "btn-outline-gold"
                        }`}
                      >
                        <span>Book Bridal Package</span>
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Artist Policy Notice */}
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-zinc-950/80 p-3.5 sm:p-5 text-center">
              <div className="flex flex-col items-center justify-center gap-2 text-xs text-zinc-300 sm:flex-row">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                <p className="leading-relaxed">
                  <span className="font-semibold text-[#E8CA6B]">
                    Certified Artist Policy:{" "}
                  </span>
                  ₹7,999 to ₹11,000 packages prepared by Basic Artists. ₹15,000 to
                  ₹25,000 packages prepared by Certified Professional Artists with
                  100% Makeup Guarantee.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: PREMIUM BRIDAL PACKAGES (₹31,000 to ₹61,000)
           ========================================================================= */}
        {activeTab === "premium" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {PREMIUM_BRIDAL_PACKAGES.map((pkg) => {
                const isExpanded = !!expandedCards[pkg.key];

                return (
                  <div
                    key={pkg.key}
                    data-testid={`premium-card-${pkg.key}`}
                    className="luxe-card-premium relative flex flex-col justify-between p-4 min-[400px]:p-5 sm:p-5 lg:p-6 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div>
                      {/* 1. Category / Badge & Professional Artist Tag */}
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <Crown className="h-3.5 w-3.5 text-[#D4AF37] sm:h-4 sm:w-4" />
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-[#E8CA6B] sm:text-[10px]">
                            {pkg.badge || "Signature Luxury"}
                          </span>
                        </div>
                        <span className="rounded-full border border-[#D4AF37]/30 bg-black/40 px-2.5 py-0.5 text-[8px] uppercase tracking-wider text-[#D4AF37] sm:text-[9px]">
                          Professional Artist
                        </span>
                      </div>

                      {/* 2. Package Price */}
                      <h3
                        className="font-serif text-2xl font-semibold text-white sm:text-3xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {pkg.price}
                      </h3>

                      {/* 3. Short Description */}
                      <p className="mt-1 text-[11px] leading-relaxed text-zinc-300/85 sm:text-xs">
                        {pkg.desc}
                      </p>

                      <div className="my-3 sm:my-4 h-px bg-gradient-to-r from-[#D4AF37]/50 via-zinc-800 to-transparent" />

                      {/* 4. First 3 Inclusions (responsive expand) */}
                      <div className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#D4AF37] sm:text-[10px]">
                        Package Inclusions ({pkg.inclusions.length} items):
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.inclusions.map((item, idx) => {
                          const isMobileVisible = idx < 3 || isExpanded;
                          const isDesktopVisible = idx < 8 || isExpanded;
                          return (
                            <li
                              key={idx}
                              className={`items-start gap-2 text-[11px] text-zinc-200 sm:text-xs sm:gap-2.5 ${
                                isMobileVisible
                                  ? isDesktopVisible
                                    ? "flex"
                                    : "flex lg:hidden"
                                  : isDesktopVisible
                                  ? "hidden lg:flex"
                                  : "hidden"
                              }`}
                            >
                              <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37] sm:h-4 sm:w-4">
                                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              </span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* 5. View All Inclusions */}
                      {pkg.inclusions.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(pkg.key)}
                          data-testid={`toggle-inclusions-${pkg.key}`}
                          className={`mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D4AF37] hover:text-[#E8CA6B] transition-colors sm:text-xs ${
                            pkg.inclusions.length <= 8 && !isExpanded ? "lg:hidden" : ""
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              <span className="lg:hidden">Collapse Inclusions</span>
                              <span className="hidden lg:inline">Show fewer</span>
                              <ChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              <span className="lg:hidden">
                                View All Inclusions ({pkg.inclusions.length})
                              </span>
                              <span className="hidden lg:inline">
                                {pkg.inclusions.length > 8
                                  ? `+${pkg.inclusions.length - 8} more inclusions`
                                  : "View All Inclusions"}
                              </span>
                              <ChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* 6. Book Appointment button */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-800/80">
                      <button
                        type="button"
                        onClick={() => bookService(pkg.bookingLabel)}
                        data-testid={`book-${pkg.key}`}
                        className="btn-gold w-full justify-center py-2.5 sm:py-3 text-xs uppercase tracking-wider"
                      >
                        <span>Book Premium Package</span>
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Official Artist Guarantee Banner */}
            <div className="rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-black via-zinc-950 to-black p-4 sm:p-5 text-center shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
              <p className="text-xs text-zinc-300 leading-relaxed sm:text-sm">
                <span className="font-semibold text-[#E8CA6B]">
                  Ganga Beauty Parlour Guarantee:{" "}
                </span>
                {ARTIST_GUARANTEE_NOTE}
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: OUT OF PARLOUR MAKEUP (₹6,100 to ₹45,000)
           ========================================================================= */}
        {activeTab === "out-of-parlour" && (
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-zinc-950/70 p-3.5 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 text-xs text-zinc-300 text-center sm:text-left">
                <Car className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#D4AF37]" />
                <div>
                  <span className="font-semibold text-[#E8CA6B]">
                    Out of Parlour / Destination Services:{" "}
                  </span>
                  {OUT_OF_PARLOUR_TRAVEL_NOTE}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
              {OUT_OF_PARLOUR_MAKEUP.map((item, index) => (
                <div
                  key={index}
                  className="luxe-card flex items-center justify-between p-3.5 sm:p-4 transition-all hover:border-[#D4AF37]/50"
                >
                  <div className="min-w-0 pr-2">
                    <p className="truncate text-xs font-medium text-white sm:text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#E8CA6B]">
                      {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      bookService(`Out of Parlour: ${item.name} (${item.price})`)
                    }
                    className="shrink-0 rounded-full border border-[#D4AF37]/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    Book
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => bookService("Out of Parlour Makeup Consultation")}
                className="btn-gold w-full sm:w-auto py-2.5 sm:py-3 text-xs"
              >
                Request Custom Out-of-Parlour Quote
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: TWO-TIME & THREE-TIME MAKEUP (₹25,000 to ₹80,000)
           ========================================================================= */}
        {activeTab === "multi-time" && (
          <div className="space-y-8 sm:space-y-10">
            {/* Two-Time Makeup */}
            <div>
              <div className="mb-3 sm:mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37]" />
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Two-Time Makeup <span className="gold-text">Packages</span>
                </h3>
              </div>
              <p className="mb-4 sm:mb-6 text-xs text-zinc-400">
                Coordinated makeovers for two major ceremonies (e.g., Wedding + Sangeet or Wedding + Reception).
              </p>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {TWO_TIME_MAKEUP.map((item) => (
                  <div
                    key={item.key}
                    className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37]">
                        2 Ceremonies
                      </span>
                      <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold text-[#E8CA6B]">
                        {item.price}
                      </p>
                      <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-zinc-300/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(item.bookingLabel)}
                      className="mt-4 sm:mt-5 btn-outline-gold w-full justify-center py-2 text-xs"
                    >
                      Book 2-Time Package
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Three-Time Makeup */}
            <div className="border-t border-zinc-900 pt-6 sm:pt-8">
              <div className="mb-3 sm:mb-4 flex items-center gap-2">
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37]" />
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Three-Time Makeup <span className="gold-text">Signature Combos</span>
                </h3>
              </div>
              <p className="mb-4 sm:mb-6 text-xs text-zinc-400">
                Complete bridal luxury for all 3 wedding events (Haldi + Sangeet + Wedding).
              </p>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-6">
                {THREE_TIME_MAKEUP.map((item) => (
                  <div
                    key={item.key}
                    className="luxe-card-premium flex flex-col justify-between p-4 sm:p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-[#D4AF37] px-2.5 py-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-black">
                          3 Functions Covered
                        </span>
                        <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#D4AF37]" />
                      </div>
                      <h4 className="mt-2.5 sm:mt-3 font-serif text-xl sm:text-2xl font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl font-bold text-[#E8CA6B]">
                        {item.price}
                      </p>
                      <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs leading-relaxed text-zinc-300">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(item.bookingLabel)}
                      className="mt-4 sm:mt-6 btn-gold w-full justify-center py-2.5 sm:py-3 text-xs"
                    >
                      <span>Reserve 3-Time Package</span>
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: FACIAL SERVICES & O3+ PROFESSIONAL (₹550 to ₹4,200)
           ========================================================================= */}
        {activeTab === "facials" && (
          <div className="space-y-8 sm:space-y-10">
            {/* O3+ Professional Section */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37]" />
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  O3+ Professional <span className="gold-text">Facials</span>
                </h3>
              </div>
              <p className="mb-4 sm:mb-6 text-xs text-zinc-400">
                Clinical-grade dermaceutical skin brightening and bridal glow treatments.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {O3_PROFESSIONAL_FACIAL.map((item, idx) => (
                  <div
                    key={idx}
                    className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:border-[#D4AF37]/50"
                  >
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37]">
                        O3+ Professional
                      </span>
                      <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#E8CA6B]">
                        {item.price}
                      </p>
                      <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-zinc-300/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(`${item.name} (${item.price})`)}
                      className="mt-3.5 sm:mt-4 btn-outline-gold w-full justify-center py-2 text-xs"
                    >
                      Book Facial
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Facial Section */}
            <div className="border-t border-zinc-900 pt-6 sm:pt-8">
              <div className="mb-3 flex items-center justify-between">
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Classic & Premium <span className="gold-text">Facials</span>
                </h3>
              </div>
              <p className="mb-4 sm:mb-5 text-xs text-zinc-400">
                {FACIAL_CONSULTATION_NOTE}
              </p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                {FACIAL_SERVICES.map((item, idx) => (
                  <div
                    key={idx}
                    className="luxe-card flex items-center justify-between p-3 sm:p-4"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="truncate text-xs font-medium text-white sm:text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs font-semibold text-[#E8CA6B]">
                        {item.price}
                      </p>
                      <p className="truncate text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(`${item.name} (${item.price})`)}
                      className="shrink-0 rounded-full border border-[#D4AF37]/40 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                    >
                      Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6: HYDRA FACIAL & COLD MASSAGE (₹500 to ₹5,000)
           ========================================================================= */}
        {activeTab === "hydra" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {HYDRA_FACIAL_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className="luxe-card-premium flex flex-col justify-between p-4 sm:p-6"
                >
                  <div>
                    <span className="rounded-full border border-[#D4AF37]/30 bg-black/40 px-2.5 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-wider text-[#D4AF37]">
                      Hydra Technology
                    </span>
                    <h4 className="mt-2.5 sm:mt-3 font-serif text-lg sm:text-xl font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold text-[#E8CA6B]">
                      {item.price}
                    </p>
                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs leading-relaxed text-zinc-300/85">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => bookService(`${item.name} (${item.price})`)}
                    className="mt-4 sm:mt-6 btn-gold w-full justify-center py-2.5 sm:py-3 text-xs"
                  >
                    <span>Reserve Session</span>
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-zinc-950/70 p-4 sm:p-5 text-center">
              <p className="text-xs text-zinc-300 leading-relaxed">
                Hydra Facials utilize vortex suction, oxygen spray, radio-frequency
                tightening and cryo-cold hammer technology for deep cellular glow.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 7: LASER TREATMENT (8-10 Sessions / Per Session Rate)
           ========================================================================= */}
        {activeTab === "laser" && (
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-zinc-950/70 p-3.5 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 text-xs text-zinc-300 text-center sm:text-left">
                <Sparkle className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#D4AF37]" />
                <div>
                  <span className="font-semibold text-[#E8CA6B]">
                    Advanced Permanent Hair Reduction:{" "}
                  </span>
                  {LASER_SESSION_NOTE} Complete painless treatments performed using medical-grade laser technology.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {LASER_TREATMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:border-[#D4AF37]/50"
                >
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D4AF37]">
                      Laser Session
                    </span>
                    <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#E8CA6B]">
                      {item.price}
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-zinc-300/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => bookService(`${item.name} (${item.price})`)}
                    className="mt-3.5 sm:mt-5 btn-outline-gold w-full justify-center py-2 text-xs"
                  >
                    Book Laser Session
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => bookService("Laser Treatment Consultation")}
                className="btn-gold w-full sm:w-auto py-2.5 sm:py-3 text-xs"
              >
                Book Laser Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
