import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  "Healthcare",
  "Commercial",
  "Industrial",
  "Residential",
  "Hospitality",
  "Education",
  "Infrastructure",
];

const PortfolioSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label mb-4">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Proven delivery</span> across project types.
          </h2>
        </div>

        {/* Sector Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              to={`/portfolio?sector=${sector.toLowerCase()}`}
              className="sector-chip sector-chip-default"
            >
              {sector}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link to="/portfolio">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
