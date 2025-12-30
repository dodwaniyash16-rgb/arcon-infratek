import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceScopeTabs from "@/components/sections/ServiceScopeTabs";
import ProcessWorkflow from "@/components/sections/ProcessWorkflow";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import IndustriesSection from "@/components/sections/IndustriesSection";
import RelatedServicesSection from "@/components/sections/RelatedServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAStrip from "@/components/ui/cta-strip";

const serviceScopes = [
  {
    id: "architectural-cad",
    title: "Architectural CAD",
    description: "Precise 2D architectural drawings including floor plans, elevations, sections, and details.",
    features: [
      "Floor Plans & Layouts",
      "Building Elevations",
      "Wall Sections & Details",
      "Door & Window Schedules",
      "Finish Plans",
      "Reflected Ceiling Plans",
    ],
  },
  {
    id: "structural-cad",
    title: "Structural CAD",
    description: "Detailed structural drafting for steel, concrete, and timber construction.",
    features: [
      "Foundation Plans",
      "Framing Plans",
      "Connection Details",
      "Reinforcement Drawings",
      "Steel Fabrication Details",
      "Structural Sections",
    ],
  },
  {
    id: "mep-cad",
    title: "MEP CAD",
    description: "Comprehensive mechanical, electrical, and plumbing drafting for building systems.",
    features: [
      "HVAC Layouts",
      "Electrical Plans",
      "Plumbing Risers",
      "Equipment Schedules",
      "Single Line Diagrams",
      "Isometric Details",
    ],
  },
  {
    id: "civil-cad",
    title: "Civil CAD",
    description: "Site development and civil engineering drawings for infrastructure projects.",
    features: [
      "Site Plans",
      "Grading Plans",
      "Utility Layouts",
      "Road Profiles",
      "Drainage Details",
      "Survey Conversion",
    ],
  },
  {
    id: "cad-conversion",
    title: "CAD Conversion",
    description: "Digitization and conversion of legacy drawings, sketches, and PDFs to CAD format.",
    features: [
      "PDF to CAD Conversion",
      "Paper Drawing Digitization",
      "Legacy File Migration",
      "Format Conversion",
      "Layer Standardization",
      "Redline Updates",
    ],
  },
];

const faqs = [
  {
    question: "What CAD software do you use?",
    answer: "We work primarily in AutoCAD and AutoCAD LT, with capabilities in specialized platforms like Civil 3D for civil engineering and AutoCAD MEP for building systems. We deliver in all standard formats including DWG, DXF, and PDF.",
  },
  {
    question: "Can you match our CAD standards and templates?",
    answer: "Absolutely. We work with your company's CAD standards, layer naming conventions, title blocks, and templates. If you don't have established standards, we can recommend and implement industry best practices.",
  },
  {
    question: "What is your typical turnaround for CAD drafting?",
    answer: "Turnaround depends on drawing complexity and quantity. Simple floor plans typically take 1-2 days, while complex detail packages may require 1-2 weeks. We offer expedited services for urgent deadlines.",
  },
  {
    question: "Do you offer redline and revision services?",
    answer: "Yes, we provide quick-turnaround redline incorporation and revision services. Whether you have marked-up prints or digital comments, we can update drawings efficiently and track revision history.",
  },
  {
    question: "Can you convert our paper drawings to digital CAD?",
    answer: "Yes, our CAD conversion services transform paper drawings, scanned documents, and PDFs into fully editable CAD files. We maintain accuracy while organizing content into proper layers and blocks.",
  },
  {
    question: "How does CAD drafting compare to BIM modeling?",
    answer: "CAD drafting produces 2D drawings ideal for smaller projects, quick documentation, or when 3D models aren't required. BIM modeling creates intelligent 3D models with embedded data, better suited for complex projects requiring coordination, quantities, or lifecycle management. We help clients choose the right approach for each project.",
  },
];

const CADDrafting = () => {
  useEffect(() => {
    document.title = "CAD Drafting Services | Arcon Infratek - 2D Documentation";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">CAD Drafting</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Professional</span> CAD drafting services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Accurate, standards-compliant 2D drafting across all disciplines. 
                From architectural floor plans to MEP layouts, we deliver precise 
                documentation that meets your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Samples</Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl aspect-video flex items-center justify-center">
              <Pencil className="h-24 w-24 icon-gradient opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Precision Drafting for Every Discipline
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Quality 2D drawings remain essential for construction documentation, permit 
              submissions, and project communication. Our experienced drafters produce 
              accurate, well-organized CAD drawings that meet industry standards and 
              your specific project requirements.
            </p>
            <p className="text-muted-foreground text-center">
              Whether you need new drawings, redline revisions, or conversion of legacy 
              documents, we deliver reliable CAD services with quick turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="CAD Drafting Disciplines"
        subtitle="Professional drafting across architectural, structural, MEP, and civil disciplines."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="CAD Documentation Projects"
        subtitle="See examples of our drafting work across various sectors."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="CAD Drafting" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Need professional CAD drafting?"
        description="Get accurate drawings from our experienced team."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Samples", href: "/portfolio" }}
      />
    </Layout>
  );
};

export default CADDrafting;
