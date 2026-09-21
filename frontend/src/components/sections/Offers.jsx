import { ArrowRight, Check, Gift, Sparkles } from "lucide-react";
import { OFFERS, bookService } from "@/data/site";

export default function Offers() {
  return (
    <section
      id="offers"
      data-testid="offers-section"
      className="section relative overflow-hidden bg-black"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/22 to-transparent" />
      <div className="absolute -right-20 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/8 blur-[110px]" />

      <div className="container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="eyebrow">Limited Time Offers</span>
          <div className="gold-divider mx-auto mt-3 mb-5" />
          <h2
            className="font-serif text-4xl tracking-tight text-white min-[400px]:text-5xl md:text-[3.2rem]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Save more on your{" "}
            <span className="italic gold-text">big day.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300/82 sm:text-base">
            Elegant seasonal packages curated for bridal glam, events, and
            camera-ready beauty rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {OFFERS.map((offer, idx) => {
            const isHighlight = offer.highlight;
            const Icon = isHighlight ? Gift : Sparkles;
            const visiblePerks = offer.perks.slice(0, 4);

            return (
              <article
                key={offer.title}
                data-testid={`offer-${offer.title.toLowerCase().replace(/\s+/g, "-")}`}
                data-sr
                data-sr-delay={`${idx * 110}ms`}
                className={`group relative flex min-h-[350px] overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 min-[400px]:p-7 ${
                  isHighlight
                    ? "border border-[#D4AF37]/55 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_34%),linear-gradient(180deg,#17130c,#050505)] shadow-[0_28px_74px_-58px_rgba(212,175,55,0.78)] lg:-translate-y-2 lg:hover:-translate-y-3"
                    : "border border-[#D4AF37]/13 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] shadow-[0_24px_70px_-60px_rgba(212,175,55,0.48)] hover:border-[#D4AF37]/34"
                }`}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

                <div className="relative flex w-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/34 bg-black/38">
                      <Icon className="h-[18px] w-[18px] text-[#D4AF37]" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] ${
                        isHighlight
                          ? "bg-[#D4AF37] text-black shadow-[0_12px_30px_-18px_rgba(212,175,55,0.9)]"
                          : "border border-[#D4AF37]/30 bg-[#D4AF37]/8 text-[#E8CA6B]"
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>

                  <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-[#D4AF37] min-[400px]:text-[10px]">
                    {offer.subtitle}
                  </p>
                  <h3
                    className="font-serif text-[1.65rem] leading-tight text-white md:text-[1.85rem]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {offer.title}
                  </h3>

                  <div className="my-5 h-px bg-gradient-to-r from-[#D4AF37]/42 via-zinc-800 to-transparent" />

                  <p
                    className={`font-serif leading-none ${
                      isHighlight
                        ? "text-[2.65rem] gold-text md:text-5xl"
                        : "text-[2.15rem] text-[#E8CA6B] md:text-4xl"
                    }`}
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {offer.priceLabel}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {visiblePerks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300/88"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/34 bg-black/30">
                          <Check className="h-3 w-3 text-[#D4AF37]" />
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => bookService(offer.service)}
                    data-testid={`offer-cta-${offer.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="btn-gold mt-auto w-full justify-center"
                  >
                    Book Appointment
                    <ArrowRight className="h-4 w-4" />
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