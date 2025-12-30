import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero image - replace with your own image path
const heroImage = "/placeholder.svg";
const features = [
  "Point Cloud Processing",
  "Scan to BIM Conversion",
  "As-Built Documentation",
  "Existing Conditions Modeling",
  "Renovation Support",
  "Facility Management Integration",
];

const process = [
  {
    step: "01",
    title: "Data Collection",
    description: "We receive your point cloud data or coordinate laser scanning services.",
  },
  {
    step: "02",
    title: "Processing & Registration",
    description: "Point cloud processing, noise removal, and registration to project coordinates.",
  },
  {
    step: "03",
    title: "BIM Modeling",
    description: "Accurate 3D modeling of existing conditions from processed scan data.",
  },
  {
    step: "04",
    title: "QA & Delivery",
    description: "Quality assurance validation and delivery in your preferred format.",
  },
];

const AsBuiltBIM = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                As-Built BIM &{" "}
                <span className="text-gradient">Scan to BIM</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Accurate as-built documentation from point cloud data and existing 
                conditions surveys for renovation and facility management projects.
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
                alt="As-Built BIM Services" 
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
                Precision as-built <span className="text-gradient">modeling</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We transform point cloud data into accurate, usable BIM models 
                for renovation, facility management, and capital planning.
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

      {/* Process */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Our Process</p>
            <h2 className="font-heading text-3xl font-bold">
              From scan to <span className="text-gradient">model</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-4">{item.step}</div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Have point cloud data that needs modeling?
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

export default AsBuiltBIM;
