import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
