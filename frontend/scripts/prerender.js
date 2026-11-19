import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const distSsrDir = path.resolve(rootDir, "dist-ssr");

// 1. Build the SSR bundle using Vite
console.log("--> [Prerender] Building Vite SSR bundle...");
execSync("npx vite build --ssr src/entry-server.jsx --outDir dist-ssr", {
  cwd: rootDir,
  stdio: "inherit",
});

// 2. Import the compiled server render function
const ssrEntryUrl = pathToFileURL(path.resolve(distSsrDir, "entry-server.js")).href;
const { render } = await import(ssrEntryUrl);

// 3. Import site and policy metadata
const { LOCAL_SEO_PAGES } = await import(pathToFileURL(path.resolve(rootDir, "src/data/localSeoPages.js")).href);
const { POLICIES } = await import(pathToFileURL(path.resolve(rootDir, "src/data/policies.js")).href);

// 4. Read dist/index.html template
const templatePath = path.resolve(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("Error: dist/index.html not found. Run vite build first.");
  process.exit(1);
}
const baseTemplate = fs.readFileSync(templatePath, "utf8");

// Extract the existing homepage JSON-LD from template
const baseJsonLdMatch = baseTemplate.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
const baseJsonLd = baseJsonLdMatch ? baseJsonLdMatch[1] : null;

// Define all 10 routes with metadata
const ROUTES = [
  // Homepage
  {
    path: "/",
    slug: "",
    outDir: distDir,
    title: "Ganga Beauty Parlour | Bridal Makeup Artist & Beauty Salon in Sujangarh",
    description:
      "Ganga Beauty Parlour by Ganga Manish Soni — Premier beauty parlour and bridal makeup artist in Sujangarh. Luxury bridal makeovers, HD & airbrush makeup, facial skincare, and hair styling in Sujangarh, Didwana and Ladnun. Book on WhatsApp.",
    canonical: "https://gangabeautyparlour.com/",
    jsonLd: baseJsonLd ? JSON.parse(baseJsonLd) : null,
  },

  // 4 Local SEO Landing Pages
  ...Object.values(LOCAL_SEO_PAGES).map((page) => ({
    path: page.path,
    slug: page.slug,
    outDir: path.resolve(distDir, page.slug),
    title: page.title,
    description: page.metaDescription,
    canonical: page.canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": `${page.canonical}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gangabeautyparlour.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": page.h1,
              "item": page.canonical
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${page.canonical}#service`,
          "name": page.h1,
          "description": page.metaDescription,
          "url": page.canonical,
          "provider": {
            "@id": "https://gangabeautyparlour.com/#salon"
          },
          "areaServed": [
            { "@type": "City", "name": "Sujangarh" },
            { "@type": "City", "name": "Didwana" },
            { "@type": "City", "name": "Ladnun" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "7999",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${page.canonical}#faq`,
          "mainEntity": page.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }
      ]
    }
  })),

  // 5 Policy Pages
  ...Object.values(POLICIES).map((policy) => ({
    path: policy.path,
    slug: policy.slug,
    outDir: path.resolve(distDir, policy.slug),
    title: policy.seoTitle,
    description: policy.metaDescription,
    canonical: policy.canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": `${policy.canonical}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gangabeautyparlour.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": policy.title,
              "item": policy.canonical
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": `${policy.canonical}#webpage`,
          "url": policy.canonical,
          "name": policy.title,
          "description": policy.metaDescription,
          "isPartOf": {
            "@id": "https://gangabeautyparlour.com/#website"
          },
          "publisher": {
            "@id": "https://gangabeautyparlour.com/#salon"
          },
          "inLanguage": "en-IN"
        }
      ]
    }
  }))
];

console.log(`--> [Prerender] Generating static HTML for ${ROUTES.length} routes...`);

for (const route of ROUTES) {
  const { html: renderedBody } = render(route.path);

  let pageHtml = baseTemplate;

  // 1. Inject rendered HTML into root
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${renderedBody}</div>`);

  // 2. Replace title
  pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);

  // 3. Replace meta description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  // 4. Replace canonical
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // 5. Replace OpenGraph tags
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // 6. Replace Twitter tags
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // 7. Replace Schema.org JSON-LD structured data
  if (route.jsonLd) {
    const formattedJsonLd = JSON.stringify(route.jsonLd, null, 2);
    pageHtml = pageHtml.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${formattedJsonLd}\n    </script>`
    );
  }

  // Ensure output directory exists
  if (!fs.existsSync(route.outDir)) {
    fs.mkdirSync(route.outDir, { recursive: true });
  }

  const outFilePath = path.resolve(route.outDir, "index.html");
  fs.writeFileSync(outFilePath, pageHtml, "utf8");

  // Also write clean URL .html file (e.g. dist/beauty-parlour-sujangarh.html) for web servers
  if (route.slug) {
    const cleanHtmlPath = path.resolve(distDir, `${route.slug}.html`);
    fs.writeFileSync(cleanHtmlPath, pageHtml, "utf8");
  }

  const fileSizeKB = (fs.statSync(outFilePath).size / 1024).toFixed(1);
  console.log(`  ✓ ${route.path.padEnd(32)} -> ${path.relative(rootDir, outFilePath)} (${fileSizeKB} KB)`);
}

// 8. Clean up temporary dist-ssr directory
try {
  fs.rmSync(distSsrDir, { recursive: true, force: true });
  console.log("--> [Prerender] Cleaned up temporary SSR bundle.");
} catch (e) {
  // ignore cleanup errors
}

console.log("--> [Prerender] All 10 canonical routes successfully prerendered into dist/");
