import { Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="section relative overflow-hidden bg-gradient-to-b from-[#080706] via-[#100e0b] to-[#070605]"
      data-sr
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/25 to-transparent" />

      <div className="container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <span className="eyebrow">Client Chronicles</span>
          <div className="gold-divider mx-auto mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
          <h2
            className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl sm:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Cherished by brides across{" "}
            <span className="italic font-serif gold-text">Sujangarh.</span>
          </h2>
        </div>

        {/* Editorial Trust Metrics Bar */}
        <div
          data-testid="trust-banner"
          className="mb-8 grid grid-cols-2 rounded-2xl border border-[#d4af6e]/25 bg-[linear-gradient(180deg,#16120e,#0c0a08)] p-5 text-center sm:p-6 md:mb-12 md:grid-cols-4 md:divide-x md:divide-[#d4af6e]/20 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)]"
        >
          {[
            ["4.8", "Google Rating"],
            ["500+", "Brides Styled"],
            ["2,500+", "Happy Clients"],
            ["10+", "Years of Craft"],
          ].map(([value, label], index) => (
            <div key={label} className="relative py-2 sm:py-0">
              {index === 0 && (
                <div className="mb-1.5 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#d4af6e] text-[#d4af6e]"
                    />
                  ))}
                </div>
              )}
              <p
                className="font-serif text-2xl font-bold gold-text min-[400px]:text-[1.85rem]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value}
              </p>
              <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-stone-300 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Review Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-testid={`testimonial-${index}`}
              data-sr
              data-sr-delay={`${index * 100}ms`}
              className={`relative flex flex-col justify-between rounded-2xl border border-[#d4af6e]/20 bg-[linear-gradient(180deg,#14110e,#0c0a08)] p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-[#d4af6e]/50 hover:-translate-y-1 shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)] ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-[#d4af6e] text-[#d4af6e]"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af6e]/30 bg-[#d4af6e]/10 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.14em] text-[#f3e5c8] font-medium">
                    <BadgeCheck className="h-3.5 w-3.5 text-[#d4af6e]" />
                    Verified Bride
                  </span>
                </div>

                <p
                  className={`font-serif italic text-stone-200/95 ${
                    index === 0
                      ? "text-base sm:text-lg leading-relaxed sm:leading-8"
                      : "text-xs sm:text-sm leading-relaxed sm:leading-7"
                  }`}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="text-sm font-medium text-white tracking-wide">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-stone-400 font-light">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
