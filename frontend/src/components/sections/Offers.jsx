import { ArrowRight, Check } from "lucide-react";
import { OFFERS, bookService } from "@/data/site";

export default function Offers() {
  return (
    <section
      id="offers"
      data-testid="offers-section"
      className="section relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(214,178,124,0.12)_0%,#110e0b_45%,#080706_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/25 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mx-auto mb-6 sm:mb-10 max-w-3xl text-center md:mb-12">
          <span className="eyebrow">Curated Privileges</span>
          <div className="gold-divider mx-auto mt-2.5 sm:mt-3 mb-4 sm:mb-5" />
          <h2
            className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl sm:text-4xl md:text-[3.2rem]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Seasonal celebration{" "}
            <span className="italic font-serif gold-text">privileges.</span>
          </h2>
          <p className="mx-auto mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed sm:leading-7 text-stone-300/85 font-light">
            Bespoke celebratory packages and limited-edition bridal suites designed for upcoming wedding ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {OFFERS.map((offer, idx) => {
            const isHighlight = offer.highlight;
            const visiblePerks = offer.perks.slice(0, 4);

            return (
              <article
                key={offer.title}
                data-testid={`offer-${offer.title.toLowerCase().replace(/\s+/g, "-")}`}
                data-sr
                data-sr-delay={`${idx * 110}ms`}
                className={`group relative flex min-h-0 md:min-h-[350px] overflow-hidden rounded-2xl p-4 min-[400px]:p-5 sm:p-6 lg:p-7 transition-all duration-500 hover:-translate-y-1 ${
                  isHighlight
                    ? "border border-[#e5ca9a]/55 bg-[linear-gradient(180deg,#201912,#100c08)] shadow-[0_22px_55px_-20px_rgba(214,178,124,0.28)] lg:-translate-y-2 lg:hover:-translate-y-3"
                    : "border border-[#d4af6e]/25 bg-[linear-gradient(180deg,#15120f,#0c0a08)] hover:border-[#d4af6e]/50 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.9)]"
                }`}
              >
                <div className="relative flex w-full flex-col">
                  <div className="mb-3 sm:mb-4 flex items-start justify-between gap-3">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#d4af6e]">
                      {offer.subtitle}
                    </span>
                    <span
                      className={`px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.12em] rounded-full ${
                        isHighlight
                          ? "bg-gradient-to-r from-[#dfc59b] to-[#c5a059] text-[#080705] font-bold shadow-sm"
                          : "border border-[#d4af6e]/35 bg-[#d4af6e]/10 text-[#f3e5c8] font-semibold"
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-xl sm:text-2xl leading-tight text-white md:text-[1.85rem]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {offer.title}
                  </h3>

                  <div className="my-3 sm:my-4 h-px bg-white/[0.08]" />

                  <p
                    className={`font-serif leading-none font-bold ${
                      isHighlight
                        ? "text-2xl min-[400px]:text-3xl gold-text md:text-[2.65rem] lg:text-5xl"
                        : "text-xl min-[400px]:text-2xl text-[#f3e5c8] md:text-[2.15rem] lg:text-4xl"
                    }`}
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {offer.priceLabel}
                  </p>

                  <ul className="mt-3 sm:mt-5 space-y-2 sm:space-y-2.5">
                    {visiblePerks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug sm:leading-6 text-stone-200/90 font-light"
                      >
                        <Check className="h-3.5 w-3.5 text-[#d4af6e] mt-1 shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => bookService(offer.service)}
                    data-testid={`offer-cta-${offer.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`mt-4 sm:mt-auto w-full justify-center py-2.5 sm:py-3 text-xs sm:text-sm cursor-pointer ${
                      isHighlight ? "btn-gold" : "btn-outline-gold"
                    }`}
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
