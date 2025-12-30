import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceScopeTabs from "@/components/sections/ServiceScopeTabs";
import ProcessWorkflow from "@/components/sections/ProcessWorkflow";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import IndustriesSection from "@/components/sections/IndustriesSection";
import RelatedServicesSection from "@/components/sections/RelatedServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAStrip from "@/components/ui/cta-strip";

// Hero image - replace with your own image path
const heroImage = "/placeholder.svg";
const serviceScopes = [
  {
    id: "model-audit",
    title: "Model Auditing",
    description: "Comprehensive review of BIM models against project standards, industry specifications, and best practices.",
    features: [
      "Standards Compliance Check",
      "Model Structure Analysis",
      "Element Accuracy Review",
      "Naming Convention Audit",
      "Workset Organization",
      "File Performance Assessment",
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control",
    description: "Systematic QA/QC processes to ensure model accuracy, completeness, and readiness for downstream use.",
    features: [
      "Geometric Accuracy Checks",
      "Data Completeness Review",
      "Clash-Free Verification",
      "Parameter Validation",
      "Drawing Extraction Test",
      "Issue Tracking & Resolution",
    ],
  },
  {
    id: "standards-review",
    title: "Standards Review",
    description: "Evaluation of BIM models against BEP requirements, LOD specifications, and client-specific standards.",
    features: [
      "BEP Compliance",
      "LOD Verification",
      "Classification Checks",
      "Property Set Validation",
      "Export Format Testing",
      "Handover Readiness",
    ],
  },
  {
    id: "model-health",
    title: "Model Health Check",
    description: "Technical assessment of model performance, identifying issues that impact speed and collaboration.",
    features: [
      "File Size Analysis",
      "Warning & Error Review",
      "Link Management",
      "Family Optimization",
      "View Template Audit",
      "Performance Recommendations",
    ],
  },
];

const faqs = [
  {
    question: "What is a BIM model audit?",
    answer: "A BIM model audit is a systematic review of your BIM models against established standards, project requirements, and industry best practices. It identifies issues with model structure, data quality, performance, and compliance that could impact downstream use for coordination, documentation, or facility management.",
  },
  {
    question: "When should we conduct a model audit?",
    answer: "Model audits are most valuable at key project milestones: before coordination, prior to deliverable submissions, at design phase transitions, and before handover. Regular audits during production help catch issues early when they're easier to resolve.",
  },
  {
    question: "What standards do you audit against?",
    answer: "We audit against your project's BIM Execution Plan, LOD specifications (BIM Forum), owner requirements, and industry standards like IFC, COBie, and regional BIM mandates (UK BIM Framework, Singapore BIM Guide, etc.). We can also evaluate against custom client standards.",
  },
  {
    question: "How do you report audit findings?",
    answer: "We provide detailed audit reports including issue categorization by severity, specific element identification, screenshot documentation, and recommended resolutions. Reports can be delivered in Excel, PDF, or through coordination platforms like BIM 360.",
  },
  {
    question: "Can you fix issues identified in the audit?",
    answer: "Yes, we offer model remediation services to address issues identified during audits. We can clean up model structure, correct data errors, optimize performance, and bring models into compliance with project standards.",
  },
  {
    question: "What tools do you use for auditing?",
    answer: "We use a combination of Solibri Model Checker, Navisworks, Revit's built-in tools, and custom scripts for comprehensive audits. Tool selection depends on your project's software environment and specific audit requirements.",
  },
];

const BIMAuditing = () => {
  useEffect(() => {
    document.title = "BIM Auditing & Quality Control | Arcon Infratek - Model Compliance";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">BIM Auditing</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Quality assurance</span> for your BIM models
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Ensure your BIM models meet project standards, perform efficiently, 
                and deliver reliable outputs. Our comprehensive auditing services 
                identify issues before they impact your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request an Audit
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
                alt="BIM Auditing Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Confidence in Your Model Quality
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              BIM models are only as valuable as their accuracy and compliance. Our auditing 
              services provide objective assessment of your models against project requirements, 
              industry standards, and best practices—identifying issues that could impact 
              coordination, documentation, and downstream use.
            </p>
            <p className="text-muted-foreground text-center">
              From quick health checks to comprehensive compliance audits, we help project 
              teams maintain model quality throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Auditing Services"
        subtitle="Comprehensive quality assurance for every aspect of your BIM models."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Quality Assured Projects"
        subtitle="See how our auditing services have improved project outcomes."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="BIM Auditing" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Need your models audited?"
        description="Get a comprehensive quality assessment today."
        primaryCTA={{ text: "Request an Audit", href: "/contact" }}
        secondaryCTA={{ text: "Download Checklist", href: "/insights/brochures" }}
      />
    </Layout>
  );
};

export default BIMAuditing;
