import { ArrowUpRight, Crown } from "lucide-react";
import { PREMIUM_SERVICES, bookService } from "@/data/site";

export default function PremiumServices() {
  return (
    <section
      id="premium-services"
      data-testid="premium-services-section"
      className="section relative overflow-hidden bg-black"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/24 to-transparent" />
      <div className="absolute left-1/2 top-16 h-52 w-52 -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[105px]" />

      <div className="container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="eyebrow">Luxury Ritual Menu</span>
          <div className="gold-divider mx-auto mt-3 mb-5" />
          <h2
            className="font-serif text-4xl tracking-tight text-white min-[400px]:text-5xl md:text-[3.2rem]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Premium Bridal{" "}
            <span className="italic gold-text">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300/82 sm:text-base">
            Luxury beauty, bridal glam, skin care, and hair artistry crafted for
            unforgettable celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {PREMIUM_SERVICES.map((service, index) => (
            <button
              key={service.key}
              type="button"
              onClick={() => bookService(service.name)}
              data-testid={`premium-service-card-${service.key}`}
              data-sr
              data-sr-delay={`${index * 110}ms`}
              className="group relative flex min-h-[236px] overflow-hidden rounded-3xl border border-[#D4AF37]/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] p-5 text-left shadow-[0_24px_70px_-58px_rgba(212,175,55,0.42)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/36 hover:shadow-[0_30px_82px_-62px_rgba(212,175,55,0.64)]"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/7 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full w-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/35">
                    <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                  </div>
                  <span className="rounded-full border border-[#D4AF37]/20 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#E8CA6B]/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mb-2 text-[9px] uppercase tracking-[0.26em] text-[#D4AF37] min-[400px]:text-[10px]">
                  {service.category}
                </p>
                <h3
                  className="font-serif text-[1.38rem] leading-tight text-white min-[400px]:text-[1.5rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {service.name}
                </h3>
                <div className="my-3 h-px w-14 bg-gradient-to-r from-[#D4AF37]/55 to-transparent" />
                <p className="text-[1.05rem] font-semibold text-[#E8CA6B]">
                  {service.price}
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-300/78">
                  {service.desc}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[#D4AF37] transition-colors group-hover:text-[#E8CA6B]">
                  Book Consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}