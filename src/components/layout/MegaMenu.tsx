import { Link } from "react-router-dom";
import { ArrowRight, Building2, HardHat, Briefcase, Building, Landmark, Settings, Ruler, Pencil, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
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
      { label: "BIM Project Management", href: "/services/bim-project-management" },
      { label: "VDC & BIM Consulting", href: "/services/vdc-bim-consulting" },
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
      { label: "MEP BIM Services", href: "/services/mep-bim" },
      { label: "Structural BIM", href: "/services/structural-bim" },
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
    <div className="absolute top-full left-0 right-0 pt-1">
      <div className="container-custom">
        <div className="bg-slate-800 text-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-3 divide-x divide-white/10">
            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index} className="p-6">
                <h3 className="text-gradient font-heading font-semibold mb-4 text-xs uppercase tracking-wider">
                  {category.title}
                </h3>
                <ul className="space-y-0.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-2 px-3 -mx-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Who We Serve */}
            <div className="p-6 bg-white/5">
              <h3 className="text-gradient font-heading font-semibold mb-4 text-xs uppercase tracking-wider">
                Who We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {stakeholders.map((stakeholder, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-default"
                  >
                    <stakeholder.icon className="h-3.5 w-3.5 text-coral" />
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                      {stakeholder.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* View All Link */}
              <Link
                to="/services"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-coral/80 transition-colors"
              >
                View All Services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
