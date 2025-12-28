import { Shield, Target, Zap, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous QA/QC processes ensure every deliverable meets the highest standards.",
  },
  {
    icon: Target,
    title: "Precision Modeling",
    description: "Accurate modeling with attention to detail for clash-free coordination.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient workflows enable rapid delivery without compromising quality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable scheduling and milestone tracking for predictable project outcomes.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced professionals assigned to your project for seamless communication.",
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Compliance with international BIM standards and best practices.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="section-label mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Built for teams that value{" "}
              <span className="text-gradient">precision</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine technical expertise with a client-first approach, 
              ensuring your BIM and VDC needs are met with excellence and efficiency.
            </p>
            
            {/* Feature Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-secondary to-card rounded-xl flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <p className="text-muted-foreground">BIM/VDC Project Visualization</p>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary mb-3">
                  <feature.icon className="h-5 w-5 icon-gradient" />
                </div>
                <h3 className="font-heading font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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
