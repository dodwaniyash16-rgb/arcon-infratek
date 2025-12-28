import { Link } from "react-router-dom";
import { ArrowRight, Play, Clock, Layers, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    icon: Clock,
    value: "24-72 hrs",
    label: "Turnaround Options",
  },
  {
    icon: Layers,
    value: "Multi-Discipline",
    label: "Arch + Struct + MEPF",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Time-Zone Coverage",
  },
  {
    icon: Shield,
    value: "QA-First",
    label: "Audit-Ready Outputs",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge Pill */}
            <div className="badge-pill animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>BIM & VDC Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-delay-1">
              BIM and VDC delivery that is{" "}
              <span className="text-gradient">fast, accurate, and accountable.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-delay-2">
              Arcon Infratek supports global AEC teams with Revit-based modeling, 
              coordination, shop drawings, estimation, and BIM auditing. Clear standards, 
              rigorous QA, and reliable turnaround.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-delay-3">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Inline Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center md:text-left">
                  <metric.icon className="h-5 w-5 icon-gradient mx-auto md:mx-0 mb-2" />
                  <div className="font-heading font-semibold text-sm">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-delay-2">
            <div className="hero-image-container aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="BIM Construction Project"
                className="w-full h-full object-cover"
              />
              {/* Video Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-foreground fill-foreground ml-1" />
                </div>
              </button>
            </div>
            {/* Watch Video Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background px-4 py-2 rounded-full shadow-md border border-border">
              <span className="text-sm font-medium">Watch Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
