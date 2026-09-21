import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Play } from "lucide-react";
import CommonImage from "@/components/CommonImage";
import { GALLERY, BUSINESS } from "@/data/site";

const ACCOUNT_URL = "https://www.instagram.com/ganga_beauty_parlour_/";

function fallbackPosts() {
  return GALLERY.slice(0, 4).map((item, index) => ({
    id: `fallback-${index}`,
    caption: item.caption,
    coverUrl: item.src,
    mediaUrl: item.src,
    permalink: ACCOUNT_URL,
    mediaType: "IMAGE",
    isVideo: false,
    width: item.width,
    height: item.height,
  }));
}

function getCaption(post, index) {
  if (post.caption) {
    const cleaned = post.caption.replace(/\s+/g, " ").trim();
    return cleaned.length > 72 ? `${cleaned.slice(0, 72)}...` : cleaned;
  }

  const labels = [
    "Bridal Look \u00b7 Wedding Day",
    "Luxury Glam \u00b7 Reception",
    "Beauty Ritual \u00b7 Studio Moment",
    "Hair & Makeup \u00b7 Editorial Finish",
  ];
  return labels[index] || "Latest bridal transformation";
}

export default function Gallery() {
  const [posts, setPosts] = useState(() => fallbackPosts());

  useEffect(() => {
    setPosts(fallbackPosts());
  }, []);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="section relative overflow-hidden bg-[#050505]"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Instagram</span>
            <div className="gold-divider mt-3 mb-5" />
            <h2
              className="font-serif text-4xl tracking-tight text-white min-[400px]:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Moments of <span className="italic gold-text">brilliance.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300/82 min-[400px]:text-base">
              Latest bridal transformations and luxury beauty moments.
            </p>
          </div>
          <a
            href={ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-cta-top"
            className="inline-flex items-center gap-2 text-sm text-[#D4AF37] transition-colors hover:text-[#E8CA6B]"
          >
            <Instagram className="h-4 w-4" />
            @ganga_beauty_parlour_
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink || ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`instagram-post-${index}`}
              data-sr
              data-sr-delay={`${index * 90}ms`}
              className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/14 bg-black shadow-[0_24px_70px_-60px_rgba(212,175,55,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/38"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-950">
                <CommonImage
                  src={post.coverUrl || post.mediaUrl}
                  alt={getCaption(post, index)}
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  width={post.width}
                  height={post.height}
                  className="h-full w-full object-cover brightness-[0.82] contrast-[1.08] saturate-[0.84] transition-transform duration-700 group-hover:scale-[1.055]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/16 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/12 via-transparent to-[#D4AF37]/8 opacity-70" />

              {post.isVideo && (
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/45 backdrop-blur-sm">
                  <Play className="ml-0.5 h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5 min-[400px]:p-6">
                <p className="mb-2 text-[9px] uppercase tracking-[0.24em] text-[#D4AF37]">
                  Latest Instagram
                </p>
                <p className="line-clamp-2 text-sm leading-6 text-zinc-100/90">
                  {getCaption(post, index)}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-11">
          <a
            href={BUSINESS.instagram || ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-cta-bottom"
            className="btn-outline-gold"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
