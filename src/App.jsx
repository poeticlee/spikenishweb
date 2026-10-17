import { WhatsAppProvider } from "./context/WhatsAppContext";
import StructuredData from "./components/StructuredData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCatalogue from "./components/ProductCatalogue";
import TrainingBanner from "./components/TrainingBanner";
import TrainingSection from "./components/TrainingSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import LocationsSection from "./components/LocationsSection";
import ServiceAreas from "./components/ServiceAreas";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <WhatsAppProvider>
      <StructuredData />
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-800 focus:shadow-lg"
      >
        Skip to products
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <FeaturedProducts />
        <ProductCatalogue />
        <TrainingBanner />
        <TrainingSection />
        <WhyChooseUs />
        <AboutSection />
        <LocationsSection />
        <ServiceAreas />
        <ContactSection />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </WhatsAppProvider>
  );
}
