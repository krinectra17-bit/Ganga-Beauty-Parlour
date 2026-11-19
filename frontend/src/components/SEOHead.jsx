import { useEffect } from "react";

const DEFAULT_SEO = {
  title: "Ganga Beauty Parlour | Bridal Makeup Artist & Beauty Salon in Sujangarh",
  description:
    "Ganga Beauty Parlour by Ganga Manish Soni \u2014 Premier beauty parlour and bridal makeup artist in Sujangarh. Luxury bridal makeovers, HD & airbrush makeup, facial skincare, and hair styling in Sujangarh and Didwana. Book on WhatsApp.",
  canonical: "https://gangabeautyparlour.com/",
};

export default function SEOHead({ title, description, canonical }) {
  useEffect(() => {
    // 1. Update Title
    const prevTitle = document.title;
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : DEFAULT_SEO.description;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.setAttribute("content", description);
    }

    // 3. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : DEFAULT_SEO.canonical;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    if (canonical) {
      canonicalLink.setAttribute("href", canonical);
    }

    // 4. Update OpenGraph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute("content", description);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) ogUrl.setAttribute("content", canonical);

    return () => {
      document.title = prevTitle || DEFAULT_SEO.title;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc || DEFAULT_SEO.description);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical || DEFAULT_SEO.canonical);
      if (ogTitle) ogTitle.setAttribute("content", DEFAULT_SEO.title);
      if (ogDesc) ogDesc.setAttribute("content", DEFAULT_SEO.description);
      if (ogUrl) ogUrl.setAttribute("content", DEFAULT_SEO.canonical);
    };
  }, [title, description, canonical]);

  return null;
}
