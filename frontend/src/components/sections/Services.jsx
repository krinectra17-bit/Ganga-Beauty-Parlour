import { ArrowUpRight } from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { SERVICES, bookService } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="section relative overflow-hidden bg-gradient-to-b from-[#0a0806] via-[#100e0b] to-[#080706]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/25 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-3 sm:gap-5 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Service Menu</span>
            <div className="gold-divider mt-2.5 mb-4" />
            <h2
              className="font-serif text-2xl tracking-tight text-white min-[400px]:text-3xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Crafted for every woman, every{" "}
              <span className="italic gold-text">occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-stone-300/85 sm:text-sm md:text-base sm:leading-6 font-light">
            From signature bridal looks to everyday radiance &mdash; explore our full
            menu of bespoke beauty rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <button
              key={service.key}
              type="button"
              onClick={() => bookService(service.name)}
              data-testid={`service-card-${service.key}`}
              data-sr
              data-sr-delay={`${index * 90}ms`}
              className="group relative overflow-hidden rounded-2xl border border-[#d4af6e]/20 bg-[#14110e] text-left shadow-[0_16px_36px_-20px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af6e]/50 hover:shadow-[0_24px_50px_-18px_rgba(212,175,110,0.22)] cursor-pointer"
            >
              <div className="aspect-[16/10] sm:aspect-[4/4.35] overflow-hidden bg-stone-950">
                <CommonImage
                  src={service.image}
                  alt={`${service.name} service at Ganga Beauty Parlour`}
                  className="h-full w-full object-cover brightness-[0.88] contrast-[1.06] saturate-[0.95] transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/55 to-black/15" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <p className="mb-1 text-[9px] uppercase tracking-[0.16em] text-[#f3e5c8]/90 font-medium">
                  No. {String(index + 1).padStart(2, "0")} &middot; Signature Ritual
                </p>
                <h3
                  className="mb-1 sm:mb-1.5 font-serif text-xl sm:text-2xl text-white md:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {service.name}
                </h3>
                <p className="mb-2 sm:mb-3 max-w-full text-xs leading-relaxed text-stone-200/90 sm:text-sm sm:leading-6 line-clamp-2 sm:line-clamp-none font-light">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#d4af6e] transition-colors group-hover:text-[#f3e5c8]">
                  Reserve Session
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
          <button
            type="button"
            onClick={() => bookService("")}
            data-testid="services-cta"
            className="btn-gold w-full max-w-xs justify-center cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
