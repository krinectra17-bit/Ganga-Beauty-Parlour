import { ArrowRight } from "lucide-react";
import {
  HERO_IMAGE,
  HERO_SRCSET,
  IMAGE_DIMENSIONS,
  bookService,
} from "@/data/site";

const stats = [
  { value: "4.8\u2605", label: "Google Rating" },
  { value: "500+", label: "Brides Styled" },
  { value: "25+", label: "Signature Looks" },
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#080706]"
    >
      <div className="hero-image-frame absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          srcSet={HERO_SRCSET}
          alt="Luxury bridal makeover by Ganga Beauty Parlour"
          className="hero-main absolute inset-0 h-full w-full object-cover object-[center_top]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
          width={IMAGE_DIMENSIONS.hero.width}
          height={IMAGE_DIMENSIONS.hero.height}
        />
      </div>

      {/* Localized Scrim Behind Text Area Only (keeps upper 65-70% & faces bright and natural) */}
      <div
        className="absolute inset-0 z-[2] md:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,7,6,0.92) 0%, rgba(8,7,6,0.80) 18%, rgba(8,7,6,0.58) 28%, rgba(8,7,6,0.34) 34%, rgba(8,7,6,0.12) 39%, rgba(8,7,6,0) 43%)",
        }}
      />
      <div
        className="hidden md:block lg:hidden absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 56% 44% at 24% 80%, rgba(8,7,6,0.74) 0%, rgba(8,7,6,0.44) 48%, rgba(8,7,6,0.14) 76%, rgba(8,7,6,0) 100%)",
        }}
      />
      <div
        className="hidden lg:block absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 44% at 17% 78%, rgba(8,7,6,0.72) 0%, rgba(8,7,6,0.44) 48%, rgba(8,7,6,0.14) 76%, rgba(8,7,6,0) 100%)",
        }}
      />
      <div
        className="hidden md:block absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,7,6,0.78) 0%, rgba(8,7,6,0.34) 14%, rgba(8,7,6,0) 28%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1800px] items-end px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-20 sm:px-8 sm:pb-8 sm:pt-28 md:px-10 md:pb-10 md:pt-32 lg:px-14 lg:pb-12 xl:px-20 2xl:px-24">
        <div className="w-full max-w-[min(100%,34rem)] sm:max-w-[36rem] md:max-w-[40rem] lg:max-w-[42rem] xl:max-w-[44rem]">
          {/* Atelier Badge */}
          <div className="reveal reveal-d1 mb-2.5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d4af6e]/35 bg-[linear-gradient(135deg,rgba(25,20,15,0.88),rgba(10,8,6,0.94))] px-3 py-1 text-[8.5px] uppercase tracking-[0.12em] text-[#f3e5c8] shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:mb-4 sm:gap-2.5 sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#fff3db] to-[#c59f54] shadow-[0_0_8px_rgba(212,175,110,0.7)]" />
            <span className="min-w-0 truncate font-medium">Bridal Makeup Atelier &middot; Sujangarh & Didwana</span>
          </div>

          {/* Headline with Radiant Metallic Gold Sheen */}
          <h1
            className="reveal reveal-d2 font-serif text-[clamp(2.3rem,10.4vw,3.35rem)] leading-[1.06] tracking-[-0.015em] text-[#fcf9f4] sm:text-[clamp(3.85rem,8.2vw,5.25rem)] sm:leading-[0.98] md:text-[clamp(4.45rem,6.6vw,6.1rem)] lg:text-[clamp(4.75rem,5.4vw,6.8rem)]"
            style={{ textShadow: "0 2px 14px rgba(0, 0, 0, 0.55)" }}
          >
            Your Beauty,
            <br />
            <span
              className="inline-block pr-1 font-normal italic gold-text"
              style={{
                textShadow: "none",
                filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.65))",
              }}
            >
              Our Passion.
            </span>
          </h1>

          <p
            className="reveal reveal-d2 mt-2.5 max-w-[32rem] text-[13.5px] leading-[1.55] text-[#fcf9f4]/90 sm:mt-4 sm:text-base md:text-lg md:leading-8 font-light"
            style={{ textShadow: "0 1px 10px rgba(0, 0, 0, 0.6)" }}
          >
            Luxe bridal makeup, bespoke hair artistry and curated rituals for your
            unforgettable celebration.
          </p>

          {/* Stat Cards with Layered Rim Lighting */}
          <div className="reveal reveal-d3 mt-3 grid max-w-[30rem] grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#d4af6e]/25 bg-[linear-gradient(180deg,rgba(26,21,16,0.78),rgba(12,10,8,0.9))] px-2.5 py-2 backdrop-blur-md sm:px-4 sm:py-3 transition-all duration-300 hover:border-[#d4af6e]/50 hover:-translate-y-0.5 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.9)]"
              >
                <p className="truncate font-serif text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff3db] via-[#e5ca9a] to-[#c59f54] sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-0.5 truncate text-[8px] min-[400px]:text-[9px] uppercase tracking-[0.06em] min-[400px]:tracking-[0.1em] text-stone-300 sm:text-[10px] sm:tracking-[0.14em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Prominent Metallic Gold CTA Button */}
          <button
            type="button"
            onClick={() => bookService("Bridal Makeup")}
            data-testid="hero-book-btn"
            className="btn-gold reveal reveal-d4 mt-3.5 flex h-12 w-full max-w-[30rem] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold sm:mt-5 sm:h-14 sm:text-base cursor-pointer"
          >
            <span>Book Your Bridal Slot</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
