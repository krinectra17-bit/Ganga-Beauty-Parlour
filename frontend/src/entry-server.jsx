import { renderToString } from "react-dom/server";
import { RouterProvider } from "@/router/Router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import PremiumServices from "@/components/sections/PremiumServices";
import Offers from "@/components/sections/Offers";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Booking from "@/components/sections/Booking";
import PolicyPage from "@/components/policies/PolicyPage";
import LocalSeoPage from "@/components/pages/LocalSeoPage";
import { POLICY_LIST } from "@/data/policies";
import { LOCAL_SEO_PAGES } from "@/data/localSeoPages";

const POLICY_SLUGS = new Set(POLICY_LIST.map((p) => p.slug));
const LOCAL_SEO_SLUGS = new Set(Object.keys(LOCAL_SEO_PAGES));

function SSRApp({ url }) {
  const cleanPath = url ? url.replace(/\/+$/, "") : "";
  const slug = cleanPath.replace(/^\//, "");

  let content;
  if (slug === "") {
    content = (
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <PremiumServices />
        <Offers />
        <Gallery />
        <Testimonials />
        <Contact />
        <Booking />
      </main>
    );
  } else if (POLICY_SLUGS.has(slug)) {
    content = (
      <main>
        <PolicyPage policyKey={slug} />
      </main>
    );
  } else if (LOCAL_SEO_SLUGS.has(slug)) {
    content = (
      <main>
        <LocalSeoPage pageKey={slug} />
      </main>
    );
  } else {
    content = (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <h1 className="font-serif text-3xl sm:text-5xl text-[#f3e5c8] mb-4">Page Not Found</h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-md mb-8 font-light">
          The requested page could not be found. Please return to the homepage or explore our services.
        </p>
      </main>
    );
  }

  return (
    <RouterProvider initialPath={url || "/"}>
      <div className="relative min-h-screen bg-[#080706] text-white selection:bg-[#d4af6e] selection:text-black">
        <Navbar />
        {content}
        <FloatingWhatsApp />
        <Footer />
      </div>
    </RouterProvider>
  );
}

export function render(url) {
  const html = renderToString(<SSRApp url={url} />);
  return { html };
}
