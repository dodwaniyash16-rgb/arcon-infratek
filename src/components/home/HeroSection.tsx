import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGradient from "@/assets/logo-gradient.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Mark */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoGradient} 
              alt="Arcon Infratek" 
              className="h-16 w-auto mx-auto opacity-80"
            />
          </div>

          {/* Section Label */}
          <p className="section-label mb-6 animate-fade-in-delay-1">
            BIM & VDC Excellence
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-delay-2">
            BIM and VDC delivery that is{" "}
            <span className="text-gradient">fast, accurate, and accountable</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-3">
            Transform your construction projects with precision modeling, seamless 
            coordination, and measurable outcomes. Partner with experts who deliver.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <Button size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by leading construction firms worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder client logos */}
              {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map((client, i) => (
                <div 
                  key={i} 
                  className="h-8 w-24 bg-foreground/10 rounded flex items-center justify-center text-xs text-muted-foreground font-medium"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
