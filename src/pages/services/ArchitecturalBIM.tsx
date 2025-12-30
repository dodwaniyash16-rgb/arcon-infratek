import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero image - replace with your own image path
const heroImage = "/placeholder.svg";
const features = [
  "LOD 100-500 Modeling",
  "3D Visualization & Rendering",
  "Construction Documentation",
  "Coordination-Ready Models",
  "Design Development Support",
  "Revit Family Creation",
];

const lodLevels = [
  { level: "LOD 100", description: "Conceptual massing and spatial relationships" },
  { level: "LOD 200", description: "Generic placeholders with approximate dimensions" },
  { level: "LOD 300", description: "Specific elements with accurate geometry" },
  { level: "LOD 350", description: "Construction-level detail with connections" },
  { level: "LOD 400", description: "Fabrication-ready with assembly details" },
  { level: "LOD 500", description: "As-built verified field conditions" },
];

const ArchitecturalBIM = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Architectural{" "}
                <span className="text-gradient">BIM Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                High-quality architectural modeling from concept through construction, 
                delivered with precision and coordination-ready accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl aspect-video overflow-hidden">
              <img 
                src={heroImage} 
                alt="Architectural BIM Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Capabilities</p>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Full-spectrum architectural <span className="text-gradient">modeling</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From early design concepts to construction documentation, we deliver 
                architectural models that drive project success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOD Levels */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Level of Development</p>
            <h2 className="font-heading text-3xl font-bold">
              From concept to <span className="text-gradient">as-built</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lodLevels.map((lod, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <div className="text-2xl font-bold text-gradient mb-2">{lod.level}</div>
                <p className="text-muted-foreground">{lod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to start your architectural BIM project?
          </h2>
          <Button size="lg" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ArchitecturalBIM;
