import { Building2, Home, Stethoscope, Hotel, GraduationCap, Factory, Landmark, ShoppingBag } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface IndustryItem {
  icon: LucideIcon;
  name: string;
}

interface IndustriesSectionProps {
  title?: string;
  subtitle?: string;
  industries?: IndustryItem[];
}

const defaultIndustries: IndustryItem[] = [
  { icon: Building2, name: "Commercial" },
  { icon: Home, name: "Residential" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Hotel, name: "Hospitality" },
  { icon: GraduationCap, name: "Education" },
  { icon: Factory, name: "Industrial" },
  { icon: Landmark, name: "Infrastructure" },
  { icon: ShoppingBag, name: "Retail" },
];

const IndustriesSection = ({ 
  title = "Industries We Serve", 
  subtitle = "Delivering BIM excellence across diverse sectors with tailored solutions.",
  industries = defaultIndustries 
}: IndustriesSectionProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-4">Sectors</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-full border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <industry.icon className="h-5 w-5 icon-gradient" />
              <span className="font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
