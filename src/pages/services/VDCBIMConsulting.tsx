import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero image - replace with your own image path
const heroImage = "/placeholder.svg";
const features = [
  "BIM Execution Plan (BEP) Development",
  "Workflow Optimization & Standardization",
  "Technology Stack Assessment",
  "Team Training & Upskilling",
  "Process Audit & Improvement",
  "ROI Analysis & Reporting",
];

const deliverables = [
  {
    icon: FileText,
    title: "BIM Execution Plans",
    description: "Comprehensive documentation defining project BIM standards, workflows, and deliverables.",
  },
  {
    icon: Target,
    title: "Strategic Roadmaps",
    description: "Tailored implementation plans aligned with your business goals and project requirements.",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Hands-on training sessions to upskill your team on BIM tools and workflows.",
  },
];

const VDCBIMConsulting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                VDC & BIM{" "}
                <span className="text-gradient">Consulting</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Strategic BIM implementation, execution planning, and workflow 
                optimization tailored to your organization's needs and project goals.
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
                alt="VDC & BIM Consulting Services" 
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
              <p className="section-label mb-4">What We Offer</p>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Comprehensive consulting <span className="text-gradient">services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We help organizations implement BIM effectively, from strategy 
                development to execution and continuous improvement.
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

      {/* Deliverables */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Deliverables</p>
            <h2 className="font-heading text-3xl font-bold">
              What you'll <span className="text-gradient">receive</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
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
            Ready to optimize your BIM workflow?
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

export default VDCBIMConsulting;
