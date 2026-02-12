import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MenuHighlights from "@/components/MenuHighlights";
import PromoGroups from "@/components/PromoGroups";
import Gallery from "@/components/Gallery";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <MenuHighlights />
      <PromoGroups />
      <Gallery />
      <LocationCTA />
      <Footer />
    </main>
  );
}
