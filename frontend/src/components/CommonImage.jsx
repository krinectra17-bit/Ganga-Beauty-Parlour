import { useMemo } from "react";

const ASSET_VERSION = "1.1";

const DEFAULT_FALLBACK = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%230a0a0a'/><text x='50%' y='50%' alignment-baseline='middle' text-anchor='middle' fill='%23d4af37' font-family='Arial,Helvetica,sans-serif' font-size='18'>Image unavailable</text></svg>`;

/**
 * CommonImage - Production-optimized image component
 * Features:
 * - Lazy loading by default
 * - Async decoding for performance
 * - Provides optional WebP source fallback via <picture>
 * - Proper alt text for accessibility
 * - Graceful error fallback
 */
export default function CommonImage({
  src,
  alt = "Image",
  className = "",
  loading = "lazy",
  style,
  onError,
  preferWebp = true,
  srcSet,
  sizes,
  width,
  height,
  fallback = DEFAULT_FALLBACK,
  ...props
}) {
  const optimizedSrc = useMemo(() => {
    if (!src) return src;
    if (src.startsWith("/") && !src.includes("?")) {
      return `${src}?v=${ASSET_VERSION}`;
    }
    return src;
  }, [src]);

  const webpSrc = useMemo(() => {
    if (!preferWebp || !optimizedSrc) return null;
    if (optimizedSrc.startsWith("data:") || /\.webp($|\?)/.test(optimizedSrc)) return null;
    return optimizedSrc.replace(/\.[^.?#]+(?=$|\?)/, ".webp");
  }, [optimizedSrc, preferWebp]);

  const handleError = (event) => {
    const target = event.currentTarget;
    try {
      if (target && target.src && target.src !== fallback) {
        target.src = fallback;
      }
    } catch (e) {
      // ignore DOM assignment errors in SSR contexts
    }
    if (onError) onError(event);
  };

  if (!optimizedSrc) return null;

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : "auto"}
        className={className}
        style={style}
        width={width}
        height={height}
        onError={handleError}
        {...props}
      />
    </picture>
  );
}
