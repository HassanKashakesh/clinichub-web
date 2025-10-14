import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Benefits from "@/components/home/Benefits";
import Testimonial from "@/components/home/Testimonial";
import PricingPreview from "@/components/home/PricingPreview";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <Testimonial />
        <PricingPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
