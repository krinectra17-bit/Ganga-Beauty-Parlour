import { Award, Users, Gem, Heart } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "10+ Years of Expertise",
    desc: "A decade of refining bridal artistry, hair styling and skincare for Sujangarh's most discerning clients.",
  },
  {
    icon: Users,
    title: "2,500+ Happy Clients",
    desc: "From first cuts to wedding-day glow-ups - we've been part of thousands of beautiful moments.",
  },
  {
    icon: Gem,
    title: "Premium Products Only",
    desc: "We use trusted international and luxury brands so every service feels uncompromising.",
  },
  {
    icon: Heart,
    title: "Personal, Warm Service",
    desc: "One-on-one consultations and looks tailored to your features, skin tone and personality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="section relative bg-black"
      data-sr
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="eyebrow">Why Choose Us</span>
          <div className="gold-divider mt-3 mb-5" />
          <h2
            className="font-serif text-white text-4xl min-[400px]:text-5xl tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            A salon where craft, care and{" "}
            <span className="italic gold-text">confidence</span> come together.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`why-card-${idx}`}
                data-sr
                data-sr-delay={`${idx * 90}ms`}
                className="luxe-card flex h-full flex-col p-6 md:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-black/35">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3
                  className="font-serif text-xl text-white mb-2.5 min-[400px]:text-2xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {it.title}
                </h3>
                <p className="mt-auto text-sm leading-7 text-zinc-300/82">
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