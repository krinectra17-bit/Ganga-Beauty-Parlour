import { lazy, Suspense } from "react";
import { RouterProvider, useRouter, Link } from "@/router/Router";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";

// Critical above-the-fold content (Navbar, Hero, WhyChooseUs) is loaded statically.
// Below-the-fold sections are code-split to eliminate long tasks and optimize mobile LCP & TBT.
const Services = lazy(() => import("@/components/sections/Services"));
const PremiumServices = lazy(() => import("@/components/sections/PremiumServices"));
const Offers = lazy(() => import("@/components/sections/Offers"));
const Gallery = lazy(() => import("@/components/sections/Gallery"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Booking = lazy(() => import("@/components/sections/Booking"));
const PolicyPage = lazy(() => import("@/components/policies/PolicyPage"));
const LocalSeoPage = lazy(() => import("@/components/pages/LocalSeoPage"));

const POLICY_SLUGS = new Set([
  "privacy-policy",
  "terms-and-conditions",
  "booking-policy",
  "cancellation-refund-policy",
  "bridal-booking-policy",
]);

function MainContent() {
  const { path } = useRouter();

  // Match policy route
  const policySlug = path.replace(/^\//, "");
  if (POLICY_SLUGS.has(policySlug)) {
    return (
      <main>
        <Suspense fallback={<div className="min-h-screen bg-[#080706]" />}>
          <PolicyPage policyKey={policySlug} />
        </Suspense>
      </main>
    );
  }

  // Elegant 404 fallback for unknown paths
  if (path !== "/" && path !== "") {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <h1
          className="font-serif text-3xl sm:text-5xl text-[#f3e5c8] mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-stone-300 text-xs sm:text-sm max-w-md mb-8 font-light">
          The requested page could not be found. Please return to the homepage or explore our services.
        </p>
        <Link to="/" className="btn-gold px-6 py-2.5 text-xs font-semibold">
          Return to Home
        </Link>
      </main>
    );
  }

  // Home Page: Above-fold Hero + WhyChooseUs rendered immediately; below-fold loaded via Suspense
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Suspense fallback={<div id="services" className="min-h-[300px] bg-[#0a0806]" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] bg-[#0a0806]" />}>
        <PremiumServices />
      </Suspense>
      <Suspense fallback={<div id="offers" className="min-h-[300px] bg-[#0a0806]" />}>
        <Offers />
      </Suspense>
      <Suspense fallback={<div id="gallery" className="min-h-[300px] bg-[#0a0806]" />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] bg-[#0a0806]" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div id="contact" className="min-h-[300px] bg-[#0a0806]" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div id="booking" className="min-h-[400px] bg-[#0a0806]" />}>
        <Booking />
      </Suspense>
    </main>
  );
}

export default function App({ initialPath }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <div className="relative min-h-screen bg-[#080706] text-white selection:bg-[#d4af6e] selection:text-black">
        <Navbar />
        <MainContent />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </RouterProvider>
  );
}
