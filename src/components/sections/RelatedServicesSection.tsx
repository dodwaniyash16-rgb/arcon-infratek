import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Wrench, Cpu, ScanLine, FolderKanban, Ruler, Calculator, FileCheck, Pencil, Box } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface RelatedService {
  icon: LucideIcon;
  title: string;
  href: string;
}

interface RelatedServicesSectionProps {
  title?: string;
  currentService?: string;
  services?: RelatedService[];
}

const allServices: RelatedService[] = [
  { icon: Layers, title: "BIM Modeling", href: "/services/bim-modeling" },
  { icon: Building2, title: "BIM Coordination", href: "/services/bim-coordination" },
  { icon: Ruler, title: "Shop Drawings", href: "/services/shop-drawings" },
  { icon: Calculator, title: "Estimation & QTO", href: "/services/estimation-qto" },
  { icon: ScanLine, title: "Scan to BIM", href: "/services/scan-to-bim" },
  { icon: FileCheck, title: "BIM Auditing", href: "/services/bim-auditing" },
  { icon: Pencil, title: "CAD Drafting", href: "/services/cad-drafting" },
  { icon: Box, title: "BIM Content Creation", href: "/services/bim-content-creation" },
];

const RelatedServicesSection = ({ 
  title = "Related Services", 
  currentService,
  services
}: RelatedServicesSectionProps) => {
  // Filter out current service and use provided or default services
  const displayServices = (services || allServices)
    .filter(s => s.title !== currentService)
    .slice(0, 6);

  return (
    <section className="py-20 section-alt">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="section-label mb-2">Explore More</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              {title}
            </h2>
          </div>
          <Link 
            to="/services" 
            className="hidden md:flex items-center gap-2 text-accent hover:underline font-medium"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.href}
              className="group flex items-center gap-4 bg-background p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-gradient-brand transition-all duration-300">
                <service.icon className="h-6 w-6 icon-gradient group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
