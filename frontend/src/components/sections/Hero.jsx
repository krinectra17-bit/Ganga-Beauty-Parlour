import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  HERO_BLUR_IMAGE,
  HERO_IMAGE,
  HERO_SRCSET,
  IMAGE_DIMENSIONS,
  bookService,
} from "@/data/site";

const stats = [
  { value: "4.8\u2605", label: "Google" },
  { value: "500+", label: "Brides" },
  { value: "25+", label: "Looks" },
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

      <div className="hero-particles" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="pointer-events-none">
          <circle className="particle p1" cx="60" cy="80" r="3" fill="#d4af37" opacity="0.14" />
          <circle className="particle p2" cx="1140" cy="120" r="2.25" fill="#d4af37" opacity="0.12" />
          <circle className="particle p3" cx="80" cy="680" r="2" fill="#d4af37" opacity="0.10" />
          <circle className="particle p4" cx="1120" cy="620" r="2.5" fill="#d4af37" opacity="0.11" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-black/12" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/54 via-black/12 to-black/10 md:from-black/48 lg:from-black/44" />
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/88 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1800px] items-end px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pb-7 sm:pt-28 md:px-10 md:pb-9 md:pt-32 lg:px-14 lg:pb-10 xl:px-20 xl:pb-12 2xl:px-24">
        <div className="w-full max-w-[min(100%,34rem)] sm:max-w-[36rem] md:max-w-[40rem] lg:max-w-[42rem] xl:max-w-[44rem]">
          <div className="reveal reveal-d1 mb-2.5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/35 px-3.5 py-2 text-[8px] uppercase tracking-[0.24em] text-[#E8CA6B] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm min-[380px]:text-[9px] sm:mb-3 sm:px-4 sm:text-[10px] sm:tracking-[0.3em] md:mb-4 md:px-5 md:py-2.5">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
            <span className="min-w-0 truncate">Premium Bridal Studio</span>
          </div>

          <h1 className="reveal reveal-d2 font-serif text-[clamp(2.75rem,11.2vw,4.35rem)] leading-[0.97] text-white sm:text-[clamp(3.85rem,8.2vw,5.25rem)] md:text-[clamp(4.45rem,6.6vw,6.1rem)] lg:text-[clamp(4.75rem,5.4vw,6.8rem)]">
            Your Beauty,
            <br />
            <span className="font-normal italic text-[#D4AF37]">Our Passion.</span>
          </h1>

          <p className="reveal reveal-d2 mt-2.5 max-w-[33rem] text-[0.9rem] leading-6 text-zinc-100/90 min-[400px]:text-base sm:mt-3 md:mt-4 md:text-lg md:leading-8">
            Luxe bridal makeup, hair styling and curated beauty rituals for your
            unforgettable celebration.
          </p>

          <div className="reveal reveal-d3 mt-3.5 grid max-w-[30rem] grid-cols-3 gap-2 sm:mt-4 sm:gap-3 md:mt-5 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-2xl border border-[#D4AF37]/20 bg-black/42 px-2.5 py-2.5 text-white shadow-[0_16px_36px_-28px_rgba(212,175,55,0.45)] backdrop-blur-sm sm:px-4 sm:py-3 md:py-3.5"
              >
                <p className="truncate font-serif text-base font-semibold sm:text-lg">
                  {stat.value}
                </p>
                <p className="mt-1 truncate text-[0.6rem] uppercase tracking-[0.2em] text-zinc-300 sm:text-[0.7rem] sm:tracking-[0.28em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => bookService("Bridal Makeup")}
            data-testid="hero-book-btn"
            className="reveal reveal-d4 mt-3.5 flex h-[3.25rem] min-h-[3.25rem] w-full max-w-[30rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E8C16C] to-[#D4AF37] px-6 text-sm font-semibold text-black shadow-[0_18px_54px_rgba(212,175,55,0.24)] transition hover:brightness-110 min-[400px]:h-14 min-[400px]:min-h-[3.5rem] min-[400px]:text-base sm:mt-4 sm:h-[3.75rem] sm:min-h-[3.75rem] md:mt-5 md:h-16 md:min-h-[4rem]"
          >
            Book Your Bridal Slot
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
