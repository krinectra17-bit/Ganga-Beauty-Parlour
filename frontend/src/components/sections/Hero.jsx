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
      className="grain relative min-h-[100svh] w-full overflow-hidden bg-black"
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

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:from-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1800px] items-end px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pb-8 sm:pt-28 md:px-10 md:pb-10 md:pt-32 lg:px-14 lg:pb-12 xl:px-20 2xl:px-24">
        <div className="w-full max-w-[min(100%,34rem)] sm:max-w-[36rem] md:max-w-[40rem] lg:max-w-[42rem] xl:max-w-[44rem]">
          <div className="reveal reveal-d1 mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#DFCEB8] shadow-sm backdrop-blur-md sm:mb-4 sm:px-4 sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]" />
            <span className="min-w-0 truncate">Bridal Makeup Atelier · Sujangarh</span>
          </div>

          <h1 className="reveal reveal-d2 font-serif text-[clamp(2.75rem,11.2vw,4.35rem)] leading-[0.98] text-white sm:text-[clamp(3.85rem,8.2vw,5.25rem)] md:text-[clamp(4.45rem,6.6vw,6.1rem)] lg:text-[clamp(4.75rem,5.4vw,6.8rem)]">
            Your Beauty,
            <br />
            <span className="font-normal italic text-[#DFCEB8]">Our Passion.</span>
          </h1>

          <p className="reveal reveal-d2 mt-3 max-w-[32rem] text-sm leading-relaxed text-stone-200/90 sm:mt-4 sm:text-base md:text-lg md:leading-8">
            Luxe bridal makeup, hair styling and curated beauty rituals for your
            unforgettable celebration.
          </p>

          <div className="reveal reveal-d3 mt-4 grid max-w-[30rem] grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-black/55 px-3 py-2.5 backdrop-blur-md sm:px-4 sm:py-3 transition-colors hover:border-[#C5A880]/30"
              >
                <p className="truncate font-serif text-base font-semibold text-white sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.14em] text-stone-300 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => bookService("Bridal Makeup")}
            data-testid="hero-book-btn"
            className="reveal reveal-d4 mt-4 flex h-12 w-full max-w-[30rem] items-center justify-center gap-2 rounded-full bg-[#C5A880] px-6 text-sm font-medium text-[#0A0A0A] shadow-[0_12px_32px_-8px_rgba(197,168,128,0.4)] transition-all duration-300 hover:bg-[#D4BF9E] hover:translate-y-[-1px] min-[400px]:h-13 sm:mt-5 sm:h-14 sm:text-base"
          >
            <span>Book Your Bridal Slot</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
