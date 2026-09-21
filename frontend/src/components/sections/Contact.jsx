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
      className="section bg-black"
      data-sr
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="eyebrow">Visit Us</span>
          <div className="gold-divider mt-3 mb-5" />
          <h2
            className="font-serif text-white text-4xl min-[400px]:text-5xl tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Step into the studio in{" "}
            <span className="italic gold-text">Sujangarh.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          <div className="luxe-card p-5 md:p-6" data-sr data-sr-delay="60ms">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
                  Branch Location
                </p>
                <h3
                  className="font-serif text-white text-2xl tracking-tight mb-2.5 min-[400px]:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Sujangarh Branch
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Same premium salon experience, styling and bridal services at
                  our main Sujangarh studio.
                </p>
                <p className="text-sm text-white leading-relaxed">
                  {BUSINESS.address}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full justify-center"
                  aria-label="Get directions to Ganga Beauty Parlour Sujangarh branch"
                >
                  Get Directions
                </a>
                <ContactCallLinks />
                <a
                  href={buildWhatsAppLink(CONSULTATION_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                  aria-label="Chat with Ganga Beauty Parlour on WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="luxe-card p-5 md:p-6" data-sr data-sr-delay="120ms">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
                  Branch Location
                </p>
                <h3
                  className="font-serif text-white text-2xl tracking-tight mb-2.5 min-[400px]:text-[1.65rem]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Didwana Branch
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Enjoy the same Ganga Beauty Parlour luxury services at our
                  Didwana location with full bridal, beauty and wellness support.
                </p>
                <p className="text-sm text-white leading-relaxed mb-1">
                  {BUSINESS.hours}
                </p>
                <p className="text-xs text-zinc-500">
                  {BUSINESS.hoursNote}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  href={BUSINESS.didwanaMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full justify-center"
                  aria-label="Get directions to Ganga Beauty Parlour Didwana branch"
                >
                  Get Directions
                </a>
                <ContactCallLinks />
                <a
                  href={buildWhatsAppLink(CONSULTATION_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
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
