import {
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { Link } from "@/router/Router";
import {
  BUSINESS,
  IMAGE_DIMENSIONS,
  buildPhoneLink,
  buildWhatsAppLink,
  buildWhatsAppBookingMessage,
  GALLERY,
} from "@/data/site";

const FOOTER_WHATSAPP_MESSAGE = buildWhatsAppBookingMessage();

export default function Footer() {
  const wa = buildWhatsAppLink(FOOTER_WHATSAPP_MESSAGE);
  const igPreview = GALLERY.slice(0, 4);

  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[#d4af6e]/20 bg-gradient-to-b from-[#0e0c0a] to-[#060504] pt-12 pb-24 md:pb-12"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-3">
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
              <span className="italic font-serif gold-text">quiet precision.</span>
            </p>
            <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-stone-300 font-light">
              A bespoke bridal atelier dedicated to radiant transformations, authentic ceremonial styling, and advanced skincare rituals in Sujangarh, Rajasthan.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-2" data-testid="footer-local-services">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#d4af6e] font-semibold">
              Sujangarh Services
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <Link
                  to="/beauty-parlour-sujangarh"
                  data-testid="footer-link-beauty-parlour-sujangarh"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Beauty Parlour in Sujangarh
                </Link>
              </li>
              <li>
                <Link
                  to="/bridal-makeup-sujangarh"
                  data-testid="footer-link-bridal-makeup-sujangarh"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Bridal Makeup Artist
                </Link>
              </li>
              <li>
                <Link
                  to="/facial-skincare-sujangarh"
                  data-testid="footer-link-facial-skincare-sujangarh"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Facial &amp; Skincare
                </Link>
              </li>
              <li>
                <Link
                  to="/hair-styling-sujangarh"
                  data-testid="footer-link-hair-styling-sujangarh"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Hair Styling &amp; Keratin
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#d4af6e] font-semibold">
              Atelier &amp; Contact
            </p>
            <p className="mb-4 flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-stone-300 font-light">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af6e]" />
              <span>{BUSINESS.address}</span>
            </p>
            <div className="space-y-2.5">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone}
                  href={buildPhoneLink(phone)}
                  aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300 transition-colors hover:text-[#d4af6e]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d4af6e]/30 bg-[#d4af6e]/10">
                    <Phone className="h-3 w-3 text-[#d4af6e]" />
                  </span>
                  +91 {phone}
                </a>
              ))}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Consultation - Chat with Ganga Beauty Parlour on WhatsApp"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300 transition-colors hover:text-[#f3e5c8]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10">
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
                className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300 transition-colors hover:text-[#d4af6e]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d4af6e]/30 bg-[#d4af6e]/10">
                  <Instagram className="h-3 w-3 text-[#d4af6e]" />
                </span>
                @ganga_beauty_parlour_
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2" data-testid="footer-policies">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#d4af6e] font-semibold">
              Policies &amp; Information
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <Link
                  to="/privacy-policy"
                  data-testid="footer-link-privacy-policy"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  data-testid="footer-link-terms-and-conditions"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/booking-policy"
                  data-testid="footer-link-booking-policy"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-refund-policy"
                  data-testid="footer-link-cancellation-refund-policy"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/bridal-booking-policy"
                  data-testid="footer-link-bridal-booking-policy"
                  className="transition-colors hover:text-[#d4af6e]"
                >
                  Bridal Booking Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#d4af6e] font-semibold">
              Location Map
            </p>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-map"
              aria-label="Open Ganga Beauty Parlour location on Google Maps"
              className="block overflow-hidden rounded-xl border border-[#d4af6e]/20 bg-[#120f0d] transition-colors hover:border-[#d4af6e]/50"
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
              className="mt-2.5 inline-flex items-center gap-1 text-xs text-[#d4af6e] transition-colors hover:text-[#f3e5c8] font-medium"
            >
              Open in Google Maps <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-preview"
              className="block"
            >
              <p className="mb-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d4af6e] font-semibold">
                <Instagram className="h-3 w-3" /> Instagram
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {igPreview.map((image) => (
                  <div
                    key={image.src}
                    className="aspect-square overflow-hidden rounded-lg border border-[#d4af6e]/20 bg-[#120f0d] transition-colors hover:border-[#d4af6e]/50"
                  >
                    <CommonImage
                      src={image.src}
                      alt={image.caption}
                      className="h-full w-full object-cover brightness-[0.88] contrast-[1.06] saturate-[0.95] transition-transform duration-500 hover:scale-[1.06]"
                      loading="lazy"
                      sizes="(min-width: 768px) 8vw, 50vw"
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2.5 text-[11px] text-stone-400 font-light">
                Follow @ganga_beauty_parlour_
              </p>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-stone-400 font-light md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline text-stone-600" aria-hidden="true">
              &middot;
            </span>
            <p>
              Bridal Makeup Atelier &middot; Sujangarh &middot; Didwana &middot; Rajasthan
            </p>
          </div>
          <p className="text-stone-400">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.krinectra.online/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Krinectra - Official Website (opens in a new tab)"
              className="group relative inline-flex items-center font-medium text-[#d4af6e] tracking-wide transition-all duration-300 hover:text-[#f3e5c8] hover:drop-shadow-[0_0_8px_rgba(212,175,110,0.5)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af6e]"
            >
              <span className="bg-gradient-to-r from-[#f3e5c8] via-[#d4af6e] to-[#c59b4e] bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
                Krinectra
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-[#d4af6e] via-[#f3e5c8] to-[#d4af6e] transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
