import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "BIM Modeling",
    description: "Detailed Revit models for architecture, structure, and MEP disciplines built to your standards.",
    href: "/services/architectural-bim",
  },
  {
    title: "BIM Coordination",
    description: "Multi-discipline clash detection and resolution to eliminate conflicts before construction.",
    href: "/services/vdc-bim-consulting",
  },
  {
    title: "Shop Drawings",
    description: "Fabrication-ready documentation extracted directly from coordinated BIM models.",
    href: "/services/structural-bim",
  },
  {
    title: "Estimation & QTO",
    description: "Accurate quantity takeoffs and cost estimates derived from model data.",
    href: "/services/mep-bim",
  },
  {
    title: "Scan to BIM",
    description: "Point cloud processing and as-built model creation from laser scan data.",
    href: "/services/as-built-bim",
  },
  {
    title: "BIM Auditing",
    description: "Model quality reviews and compliance checks against project standards.",
    href: "/services/bim-project-management",
  },
  {
    title: "CAD Drafting",
    description: "2D documentation and drafting services for projects requiring traditional deliverables.",
    href: "/services/civil-utilities-bim",
  },
  {
    title: "BIM Content Creation",
    description: "Custom Revit families and content libraries tailored to your project needs.",
    href: "/services/bim-project-management",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header - Left Aligned */}
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-4">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Services designed for{" "}
            <span className="text-gradient">production speed</span> and{" "}
            <span className="text-gradient">coordination certainty.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From modeling to clash coordination to fabrication-ready documentation, 
            we deliver consistent outputs aligned with your standards.
          </p>
        </div>

        {/* Services Grid - 8 cards, no icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card p-6 rounded-xl border border-border hover:border-border-secondary hover:shadow-md card-hover"
            >
              <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
