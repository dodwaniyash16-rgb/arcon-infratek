import { MessageSquare, FileSearch, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We start by understanding your project requirements, timelines, and specific BIM needs to create a tailored approach.",
  },
  {
    icon: FileSearch,
    number: "02", 
    title: "Assessment & Planning",
    description: "Our team analyzes your existing data, identifies coordination challenges, and develops a comprehensive execution plan.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Modeling & Coordination",
    description: "Expert modelers create detailed BIM deliverables while our coordinators ensure clash-free integration across disciplines.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Delivery & Support",
    description: "We deliver quality-assured models with full documentation, plus ongoing support to ensure project success.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            A delivery process your team can{" "}
            <span className="text-gradient">trust</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven methodology ensures consistent quality and predictable outcomes 
            on every project we undertake.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-background p-6 rounded-xl border border-border"
            >
              {/* Step Number */}
              <div className="text-5xl font-heading font-bold text-gradient opacity-30 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary mb-4">
                <step.icon className="h-5 w-5 icon-gradient" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-brand" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
