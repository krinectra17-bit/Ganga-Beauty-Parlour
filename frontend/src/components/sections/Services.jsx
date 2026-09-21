import { ArrowUpRight } from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { SERVICES, bookService } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="section relative bg-[#050505]"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Services</span>
            <div className="gold-divider mt-3 mb-5" />
            <h2
              className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Crafted for every woman, every{" "}
              <span className="italic gold-text">occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-300/85 sm:text-base">
            From signature bridal looks to everyday glow - explore our full
            menu of beauty rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <button
              key={service.key}
              type="button"
              onClick={() => bookService(service.name)}
              data-testid={`service-card-${service.key}`}
              data-sr
              data-sr-delay={`${index * 120}ms`}
              className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/12 bg-black text-left shadow-[0_24px_70px_-58px_rgba(212,175,55,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/38"
            >
              <div className="aspect-[4/4.35] overflow-hidden bg-zinc-950">
                <CommonImage
                  src={service.image}
                  alt={`${service.name} service at Ganga Beauty Parlour`}
                  className="h-full w-full object-cover brightness-[0.78] contrast-[1.08] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.055]"
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/64 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-[#D4AF37]/8 opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-[#E8CA6B]/85">
                  {String(index + 1).padStart(2, "0")} / Service
                </p>
                <h3
                  className="mb-2 font-serif text-2xl text-white md:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {service.name}
                </h3>
                <p className="mb-3 max-w-full text-sm leading-6 text-zinc-200/82">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[#D4AF37] transition-colors group-hover:text-[#E8CA6B]">
                  Reserve Session
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-9 flex justify-center md:mt-10">
          <button
            type="button"
            onClick={() => bookService("")}
            data-testid="services-cta"
            className="btn-gold w-full max-w-xs"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
