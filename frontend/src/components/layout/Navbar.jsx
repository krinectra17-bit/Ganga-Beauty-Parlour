import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import {
  BUSINESS,
  IMAGE_DIMENSIONS,
  bookService,
  buildPhoneLink,
} from "@/data/site";
import CommonImage from "@/components/CommonImage";

const links = [
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
          : "bg-black/30 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            data-testid="brand-link"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 md:w-13 md:h-13 flex items-center justify-center overflow-hidden rounded-full">
              <CommonImage
                src="/images/logos/logo-ganga-gold.webp"
                alt="Ganga Beauty Parlour logo"
                loading="eager"
                className="w-full h-full object-contain"
                srcSet="/images/logos/logo-ganga-gold.webp 1x, /images/logos/logo-ganga-gold.webp 2x"
                width={IMAGE_DIMENSIONS.logo.width}
                height={IMAGE_DIMENSIONS.logo.height}
              />
            </div>
            <span className="text-white font-serif font-medium uppercase tracking-[0.16em] text-sm md:text-base">
              Ganga Beauty Parlour
            </span>
          </a>

          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.16em] text-zinc-300 hover:text-[#c5a880] transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col gap-0.5 text-right">
              {BUSINESS.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={buildPhoneLink(phone)}
                  data-testid={`navbar-call-${index + 1}`}
                  aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-[#c5a880] transition-colors font-light"
                >
                  <Phone className="w-3 h-3 text-[#c5a880]" />
                  +91 {phone}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => bookService("")}
              data-testid="navbar-book"
              className="btn-gold py-2 px-5 text-xs"
            >
              Book Appointment
            </button>
          </div>

          <button
            data-testid="menu-toggle"
            className="md:hidden text-white p-2 rounded-lg border border-white/10 transition hover:border-[#c5a880]/40"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-controls="mobile-navigation"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-white/[0.08] mobile-menu-enter transition-all duration-300 ease-out overflow-hidden">
          <div id="mobile-navigation" className="px-5 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mnav-${l.label.toLowerCase()}`}
                className="text-zinc-200 text-sm tracking-wide hover:text-[#c5a880]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
              {BUSINESS.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={buildPhoneLink(phone)}
                  data-testid={`mnav-call-${index + 1}`}
                  aria-label={`Call Ganga Beauty Parlour at +91 ${phone}`}
                  className="flex items-center gap-2 text-zinc-300 text-sm font-light"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  +91 {phone}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                bookService("");
              }}
              data-testid="mnav-book"
              className="btn-gold w-fit py-2.5 px-5 text-xs mt-1"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
