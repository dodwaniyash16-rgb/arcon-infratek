import { Link } from "react-router-dom";
import { ArrowRight, Layers, Building2, Ruler, Calculator, ScanLine, FileCheck, Pencil, Box, Users, HardHat, Briefcase, Building, Landmark, Settings } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCategory {
  title: string;
  href?: string;
  items: {
    label: string;
    href: string;
  }[];
}

interface StakeholderItem {
  icon: LucideIcon;
  label: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "BIM Services",
    items: [
      { label: "BIM Modeling", href: "/services/bim-modeling" },
      { label: "BIM Coordination", href: "/services/bim-coordination" },
      { label: "Shop Drawings", href: "/services/shop-drawings" },
      { label: "Estimation & QTO", href: "/services/estimation-qto" },
    ],
  },
  {
    title: "Design & Documentation",
    items: [
      { label: "Scan to BIM", href: "/services/scan-to-bim" },
      { label: "BIM Auditing", href: "/services/bim-auditing" },
      { label: "CAD Drafting", href: "/services/cad-drafting" },
      { label: "BIM Content Creation", href: "/services/bim-content-creation" },
    ],
  },
];

const stakeholders: StakeholderItem[] = [
  { icon: Building2, label: "Architects" },
  { icon: HardHat, label: "Contractors" },
  { icon: Briefcase, label: "Developers" },
  { icon: Building, label: "Design Consultants" },
  { icon: Landmark, label: "Government" },
  { icon: Settings, label: "Facility Managers" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 right-0 pt-4"
      onMouseLeave={onClose}
    >
      <div className="container-custom">
        <div className="bg-foreground text-background rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-3 divide-x divide-background/10">
            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index} className="p-8">
                <h3 className="text-gradient font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                  {category.title}
                </h3>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-2.5 px-3 -mx-3 rounded-lg hover:bg-background/10 transition-colors"
                      >
                        <span className="text-background/80 group-hover:text-background transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Who We Serve */}
            <div className="p-8 bg-background/5">
              <h3 className="text-gradient font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                Who We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {stakeholders.map((stakeholder, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg bg-background/5 hover:bg-background/10 transition-colors group cursor-default"
                  >
                    <stakeholder.icon className="h-4 w-4 text-coral" />
                    <span className="text-sm text-background/70 group-hover:text-background transition-colors">
                      {stakeholder.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* View All Link */}
              <Link
                to="/services"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-coral/80 transition-colors"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
