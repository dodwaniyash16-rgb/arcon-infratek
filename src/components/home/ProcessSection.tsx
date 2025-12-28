const steps = [
  {
    number: "01",
    title: "Discover and align",
    description: "We review your scope, standards, and timelines to understand exactly what you need.",
  },
  {
    number: "02", 
    title: "Execution plan and setup",
    description: "We establish workflows, templates, and QA checkpoints tailored to your project.",
  },
  {
    number: "03",
    title: "Production and coordination",
    description: "Our team executes modeling, coordination, and documentation with consistent updates.",
  },
  {
    number: "04",
    title: "QA and handover",
    description: "Rigorous quality checks before delivery, with support through project closeout.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Steps */}
          <div>
            <p className="section-label mb-4">Our Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              A delivery process your team can{" "}
              <span className="text-gradient">trust.</span>
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-xl hover:bg-background transition-colors"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-heading font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="hero-image-container aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Construction Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
