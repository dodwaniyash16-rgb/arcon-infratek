import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero image - replace with your own image path
const heroImage = "/placeholder.svg";
const features = [
  "Project Coordination",
  "Model Management",
  "Clash Detection & Resolution",
  "Stakeholder Collaboration",
  "Progress Tracking",
  "Quality Assurance",
];

const services = [
  {
    title: "Coordination Management",
    description: "Lead multi-discipline coordination meetings and resolve clashes efficiently.",
  },
  {
    title: "Model Administration",
    description: "Central model management, version control, and access administration.",
  },
  {
    title: "QA/QC Programs",
    description: "Implement quality assurance processes to maintain model accuracy and standards.",
  },
  {
    title: "Reporting & Analytics",
    description: "Regular progress reports, KPI tracking, and project health dashboards.",
  },
];

const BIMProjectManagement = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                BIM Project{" "}
                <span className="text-gradient">Management</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                End-to-end project coordination, model management, and stakeholder 
                collaboration to ensure BIM success on your projects.
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
                alt="BIM Project Management Services" 
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
                Complete project <span className="text-gradient">oversight</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We provide the leadership and expertise needed to keep your 
                BIM projects on track, coordinated, and delivering value.
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

      {/* Services Detail */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">What We Provide</p>
            <h2 className="font-heading text-3xl font-bold">
              Management <span className="text-gradient">services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, index) => (
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
            Need BIM leadership for your project?
          </h2>
          <Button size="lg" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BIMProjectManagement;
