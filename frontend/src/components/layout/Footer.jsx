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
      className="border-t border-white/[0.08] bg-black pt-12 pb-24 md:pb-12"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center">
              <CommonImage
                src="/images/logos/logo-ganga-gold.webp"
                alt="Ganga Beauty Parlour logo"
                className="h-11 w-auto object-contain"
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
              <span className="italic font-serif text-[#DFCEB8]">quiet precision.</span>
            </p>
            <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-zinc-400 font-light">
              A bespoke bridal atelier dedicated to radiant transformations, authentic ceremonial styling, and advanced skincare rituals in Sujangarh and Didwana.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#c5a880]/90 font-medium">
              Atelier & Contact
            </p>
            <p className="mb-4 flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-zinc-400 font-light">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a880]" />
              <span>{BUSINESS.address}</span>
            </p>
            <div className="space-y-2.5">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone}
                  href={buildPhoneLink(phone)}
                  aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 transition-colors hover:text-[#c5a880]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Phone className="h-3 w-3 text-[#c5a880]" />
                  </span>
                  +91 {phone}
                </a>
              ))}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Ganga Beauty Parlour on WhatsApp"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 transition-colors hover:text-[#dfceb8]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <MessageCircle className="h-3 w-3 text-[#25D366]" />
                </span>
                WhatsApp Consultation
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                aria-label="Open Ganga Beauty Parlour Instagram profile"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 transition-colors hover:text-[#c5a880]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Instagram className="h-3 w-3 text-[#c5a880]" />
                </span>
                @ganga_beauty_parlour_
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#c5a880]/90 font-medium">
              Location Map
            </p>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-map"
              aria-label="Open Ganga Beauty Parlour location on Google Maps"
              className="block overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c] transition-colors hover:border-[#c5a880]/40"
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
              className="mt-2.5 inline-flex items-center gap-1 text-xs text-[#c5a880] transition-colors hover:text-[#dfceb8]"
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
              <p className="mb-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#c5a880]/90 font-medium">
                <Instagram className="h-3 w-3" /> Instagram
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {igPreview.map((image) => (
                  <div
                    key={image.src}
                    className="aspect-square overflow-hidden rounded-lg border border-white/[0.08] bg-[#0c0c0c] transition-colors hover:border-[#c5a880]/40"
                  >
                    <CommonImage
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover brightness-[0.84] contrast-[1.06] saturate-[0.85] transition-transform duration-500 hover:scale-[1.05]"
                      loading="lazy"
                      sizes="(min-width: 768px) 8vw, 50vw"
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2.5 text-[11px] text-zinc-500 font-light">
                Follow @ganga_beauty_parlour_
              </p>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-500 font-light md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Bridal Makeup Atelier &middot; Sujangarh &middot; Didwana &middot; Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
