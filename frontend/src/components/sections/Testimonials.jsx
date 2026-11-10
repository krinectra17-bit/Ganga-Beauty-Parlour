import { Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="section relative bg-black"
      data-sr
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <span className="eyebrow">Client Chronicles</span>
          <div className="gold-divider mx-auto mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
          <h2
            className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl sm:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Cherished by brides across{" "}
            <span className="italic font-serif text-[#DFCEB8]">Sujangarh.</span>
          </h2>
        </div>

        <div
          data-testid="trust-banner"
          className="mb-8 grid grid-cols-2 rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-5 text-center sm:p-6 md:mb-12 md:grid-cols-4 md:divide-x md:divide-white/[0.08]"
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
                      className="h-3.5 w-3.5 fill-[#c5a880] text-[#c5a880]"
                    />
                  ))}
                </div>
              )}
              <p
                className="font-serif text-2xl text-[#faf6f0] min-[400px]:text-[1.75rem]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value}
              </p>
              <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-testid={`testimonial-${index}`}
              data-sr
              data-sr-delay={`${index * 100}ms`}
              className={`relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-[#c5a880]/30 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-[#c5a880] text-[#c5a880]"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.14em] text-[#dfceb8]/80">
                    <BadgeCheck className="h-3.5 w-3.5 text-[#c5a880]" />
                    Verified Bride
                  </span>
                </div>

                <p
                  className={`font-serif italic text-zinc-200/90 ${
                    index === 0
                      ? "text-base sm:text-lg leading-relaxed sm:leading-8"
                      : "text-xs sm:text-sm leading-relaxed sm:leading-7"
                  }`}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-sm font-medium text-white tracking-wide">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-zinc-400 font-light">
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
