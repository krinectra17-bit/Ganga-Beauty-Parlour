import { RouterProvider, useRouter, Link } from "@/router/Router";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import PremiumServices from "@/components/sections/PremiumServices";
import Offers from "@/components/sections/Offers";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Booking from "@/components/sections/Booking";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import PolicyPage from "@/components/policies/PolicyPage";
import { POLICIES } from "@/data/policies";

function MainContent() {
  const { path } = useRouter();

  // Match policy route
  const policySlug = path.replace(/^\//, "");
  if (POLICIES[policySlug]) {
    return (
      <main>
        <PolicyPage policyKey={policySlug} />
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

  // Home Page
  return (
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
}

export default function App() {
  return (
    <RouterProvider>
      <div className="App bg-black min-h-screen text-white flex flex-col justify-between">
        <Navbar />
        <MainContent />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </RouterProvider>
  );
}
