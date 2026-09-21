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

export default function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Navbar />
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
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
