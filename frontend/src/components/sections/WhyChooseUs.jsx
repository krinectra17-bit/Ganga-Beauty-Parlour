import { Sparkle, Users, ShieldCheck, Heart } from "lucide-react";

const items = [
  {
    num: "01",
    stat: "10+",
    unit: "Years",
    title: "10+ Years of Expertise",
    desc: "A decade of refining bridal artistry, hair styling and skincare for Sujangarh's most discerning clients.",
    Icon: Sparkle,
  },
  {
    num: "02",
    stat: "2,500+",
    unit: "Celebrations",
    title: "2,500+ Happy Clients",
    desc: "From first cuts to wedding-day glow-ups - we've been part of thousands of beautiful moments.",
    Icon: Users,
  },
  {
    num: "03",
    stat: "100%",
    unit: "Certified Brands",
    title: "Premium Products Only",
    desc: "We use trusted international and luxury brands so every service feels uncompromising.",
    Icon: ShieldCheck,
  },
  {
    num: "04",
    stat: "1-on-1",
    unit: "Dedicated Care",
    title: "Personal, Warm Service",
    desc: "One-on-one consultations and looks tailored to your features, skin tone and personality.",
    Icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="section relative overflow-hidden bg-gradient-to-b from-[#080706] via-[#120f0c] to-[#0a0806]"
      data-sr
    >
      {/* Subtle Warm Ambiance */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[radial-gradient(ellipse_at_top,rgba(212,175,110,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-8 sm:mb-10 md:mb-12">
          <span className="eyebrow">Atelier Philosophy</span>
          <div className="gold-divider mt-2.5 mb-4" />
          <h2
            className="font-serif text-white text-3xl min-[400px]:text-4xl sm:text-5xl tracking-tight leading-[1.1]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            A salon where craft, care and{" "}
            <span className="italic gold-text">confidence</span> come together.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.Icon;
            return (
              <div
                key={it.title}
                data-testid={`why-card-${idx}`}
                data-sr
                data-sr-delay={`${idx * 80}ms`}
                className="luxe-card group flex h-full flex-col p-5 sm:p-6 transition-all duration-300"
              >
                {/* Header with Numeral and Icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d4af6e]/30 bg-[#d4af6e]/10 text-[#d4af6e] transition-colors group-hover:border-[#d4af6e]/50 group-hover:bg-[#d4af6e]/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-serif text-xs font-semibold tracking-widest text-[#d4af6e]/90">
                    {it.num}
                  </span>
                </div>

                {/* Highlight Stat */}
                <div className="mb-2">
                  <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight gold-text">
                    {it.stat}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-stone-400 font-medium">
                    {it.unit}
                  </p>
                </div>

                <h3
                  className="font-serif text-lg text-white mb-2 min-[400px]:text-xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {it.title}
                </h3>
                <p className="mt-auto text-xs leading-relaxed text-stone-300/85 sm:text-sm sm:leading-6 font-light">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
