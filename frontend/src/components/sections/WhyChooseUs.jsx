import { Sparkle, Users, ShieldCheck, Heart } from "lucide-react";

const items = [
  {
    num: "01",
    title: "10+ Years of Expertise",
    desc: "A decade of refining bridal artistry, hair styling and skincare for Sujangarh's most discerning clients.",
  },
  {
    num: "02",
    title: "2,500+ Happy Clients",
    desc: "From first cuts to wedding-day glow-ups - we've been part of thousands of beautiful moments.",
  },
  {
    num: "03",
    title: "Premium Products Only",
    desc: "We use trusted international and luxury brands so every service feels uncompromising.",
  },
  {
    num: "04",
    title: "Personal, Warm Service",
    desc: "One-on-one consultations and looks tailored to your features, skin tone and personality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="section relative bg-[#090909]"
      data-sr
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
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

        <div className="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {items.map((it, idx) => (
            <div
              key={it.title}
              data-testid={`why-card-${idx}`}
              data-sr
              data-sr-delay={`${idx * 80}ms`}
              className="luxe-card flex h-full flex-col p-5 sm:p-6 transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-serif text-xs font-semibold text-[#C5A880] tracking-widest">
                  {it.num}
                </span>
                <span className="h-px w-6 bg-[#C5A880]/30" />
              </div>
              <h3
                className="font-serif text-lg text-white mb-2 min-[400px]:text-xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {it.title}
              </h3>
              <p className="mt-auto text-xs leading-relaxed text-stone-300/80 sm:text-sm sm:leading-6">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
