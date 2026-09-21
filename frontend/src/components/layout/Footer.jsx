import {
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import CommonImage from "@/components/CommonImage";
import {
  BUSINESS,
  IMAGE_DIMENSIONS,
  buildPhoneLink,
  buildWhatsAppLink,
  GALLERY,
} from "@/data/site";

export default function Footer() {
  const wa = buildWhatsAppLink("Hi Ganga Beauty Parlour!");
  const igPreview = GALLERY.slice(0, 4);

  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[#D4AF37]/14 bg-black pt-12 pb-24 md:pb-10"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/26 to-transparent" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center">
              <CommonImage
                src="/images/logos/logo-ganga-gold.webp"
                alt="Ganga Beauty Parlour logo"
                className="h-12 w-auto object-contain"
                loading="eager"
                srcSet="/images/logos/logo-ganga-gold.webp 1x, /images/logos/logo-ganga-gold.webp 2x"
                width={IMAGE_DIMENSIONS.logo.width}
                height={IMAGE_DIMENSIONS.logo.height}
              />
            </div>
            <p
              className="font-serif text-2xl leading-tight text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Luxury bridal beauty, crafted with{" "}
              <span className="italic gold-text">quiet precision.</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
              A premium beauty atelier dedicated to confident, radiant bridal
              transformations in Sujangarh and Didwana.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Visit & Connect
            </p>
            <p className="mb-4 flex items-start gap-2 text-sm leading-7 text-zinc-400">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
              {BUSINESS.address}
            </p>
            <div className="space-y-2.5">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone}
                  href={buildPhoneLink(phone)}
                  aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
                  className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#D4AF37]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D4AF37]/18 bg-[#D4AF37]/5">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  +91 {phone}
                </a>
              ))}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Ganga Beauty Parlour on WhatsApp"
                className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#E8CA6B]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D4AF37]/18 bg-[#0f3f2a]/35">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                WhatsApp
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                aria-label="Open Ganga Beauty Parlour Instagram profile"
                className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#D4AF37]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D4AF37]/18 bg-[#D4AF37]/5">
                  <Instagram className="h-3.5 w-3.5" />
                </span>
                @ganga_beauty_parlour_
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Find Us
            </p>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-map"
              aria-label="Open Ganga Beauty Parlour location on Google Maps"
              className="block overflow-hidden rounded-2xl border border-[#D4AF37]/12 bg-black transition-colors hover:border-[#D4AF37]/38"
            >
              <div className="aspect-[16/10]">
                <iframe
                  title="Ganga Beauty Parlour mini map"
                  src={BUSINESS.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    pointerEvents: "none",
                    filter: "grayscale(1) invert(0.9) contrast(0.86)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </a>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-[#D4AF37] transition-colors hover:text-[#E8CA6B]"
            >
              Open in Google Maps <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="md:col-span-2">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-preview"
              className="block"
            >
              <p className="mb-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {igPreview.map((image) => (
                  <div
                    key={image.src}
                    className="aspect-square overflow-hidden rounded-lg border border-[#D4AF37]/12 bg-black transition-colors hover:border-[#D4AF37]/36"
                  >
                    <CommonImage
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover brightness-[0.82] contrast-[1.08] saturate-[0.82] transition-transform duration-500 hover:scale-[1.06]"
                      loading="lazy"
                      sizes="(min-width: 768px) 8vw, 50vw"
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Follow us @ganga_beauty_parlour_
              </p>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-900 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Beauty Parlour in Sujangarh &middot; Bridal Makeup &middot; Hair &middot; Skin
          </p>
        </div>
      </div>
    </footer>
  );
}
