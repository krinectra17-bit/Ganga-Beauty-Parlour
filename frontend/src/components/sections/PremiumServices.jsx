import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  Check,
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
      className="section relative bg-[#090909]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-6 sm:mb-8 max-w-3xl text-center md:mb-12">
          <span className="eyebrow">Rate Card & Packages</span>
          <div className="gold-divider mx-auto mt-2.5 mb-4" />
          <h2
            className="font-serif text-2xl tracking-tight text-white min-[400px]:text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Services & <span className="italic gold-text">Package Pricing</span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-stone-300/85 sm:text-sm md:text-base sm:leading-6">
            Complete bridal suites, destination artistry, clinical facials and laser
            treatments with verified, transparent inclusions.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="relative mx-auto mb-6 sm:mb-8 md:mb-10 max-w-5xl px-2 sm:px-4">
          <div className="flex items-center gap-2">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollTabs(-280)}
                aria-label="Scroll left categories"
                className="hidden sm:flex lg:hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/90 text-stone-300 shadow-sm transition-all hover:border-[#C5A880] hover:text-[#C5A880]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}

            <div
              ref={tabsContainerRef}
              onScroll={updateScrollIndicators}
              role="tablist"
              aria-label="Service categories"
              className="no-scrollbar flex-1 min-w-0 flex items-center gap-2 overflow-x-auto scroll-smooth py-1.5 px-1 snap-x snap-mandatory lg:flex-wrap lg:justify-center lg:gap-2.5 lg:overflow-visible"
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
                    className={`group relative flex shrink-0 snap-start items-center gap-1.5 rounded-full px-3.5 py-2 text-xs uppercase tracking-wider transition-all duration-300 sm:px-4 sm:py-2 min-h-[38px] sm:min-h-[40px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880] ${
                      isActive
                        ? "bg-[#C5A880] font-semibold text-[#090909] shadow-sm"
                        : "border border-white/10 bg-[#0d0d0d] text-stone-300 hover:border-[#C5A880]/40 hover:text-white"
                    }`}
                  >
                    <span className="whitespace-nowrap font-medium">{tab.label}</span>
                    <span
                      className={`whitespace-nowrap text-[10px] lowercase tracking-normal ${
                        isActive ? "text-stone-900 font-medium" : "text-stone-400 font-normal"
                      }`}
                    >
                      ({tab.range})
                    </span>
                  </button>
                );
              })}
              <div className="shrink-0 w-6 lg:hidden" aria-hidden="true" />
            </div>

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollTabs(280)}
                aria-label="Scroll right categories"
                className="hidden sm:flex lg:hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/90 text-stone-300 shadow-sm transition-all hover:border-[#C5A880] hover:text-[#C5A880]"
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
                    className={`luxe-card relative flex flex-col justify-between p-4 min-[400px]:p-5 sm:p-6 transition-all duration-300 ${
                      pkg.highlight ? "border-[#C5A880]/35 bg-[#100f0e]" : ""
                    }`}
                  >
                    <div>
                      {/* Category / Artist Level & Badge */}
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.14em] text-[#DFCEB8] sm:text-[10px]">
                          {pkg.artistLevel}
                        </span>
                        {pkg.badge && (
                          <span className="rounded-full bg-[#C5A880] px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#090909] sm:text-[9px]">
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Package Price */}
                      <h3
                        className="font-serif text-2xl font-semibold text-white sm:text-3xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {pkg.price}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-1 text-xs leading-relaxed text-stone-400">
                        {pkg.desc}
                      </p>

                      <div className="my-3 sm:my-4 h-px bg-white/[0.07]" />

                      {/* Inclusions */}
                      <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#C5A880]">
                        Inclusions ({pkg.inclusions.length} items):
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.inclusions.map((item, idx) => {
                          const isMobileVisible = idx < 3 || isExpanded;
                          const isDesktopVisible = idx < 7 || isExpanded;
                          return (
                            <li
                              key={idx}
                              className={`items-start gap-2 text-xs text-stone-300 sm:gap-2.5 ${
                                isMobileVisible
                                  ? isDesktopVisible
                                    ? "flex"
                                    : "flex lg:hidden"
                                  : isDesktopVisible
                                  ? "hidden lg:flex"
                                  : "hidden"
                              }`}
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C5A880]" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Expand / Collapse Control */}
                      {pkg.inclusions.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(pkg.key)}
                          data-testid={`toggle-inclusions-${pkg.key}`}
                          className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-[#C5A880] hover:text-[#DFCEB8] transition-colors ${
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

                    {/* Booking Button */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => bookService(pkg.bookingLabel)}
                        data-testid={`book-${pkg.key}`}
                        className={`w-full justify-center py-2.5 sm:py-3 text-xs uppercase tracking-wider ${
                          pkg.highlight ? "btn-gold" : "btn-outline-gold"
                        }`}
                      >
                        <span>Book Bridal Package</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Artist Policy Notice */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4 text-center">
              <p className="text-xs text-stone-300 leading-relaxed">
                <span className="font-medium text-[#DFCEB8]">
                  Certified Artist Standard:{" "}
                </span>
                ₹7,999 to ₹11,000 packages prepared by Basic Artists. ₹15,000 to
                ₹25,000 packages prepared by Certified Professional Artists with
                100% Makeup Guarantee.
              </p>
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
                    className="luxe-card-premium relative flex flex-col justify-between p-4 min-[400px]:p-5 sm:p-6 transition-all duration-300"
                  >
                    <div>
                      {/* Badge & Professional Artist Tag */}
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#DFCEB8]">
                          {pkg.badge || "Signature Luxury"}
                        </span>
                        <span className="rounded-full border border-[#C5A880]/30 bg-black/40 px-2 py-0.5 text-[8px] uppercase tracking-wider text-[#C5A880]">
                          Professional Artist
                        </span>
                      </div>

                      {/* Package Price */}
                      <h3
                        className="font-serif text-2xl font-semibold text-white sm:text-3xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {pkg.price}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-1 text-xs leading-relaxed text-stone-300/85">
                        {pkg.desc}
                      </p>

                      <div className="my-3 sm:my-4 h-px bg-white/[0.08]" />

                      {/* Inclusions */}
                      <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#C5A880]">
                        Inclusions ({pkg.inclusions.length} items):
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.inclusions.map((item, idx) => {
                          const isMobileVisible = idx < 3 || isExpanded;
                          const isDesktopVisible = idx < 8 || isExpanded;
                          return (
                            <li
                              key={idx}
                              className={`items-start gap-2 text-xs text-stone-200 sm:gap-2.5 ${
                                isMobileVisible
                                  ? isDesktopVisible
                                    ? "flex"
                                    : "flex lg:hidden"
                                  : isDesktopVisible
                                  ? "hidden lg:flex"
                                  : "hidden"
                              }`}
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C5A880]" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Expand / Collapse Control */}
                      {pkg.inclusions.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(pkg.key)}
                          data-testid={`toggle-inclusions-${pkg.key}`}
                          className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-[#C5A880] hover:text-[#DFCEB8] transition-colors ${
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

                    {/* Booking Button */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => bookService(pkg.bookingLabel)}
                        data-testid={`book-${pkg.key}`}
                        className="btn-gold w-full justify-center py-2.5 sm:py-3 text-xs uppercase tracking-wider"
                      >
                        <span>Book Premium Package</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guarantee Banner */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4 text-center">
              <p className="text-xs text-stone-300 leading-relaxed">
                <span className="font-medium text-[#DFCEB8]">
                  Atelier Quality Guarantee:{" "}
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
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4">
              <p className="text-xs text-stone-300 leading-relaxed text-center sm:text-left">
                <span className="font-medium text-[#DFCEB8]">
                  Destination & Out of Parlour Protocol:{" "}
                </span>
                {OUT_OF_PARLOUR_TRAVEL_NOTE}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
              {OUT_OF_PARLOUR_MAKEUP.map((item, index) => (
                <div
                  key={index}
                  className="luxe-card flex items-center justify-between p-3.5 sm:p-4 transition-all hover:border-[#C5A880]/35"
                >
                  <div className="min-w-0 pr-2">
                    <p className="truncate text-xs font-medium text-white sm:text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#DFCEB8]">
                      {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      bookService(`Out of Parlour: ${item.name} (${item.price})`)
                    }
                    className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-[10px] uppercase tracking-wider text-stone-300 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
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
              <div className="mb-2">
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Two-Time Makeup <span className="italic gold-text">Packages</span>
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  Coordinated makeovers for two major ceremonies (e.g., Wedding + Sangeet or Wedding + Reception).
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-4">
                {TWO_TIME_MAKEUP.map((item) => (
                  <div
                    key={item.key}
                    className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:border-[#C5A880]/35"
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.14em] text-[#C5A880]">
                        2 Ceremonies
                      </span>
                      <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 text-xl sm:text-2xl font-semibold text-[#DFCEB8]">
                        {item.price}
                      </p>
                      <p className="mt-1.5 text-xs text-stone-300/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(item.bookingLabel)}
                      className="mt-4 btn-outline-gold w-full justify-center py-2 text-xs"
                    >
                      Book 2-Time Package
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Three-Time Makeup */}
            <div className="border-t border-white/[0.06] pt-6 sm:pt-8">
              <div className="mb-2">
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Three-Time Makeup <span className="italic gold-text">Signature Combos</span>
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  Complete bridal luxury for all 3 wedding events (Haldi + Sangeet + Wedding).
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-6 mt-4">
                {THREE_TIME_MAKEUP.map((item) => (
                  <div
                    key={item.key}
                    className="luxe-card-premium flex flex-col justify-between p-4 sm:p-6"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#DFCEB8]">
                          3 Functions Covered
                        </span>
                      </div>
                      <h4 className="mt-2.5 font-serif text-xl sm:text-2xl font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 text-2xl sm:text-3xl font-semibold text-[#DFCEB8]">
                        {item.price}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-stone-300">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(item.bookingLabel)}
                      className="mt-4 sm:mt-6 btn-gold w-full justify-center py-2.5 sm:py-3 text-xs"
                    >
                      <span>Reserve 3-Time Package</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
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
              <div className="mb-2">
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  O3+ Professional <span className="italic gold-text">Facials</span>
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  Clinical-grade dermaceutical skin brightening and bridal glow treatments.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mt-4">
                {O3_PROFESSIONAL_FACIAL.map((item, idx) => (
                  <div
                    key={idx}
                    className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:border-[#C5A880]/35"
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.14em] text-[#C5A880]">
                        O3+ Professional
                      </span>
                      <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 text-lg sm:text-xl font-semibold text-[#DFCEB8]">
                        {item.price}
                      </p>
                      <p className="mt-1.5 text-xs text-stone-300/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(`${item.name} (${item.price})`)}
                      className="mt-3.5 btn-outline-gold w-full justify-center py-2 text-xs"
                    >
                      Book Facial
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Facial Section */}
            <div className="border-t border-white/[0.06] pt-6 sm:pt-8">
              <div className="mb-2">
                <h3
                  className="font-serif text-xl sm:text-2xl text-white md:text-3xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Classic & Premium <span className="italic gold-text">Facials</span>
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  {FACIAL_CONSULTATION_NOTE}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 mt-4">
                {FACIAL_SERVICES.map((item, idx) => (
                  <div
                    key={idx}
                    className="luxe-card flex items-center justify-between p-3 sm:p-4"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="truncate text-xs font-medium text-white sm:text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs font-semibold text-[#DFCEB8]">
                        {item.price}
                      </p>
                      <p className="truncate text-[10px] sm:text-[11px] text-stone-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => bookService(`${item.name} (${item.price})`)}
                      className="shrink-0 rounded-full border border-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] uppercase tracking-wider text-stone-300 hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
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
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#C5A880]">
                      Hydra Technology
                    </span>
                    <h4 className="mt-2 font-serif text-lg sm:text-xl font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 text-xl sm:text-2xl font-semibold text-[#DFCEB8]">
                      {item.price}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-stone-300/85">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => bookService(`${item.name} (${item.price})`)}
                    className="mt-4 sm:mt-6 btn-gold w-full justify-center py-2.5 sm:py-3 text-xs"
                  >
                    <span>Reserve Session</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4 text-center">
              <p className="text-xs text-stone-300 leading-relaxed">
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
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4">
              <p className="text-xs text-stone-300 leading-relaxed text-center sm:text-left">
                <span className="font-medium text-[#DFCEB8]">
                  Clinical Laser Protocol:{" "}
                </span>
                {LASER_SESSION_NOTE} Complete painless treatments performed using medical-grade laser technology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {LASER_TREATMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="luxe-card flex flex-col justify-between p-4 sm:p-5 transition-all hover:border-[#C5A880]/35"
                >
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#C5A880]">
                      Laser Session
                    </span>
                    <h4 className="mt-1 font-serif text-base sm:text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 text-lg sm:text-xl font-semibold text-[#DFCEB8]">
                      {item.price}
                    </p>
                    <p className="mt-1.5 text-xs text-stone-300/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => bookService(`${item.name} (${item.price})`)}
                    className="mt-3.5 btn-outline-gold w-full justify-center py-2 text-xs"
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
