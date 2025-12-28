const features = [
  {
    title: "Standards-driven output",
    description: "Your naming, families, views, sheets, and QA rules are followed consistently across every deliverable.",
  },
  {
    title: "Communication that does not slow projects",
    description: "Clear daily or milestone updates, issue logs, and quick turnarounds with minimal back-and-forth.",
  },
  {
    title: "Coordination-first mindset",
    description: "Models built for downstream use: coordination, documentation, estimating, and fabrication.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          {/* Section Header */}
          <p className="section-label mb-4">Why Arcon Infratek</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Built for teams that value{" "}
            <span className="text-gradient">precision.</span>
          </h2>

          {/* Features - Text blocks only, no icons */}
          <div className="space-y-10">
            {features.map((feature, index) => (
              <div key={index} className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
