import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Instagram,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { BRIDAL_GALLERY, BUSINESS, bookService } from "@/data/site";

const ACCOUNT_URL = "https://www.instagram.com/ganga_beauty_parlour_/";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev > 0 ? prev - 1 : BRIDAL_GALLERY.length - 1
    );
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev < BRIDAL_GALLERY.length - 1 ? prev + 1 : 0
    );
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedIndex]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, prevImage, nextImage]);

  // Mobile swipe gestures
  const handleTouchStart = (e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    // Trigger horizontal navigation when horizontal swipe exceeds 40px and dominant over vertical
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  const currentItem =
    selectedIndex !== null ? BRIDAL_GALLERY[selectedIndex] : null;

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="section relative overflow-hidden bg-gradient-to-b from-[#080706] via-[#100e0b] to-[#070605]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af6e]/25 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Editorial Bridal Portfolio</span>
            <div className="gold-divider mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
            <h2
              className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl sm:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Bridal{" "}
              <span className="italic font-serif gold-text">
                Transformations
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-300/85 sm:text-sm sm:leading-7 font-light">
              Every bride has a story. Explore the artistry, elegance and beauty
              behind our work.
            </p>
          </div>
          <a
            href={BUSINESS.instagram || ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-cta-top"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#d4af6e] transition-colors hover:text-[#f3e5c8] font-medium"
          >
            <Instagram className="h-4 w-4" />
            @ganga_beauty_parlour_
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Thumbnail Gallery Grid: 3-column / 6-col on desktop, 2-column on mobile */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-6 lg:gap-6">
          {BRIDAL_GALLERY.map((item, index) => {
            // Desktop: top 3 cards span 2 cols each (3 cols), bottom 2 span 3 cols each (2 cols)
            // Mobile: cards 0-3 span 1 col (2 cols), card 4 spans 2 cols
            const gridClass =
              index < 3
                ? "col-span-1 lg:col-span-2 aspect-[4/5]"
                : index === 4
                ? "col-span-2 sm:col-span-2 lg:col-span-3 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11]"
                : "col-span-1 sm:col-span-1 lg:col-span-3 aspect-[4/5] lg:aspect-[16/11]";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-thumb-${index}`}
                aria-label={`View ${item.title} - ${item.look} in full size`}
                className={`group relative overflow-hidden rounded-2xl border border-[#d4af6e]/20 bg-[#14110e] text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af6e]/60 hover:shadow-[0_20px_45px_-15px_rgba(212,175,110,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6e] cursor-pointer ${gridClass}`}
              >
                <div className="h-full w-full overflow-hidden bg-stone-950">
                  <CommonImage
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>

                {/* Subtle dark gradient scrim at bottom to showcase title and look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/40 to-transparent transition-opacity duration-300 group-hover:via-[#080706]/25" />

                {/* Expand Icon Badge */}
                <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#d4af6e]/30 bg-[#080706]/75 text-[#d4af6e] backdrop-blur-md opacity-85 group-hover:opacity-100 group-hover:scale-110 group-hover:border-[#d4af6e]/70 transition-all">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>

                {/* Look Tag & Title */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <p className="mb-1 text-[8.5px] min-[400px]:text-[9.5px] uppercase tracking-[0.16em] text-[#d4af6e] font-medium">
                    {item.look}
                  </p>
                  <h3 className="font-serif text-xs min-[400px]:text-sm sm:text-base text-stone-100 group-hover:text-[#f3e5c8] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center md:mt-11">
          <a
            href={BUSINESS.instagram || ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-cta-bottom"
            className="btn-outline-gold cursor-pointer"
          >
            <Instagram className="h-4 w-4" />
            Explore More Bridal Looks on Instagram
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal – Highest Priority */}
      {selectedIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bridal Photograph Full View"
          data-testid="gallery-lightbox"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#080706]/96 backdrop-blur-xl transition-opacity duration-300 p-3 sm:p-6 select-none"
        >
          {/* Top Bar with Look Info, Counter & Close Button */}
          <div
            className="z-10 flex w-full items-center justify-between pt-[max(0.5rem,env(safe-area-inset-top))] px-1 sm:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#fff3db] to-[#c59f54]" />
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#d4af6e] font-semibold">
                  {currentItem.look}
                </p>
                <h3 className="font-serif text-sm sm:text-lg text-white">
                  {currentItem.title}
                </h3>
              </div>
            </div>

            {/* Counter (e.g. 1 / 5) */}
            <div
              data-testid="lightbox-counter"
              className="rounded-full border border-[#d4af6e]/30 bg-[#14110e]/80 px-3 py-1 text-xs font-serif tracking-widest text-[#f3e5c8] backdrop-blur-md"
            >
              {selectedIndex + 1} / {BRIDAL_GALLERY.length}
            </div>

            {/* Close Button */}
            <button
              type="button"
              data-testid="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#d4af6e]/40 bg-[#16120e]/80 text-[#f3e5c8] transition-all hover:bg-[#d4af6e] hover:text-[#080706] hover:scale-105 cursor-pointer backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#d4af6e]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Center Stage: Previous Arrow, Uncropped Full Photo, Next Arrow */}
          <div className="relative flex flex-1 items-center justify-center min-h-0 py-2 sm:py-4">
            {/* Previous Navigation Button */}
            <button
              type="button"
              data-testid="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous photograph"
              className="absolute left-1 sm:left-4 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#d4af6e]/35 bg-[#14110e]/85 text-[#f3e5c8] backdrop-blur-md transition-all hover:bg-[#d4af6e] hover:text-[#080706] hover:scale-105 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-[#d4af6e]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Complete Original Photograph (object-fit: contain, never cropped) */}
            <div
              className="relative flex items-center justify-center max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={currentItem.id}
                src={currentItem.originalSrc || currentItem.src}
                alt={currentItem.alt}
                data-testid="lightbox-image"
                loading="eager"
                decoding="sync"
                className="h-auto w-auto max-h-[72vh] sm:max-h-[78vh] max-w-[94vw] sm:max-w-[85vw] object-contain rounded-lg border border-[#d4af6e]/25 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Next Navigation Button */}
            <button
              type="button"
              data-testid="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next photograph"
              className="absolute right-1 sm:right-4 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#d4af6e]/35 bg-[#14110e]/85 text-[#f3e5c8] backdrop-blur-md transition-all hover:bg-[#d4af6e] hover:text-[#080706] hover:scale-105 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-[#d4af6e]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Caption & Booking Action */}
          <div
            className="z-10 w-full text-center pb-[max(0.5rem,env(safe-area-inset-bottom))] px-2 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mx-auto max-w-2xl text-[11px] sm:text-xs md:text-sm text-stone-200/90 font-light leading-relaxed">
              {currentItem.caption}
            </p>
            <div className="mt-2.5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  closeLightbox();
                  bookService(`Bridal Makeup - ${currentItem.title}`);
                }}
                data-testid="lightbox-book-btn"
                className="btn-gold py-1.5 px-4 text-xs font-semibold cursor-pointer"
              >
                <span>Book This Bridal Look</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
