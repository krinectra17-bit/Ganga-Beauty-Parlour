import { ArrowUpRight } from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { SERVICES, bookService } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="section relative bg-[#060606]"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
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
          <p className="max-w-md text-xs leading-relaxed text-stone-300/85 sm:text-sm md:text-base sm:leading-6">
            From signature bridal looks to everyday glow — explore our full
            menu of beauty rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <button
              key={service.key}
              type="button"
              onClick={() => bookService(service.name)}
              data-testid={`service-card-${service.key}`}
              data-sr
              data-sr-delay={`${index * 90}ms`}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C5A880]/35"
            >
              <div className="aspect-[16/10] sm:aspect-[4/4.35] overflow-hidden bg-stone-950">
                <CommonImage
                  src={service.image}
                  alt={`${service.name} service at Ganga Beauty Parlour`}
                  className="h-full w-full object-cover brightness-[0.82] contrast-[1.05] saturate-[0.88] transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <p className="mb-1 text-[9px] uppercase tracking-[0.16em] text-[#DFCEB8]">
                  No. {String(index + 1).padStart(2, "0")} · Atelier Ritual
                </p>
                <h3
                  className="mb-1 sm:mb-1.5 font-serif text-xl sm:text-2xl text-white md:text-[1.6rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {service.name}
                </h3>
                <p className="mb-2 sm:mb-3 max-w-full text-xs leading-relaxed text-stone-200/85 sm:text-sm sm:leading-6 line-clamp-2 sm:line-clamp-none">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#C5A880] transition-colors group-hover:text-[#DFCEB8]">
                  Reserve Session
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:mt-9 md:mt-10">
          <button
            type="button"
            onClick={() => bookService("")}
            data-testid="services-cta"
            className="btn-gold w-full max-w-xs justify-center"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
