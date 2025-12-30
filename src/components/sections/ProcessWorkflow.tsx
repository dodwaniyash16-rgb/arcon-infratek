import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Settings, Layers, AlertTriangle, FileText, CheckSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessWorkflowProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  showCTA?: boolean;
}

const defaultSteps: ProcessStep[] = [
  {
    icon: FileSearch,
    title: "Project Intake & Analysis",
    description: "We review your requirements, existing documentation, and project scope to create a tailored approach."
  },
  {
    icon: Settings,
    title: "BIM Setup & Standards",
    description: "Establishing project standards, templates, and coordination protocols aligned with your BEP."
  },
  {
    icon: Layers,
    title: "3D Model Development",
    description: "Creating accurate, coordinated BIM models to the specified Level of Development (LOD)."
  },
  {
    icon: AlertTriangle,
    title: "Clash Detection & Resolution",
    description: "Multi-discipline coordination to identify and resolve conflicts before construction."
  },
  {
    icon: FileText,
    title: "Documentation & Extraction",
    description: "Generating construction documents, schedules, and quantity takeoffs from the model."
  },
  {
    icon: CheckSquare,
    title: "QA/QC & Validation",
    description: "Rigorous quality checks to ensure model accuracy and compliance with standards."
  },
  {
    icon: Send,
    title: "Final Delivery & Support",
    description: "Delivering coordinated models with ongoing support for project success."
  },
];

const ProcessWorkflow = ({ 
  title = "Our Process", 
  subtitle = "A proven workflow designed for accuracy, efficiency, and seamless collaboration.",
  steps = defaultSteps,
  showCTA = true
}: ProcessWorkflowProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">How We Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className={`bg-background p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-md`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        <step.icon className="h-6 w-6 icon-gradient" />
                      </div>
                      <span className="text-4xl font-bold text-muted-foreground/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-brand" />
              </div>
            ))}
          </div>
        </div>
        
        {showCTA && (
          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessWorkflow;
