import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  HERO_BLUR_IMAGE,
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
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="grain relative min-h-[100svh] w-full overflow-hidden bg-[#080706]"
    >
      <div className="hero-image-frame absolute inset-0 overflow-hidden">
        <img
          src={HERO_BLUR_IMAGE}
          alt=""
          className="hero-blur absolute inset-0 h-full w-full object-cover object-[center_top]"
          width={60}
          height={34}
          aria-hidden="true"
        />
        <img
          src={HERO_IMAGE}
          srcSet={HERO_SRCSET}
          alt="Luxury bridal makeover by Ganga Beauty Parlour"
          className={`hero-main absolute inset-0 w-full h-full object-cover object-[center_top] hero-media ${heroLoaded ? "hero-main-visible" : "hero-main-loading"}`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
          width={IMAGE_DIMENSIONS.hero.width}
          height={IMAGE_DIMENSIONS.hero.height}
          onLoad={() => setHeroLoaded(true)}
        />
      </div>

      {/* Cinematic Vignette & Warm Golden Ambient Lighting */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(214,178,124,0.14)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/85 via-[#080706]/40 to-transparent md:from-[#080706]/78 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#080706] via-[#080706]/55 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1800px] items-end px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pb-8 sm:pt-28 md:px-10 md:pb-10 md:pt-32 lg:px-14 lg:pb-12 xl:px-20 2xl:px-24">
        <div className="w-full max-w-[min(100%,34rem)] sm:max-w-[36rem] md:max-w-[40rem] lg:max-w-[42rem] xl:max-w-[44rem]">
          {/* Atelier Badge */}
          <div className="reveal reveal-d1 mb-3.5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#d4af6e]/35 bg-[linear-gradient(135deg,rgba(25,20,15,0.85),rgba(10,8,6,0.92))] px-3.5 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#f3e5c8] shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:mb-4 sm:px-4 sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#fff3db] to-[#c59f54] shadow-[0_0_8px_rgba(212,175,110,0.7)]" />
            <span className="min-w-0 truncate font-medium">Bridal Makeup Atelier &middot; Sujangarh & Didwana</span>
          </div>

          {/* Headline with Radiant Metallic Gold Sheen */}
          <h1 className="reveal reveal-d2 font-serif text-[clamp(2.75rem,11.2vw,4.35rem)] leading-[0.98] text-white sm:text-[clamp(3.85rem,8.2vw,5.25rem)] md:text-[clamp(4.45rem,6.6vw,6.1rem)] lg:text-[clamp(4.75rem,5.4vw,6.8rem)]">
            Your Beauty,
            <br />
            <span className="font-normal italic gold-text">Our Passion.</span>
          </h1>

          <p className="reveal reveal-d2 mt-3.5 max-w-[32rem] text-sm leading-relaxed text-stone-200/90 sm:mt-4 sm:text-base md:text-lg md:leading-8 font-light">
            Luxe bridal makeup, bespoke hair artistry and curated rituals for your
            unforgettable celebration.
          </p>

          {/* Stat Cards with Layered Rim Lighting */}
          <div className="reveal reveal-d3 mt-4 grid max-w-[30rem] grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#d4af6e]/25 bg-[linear-gradient(180deg,rgba(26,21,16,0.75),rgba(12,10,8,0.88))] px-3 py-2.5 backdrop-blur-md sm:px-4 sm:py-3 transition-all duration-300 hover:border-[#d4af6e]/50 hover:-translate-y-0.5 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.9)]"
              >
                <p className="truncate font-serif text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff3db] via-[#e5ca9a] to-[#c59f54] sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.14em] text-stone-300 sm:text-[10px] font-medium">
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
            className="btn-gold reveal reveal-d4 mt-5 flex h-12 w-full max-w-[30rem] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold sm:h-14 sm:text-base cursor-pointer"
          >
            <span>Book Your Bridal Slot</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
