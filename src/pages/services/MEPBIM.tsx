import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mepBimHero from "@/assets/services/mep-bim-hero.png";

const heroImage = mepBimHero;
const features = [
  "HVAC System Modeling",
  "Plumbing & Piping",
  "Electrical Systems",
  "Fire Protection",
  "MEP Coordination",
  "Shop Drawing Production",
];

const disciplines = [
  {
    title: "Mechanical",
    description: "HVAC ductwork, equipment, piping, and controls with full coordination.",
  },
  {
    title: "Electrical",
    description: "Power distribution, lighting, cable trays, and equipment layouts.",
  },
  {
    title: "Plumbing",
    description: "Domestic water, sanitary, storm drainage, and specialty piping systems.",
  },
  {
    title: "Fire Protection",
    description: "Sprinkler systems, standpipes, and fire pump room layouts.",
  },
];

const MEPBIM = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                MEP{" "}
                <span className="text-gradient">BIM Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive mechanical, electrical, and plumbing modeling with 
                clash-free coordination and fabrication-ready documentation.
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
                alt="MEP BIM Services" 
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
                Full MEP system <span className="text-gradient">coverage</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From design assist through fabrication, we deliver coordinated 
                MEP models that reduce field conflicts and accelerate installation.
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

      {/* Disciplines */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Disciplines</p>
            <h2 className="font-heading text-3xl font-bold">
              Multi-discipline <span className="text-gradient">expertise</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {disciplines.map((item, index) => (
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
            Ready to coordinate your MEP systems?
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

export default MEPBIM;
