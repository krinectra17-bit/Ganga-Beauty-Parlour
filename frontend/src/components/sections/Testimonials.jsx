import { Star, Quote, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="section relative bg-black"
      data-sr
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="eyebrow">Testimonials</span>
          <div className="gold-divider mx-auto mt-3 mb-5" />
          <h2
            className="font-serif text-4xl tracking-tight text-white min-[400px]:text-5xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Loved by clients across{" "}
            <span className="italic gold-text">Sujangarh.</span>
          </h2>
        </div>

        <div
          data-testid="trust-banner"
          className="luxe-card mb-8 grid grid-cols-2 gap-5 p-5 text-center md:mb-10 md:grid-cols-4 md:p-6"
        >
          {[
            ["4.8", "Google Rating"],
            ["500+", "Brides Styled"],
            ["2,500+", "Happy Clients"],
            ["10+", "Years of Craft"],
          ].map(([value, label], index) => (
            <div key={label} className="relative">
              {index === 0 && (
                <div className="mb-1.5 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
              )}
              <p
                className="font-serif text-2xl gold-text min-[400px]:text-[1.65rem]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
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
              className={`luxe-card relative min-h-[220px] p-6 md:p-7 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <Quote className="absolute right-5 top-5 h-7 w-7 text-[#D4AF37]/25" />
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/22 bg-[#D4AF37]/6 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[#E8CA6B]">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verified Bride
                </span>
              </div>

              <p
                className={`max-w-xl text-zinc-200/90 ${
                  index === 0
                    ? "text-base leading-8 min-[400px]:text-lg"
                    : "text-sm leading-7 min-[400px]:text-base"
                }`}
              >
                "{testimonial.text}"
              </p>

              <div className="mt-6 border-t border-[#D4AF37]/10 pt-4">
                <p className="text-sm font-medium text-white">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs tracking-wide text-zinc-500">
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