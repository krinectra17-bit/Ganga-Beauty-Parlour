import { BUSINESS, buildPhoneLink, buildWhatsAppLink } from "@/data/site";

const CONSULTATION_MESSAGE =
  "Hi Ganga Beauty Parlour! I'd like a free consultation on WhatsApp.";

function ContactCallLinks() {
  return (
    <div className="grid grid-cols-1 gap-2.5">
      {BUSINESS.phones.map((phone, index) => (
        <a
          key={phone}
          href={buildPhoneLink(phone)}
          className="btn-gold w-full justify-center"
          aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
          data-testid={`contact-call-${index + 1}`}
        >
          +91 {phone}
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="section relative overflow-hidden bg-gradient-to-b from-[#070605] via-[#100e0b] to-[#080706]"
      data-sr
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/25 to-transparent" />

      <div className="container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-8 md:mb-12">
          <span className="eyebrow">The Salons</span>
          <div className="gold-divider mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
          <h2
            className="font-serif text-white text-3xl min-[400px]:text-4xl sm:text-5xl tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Step into our{" "}
            <span className="italic font-serif gold-text">studios.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          <div className="luxe-card p-5 sm:p-6 md:p-7" data-sr data-sr-delay="60ms">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-[#d4af6e] uppercase mb-2 font-semibold">
                  Studio Atelier &middot; Sujangarh
                </p>
                <h3
                  className="font-serif text-white text-2xl tracking-tight mb-2 min-[400px]:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Sujangarh Studio
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Signature bridal makeup atelier, bespoke skin rituals, and hair artistry at our flagship salon.
                </p>
                <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed font-light">
                  {BUSINESS.address}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full justify-center cursor-pointer"
                  aria-label="Get directions to Ganga Beauty Parlour Sujangarh branch"
                >
                  Get Directions
                </a>
                <ContactCallLinks />
                <a
                  href={buildWhatsAppLink(CONSULTATION_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center cursor-pointer"
                  aria-label="Chat with Ganga Beauty Parlour on WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="luxe-card p-5 sm:p-6 md:p-7" data-sr data-sr-delay="120ms">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-[#d4af6e] uppercase mb-2 font-semibold">
                  Studio Atelier &middot; Didwana
                </p>
                <h3
                  className="font-serif text-white text-2xl tracking-tight mb-2 min-[400px]:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Didwana Studio
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                  Experience complete Ganga Beauty Parlour luxury services, bridal styling, and wellness treatments.
                </p>
                <p className="text-xs sm:text-sm text-stone-200/90 leading-relaxed mb-1 font-light">
                  {BUSINESS.hours}
                </p>
                <p className="text-xs text-stone-400 font-light">
                  {BUSINESS.hoursNote}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  href={BUSINESS.didwanaMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full justify-center cursor-pointer"
                  aria-label="Get directions to Ganga Beauty Parlour Didwana branch"
                >
                  Get Directions
                </a>
                <ContactCallLinks />
                <a
                  href={buildWhatsAppLink(CONSULTATION_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center cursor-pointer"
                  aria-label="Chat with Ganga Beauty Parlour on WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
