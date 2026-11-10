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
      className="section relative overflow-hidden bg-[#070707]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Editorial Archives</span>
            <div className="gold-divider mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
            <h2
              className="font-serif text-3xl tracking-tight text-white min-[400px]:text-4xl sm:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The bridal{" "}
              <span className="italic font-serif text-[#DFCEB8]">portfolio.</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-zinc-300/80 sm:text-sm sm:leading-7">
              Capturing transcendent bridal transformations, ceremonial rituals, and bespoke editorial aesthetics.
            </p>
          </div>
          <a
            href={ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-cta-top"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#c5a880] transition-colors hover:text-[#dfceb8]"
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
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c] transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a880]/40"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-950">
                <CommonImage
                  src={post.coverUrl || post.mediaUrl}
                  alt={getCaption(post, index)}
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  width={post.width}
                  height={post.height}
                  className="h-full w-full object-cover brightness-[0.84] contrast-[1.06] saturate-[0.88] transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {post.isVideo && (
                <div className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-[#c5a880] text-[#c5a880]" />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="mb-1.5 text-[9px] uppercase tracking-[0.18em] text-[#c5a880]/90">
                  Atelier Archive &middot; 0{index + 1}
                </p>
                <p className="line-clamp-2 text-xs sm:text-sm leading-relaxed text-zinc-100/90 font-light">
                  {getCaption(post, index)}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-11">
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
