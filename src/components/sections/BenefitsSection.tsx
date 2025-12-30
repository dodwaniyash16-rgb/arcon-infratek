import { LucideIcon, Eye, Users, DollarSign, Layers, FileText, Shield, CheckCircle, Settings } from "lucide-react";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitItem[];
}

const defaultBenefits: BenefitItem[] = [
  {
    icon: Eye,
    title: "Enhanced Visualization",
    description: "Immersive 3D models for better design understanding and stakeholder communication."
  },
  {
    icon: Users,
    title: "Improved Collaboration",
    description: "Seamless coordination between architects, engineers, and contractors."
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Reduce rework and material waste with accurate quantity takeoffs."
  },
  {
    icon: Layers,
    title: "Better Coordination",
    description: "Clash-free designs through multi-discipline model coordination."
  },
  {
    icon: FileText,
    title: "Accurate Documentation",
    description: "Consistent, error-free construction documents extracted from models."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify and resolve issues in the virtual environment before construction."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous QA/QC processes ensure model accuracy and compliance."
  },
  {
    icon: Settings,
    title: "Lifecycle Support",
    description: "BIM models that support facility management and future renovations."
  },
];

const BenefitsSection = ({ 
  title = "Why Choose Us", 
  subtitle = "Our commitment to excellence delivers measurable value to every project.",
  benefits = defaultBenefits 
}: BenefitsSectionProps) => {
  return (
    <section className="py-20 section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Our Benefits</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gradient-brand transition-all duration-300">
                <benefit.icon className="h-6 w-6 icon-gradient group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white]" />
              </div>
              <h3 className="font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
