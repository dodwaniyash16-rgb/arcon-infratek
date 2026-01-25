import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Layers, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
const metrics = [{
  icon: Clock,
  value: "24-72 hrs",
  label: "Turnaround Options"
}, {
  icon: Layers,
  value: "Multi-Discipline",
  label: "Arch + Struct + MEPF"
}, {
  icon: Globe,
  value: "Global",
  label: "Time-Zone Coverage"
}, {
  icon: Shield,
  value: "QA-First",
  label: "Audit-Ready Outputs"
}];
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get ALL project images for the slideshow
  const projectImages = projects.map(p => p.image).filter(img => img && img !== "/placeholder.svg");
  useEffect(() => {
    if (projectImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectImages.length]);
  return <section className="relative pt-24 pb-40 lg:pt-28 lg:pb-56">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 py-[20px] mx-0">
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
          </div>

          {/* Right Image Slideshow */}
          <div className="relative animate-fade-in-delay-2 flex items-center justify-center">
            <div className="hero-image-container w-full max-w-[900px] h-[400px] lg:h-[480px] relative overflow-hidden">
              {projectImages.map((image, index) => <img key={index} src={image} alt={`BIM Project ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;