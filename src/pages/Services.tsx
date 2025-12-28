import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Building2, Wrench, Cpu, HardHat, ScanLine, FolderKanban, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "VDC & BIM Consulting",
    description: "Strategic BIM implementation, execution planning, and workflow optimization for construction projects.",
    href: "/services/vdc-bim-consulting",
  },
  {
    icon: Building2,
    title: "Architectural BIM",
    description: "LOD 100-500 architectural modeling with detailed documentation and coordination-ready deliverables.",
    href: "/services/architectural-bim",
  },
  {
    icon: HardHat,
    title: "Structural BIM",
    description: "Precise structural modeling including steel, concrete, and timber with connection details.",
    href: "/services/structural-bim",
  },
  {
    icon: Cpu,
    title: "MEP BIM",
    description: "Comprehensive mechanical, electrical, and plumbing modeling with clash-free coordination.",
    href: "/services/mep-bim",
  },
  {
    icon: Wrench,
    title: "Civil & Utilities BIM",
    description: "Infrastructure modeling including grading, utilities, and site coordination.",
    href: "/services/civil-utilities-bim",
  },
  {
    icon: ScanLine,
    title: "As-Built BIM / Scan to BIM",
    description: "Accurate as-built documentation from point cloud data and existing conditions surveys.",
    href: "/services/as-built-bim",
  },
  {
    icon: FolderKanban,
    title: "BIM Project Management",
    description: "End-to-end project coordination, model management, and stakeholder collaboration.",
    href: "/services/bim-project-management",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Comprehensive BIM solutions for{" "}
              <span className="text-gradient">every project phase</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to construction, we provide end-to-end BIM services 
              designed for production speed and coordination certainty.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.href}
                className="group bg-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-all duration-300">
                  <service.icon className="h-7 w-7 icon-gradient group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white]" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Need a custom solution?
          </h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Every project is unique. Let's discuss how we can tailor our services 
            to meet your specific requirements.
          </p>
          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
