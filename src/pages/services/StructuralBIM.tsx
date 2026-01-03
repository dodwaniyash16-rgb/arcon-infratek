import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import structuralBimHero from "@/assets/services/structural-bim-hero.png";

const heroImage = structuralBimHero;
const features = [
  "Steel Structure Modeling",
  "Concrete Structure Modeling",
  "Timber & Mass Timber",
  "Connection Detailing",
  "Rebar Modeling & Scheduling",
  "Structural Shop Drawings",
];

const capabilities = [
  {
    title: "Steel Structures",
    description: "Complete steel modeling with connections, bolts, welds, and fabrication-ready details.",
  },
  {
    title: "Concrete Systems",
    description: "Cast-in-place and precast modeling with rebar detailing and pour sequences.",
  },
  {
    title: "Foundation Systems",
    description: "Pile caps, spread footings, mat foundations, and grade beam modeling.",
  },
  {
    title: "Connection Details",
    description: "Precise connection modeling for constructability and clash-free coordination.",
  },
];

const StructuralBIM = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Structural{" "}
                <span className="text-gradient">BIM Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Precise structural modeling for steel, concrete, and timber systems 
                with fabrication-ready details and complete coordination.
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
                alt="Structural BIM Services" 
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
                Complete structural <span className="text-gradient">solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From foundations to roof framing, we deliver structural models 
                ready for coordination, fabrication, and construction.
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

      {/* Capabilities Detail */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Expertise</p>
            <h2 className="font-heading text-3xl font-bold">
              Structural system <span className="text-gradient">specializations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border">
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to start your structural BIM project?
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

export default StructuralBIM;
