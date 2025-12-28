import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Zap, HardHat, MapPin, FileCheck, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "VDC & BIM Consulting",
    description: "Strategic planning and implementation of BIM workflows for maximum project efficiency.",
    href: "/services/vdc-bim-consulting",
  },
  {
    icon: Building2,
    title: "Architectural BIM",
    description: "Detailed architectural modeling with precision documentation and visualization.",
    href: "/services/architectural-bim",
  },
  {
    icon: HardHat,
    title: "Structural BIM",
    description: "Comprehensive structural modeling for steel, concrete, and timber construction.",
    href: "/services/structural-bim",
  },
  {
    icon: Zap,
    title: "MEP BIM",
    description: "Integrated mechanical, electrical, and plumbing coordination and modeling.",
    href: "/services/mep-bim",
  },
  {
    icon: MapPin,
    title: "Civil & Utilities BIM",
    description: "Infrastructure and utility modeling for site development and civil projects.",
    href: "/services/civil-utilities-bim",
  },
  {
    icon: FileCheck,
    title: "As-Built BIM",
    description: "Accurate as-built documentation from point cloud data and site surveys.",
    href: "/services/as-built-bim",
  },
  {
    icon: ClipboardList,
    title: "BIM Project Management",
    description: "End-to-end project coordination, standards development, and quality assurance.",
    href: "/services/bim-project-management",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Services designed for{" "}
            <span className="text-gradient">production speed</span> and{" "}
            <span className="text-gradient">coordination certainty</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive BIM and VDC solutions tailored to your project needs, 
            delivered by experts who understand construction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
                <service.icon className="h-6 w-6 icon-gradient" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
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
