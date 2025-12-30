import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
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
    id: "architectural",
    title: "Architectural",
    description: "Comprehensive architectural BIM modeling from concept through construction documentation, delivering coordination-ready models at any Level of Development (LOD).",
    features: [
      "LOD 100-500 Architectural Models",
      "3D Visualization & Rendering",
      "Construction Documentation",
      "Revit Family Creation",
      "Interior Design Modeling",
      "Facade Development",
    ],
  },
  {
    id: "structural",
    title: "Structural",
    description: "Precise structural BIM modeling for steel, concrete, timber, and hybrid structures with accurate connection details and fabrication-ready outputs.",
    features: [
      "Steel Structure Modeling",
      "Reinforced Concrete Modeling",
      "Rebar Detailing",
      "Precast Concrete Elements",
      "Connection Detailing",
      "Structural Analysis Integration",
    ],
  },
  {
    id: "mep",
    title: "MEP",
    description: "Multi-discipline mechanical, electrical, and plumbing BIM modeling with clash-free coordination and detailed system documentation.",
    features: [
      "HVAC System Modeling",
      "Electrical Systems & Lighting",
      "Plumbing & Piping",
      "Fire Protection Systems",
      "Equipment Scheduling",
      "MEP Coordination",
    ],
  },
  {
    id: "facade",
    title: "Facade",
    description: "Detailed facade and curtain wall modeling with precise geometric definitions and panel scheduling for complex building envelopes.",
    features: [
      "Curtain Wall Systems",
      "Panel Optimization",
      "Mullion Detailing",
      "Shop Drawing Extraction",
      "Quantity Takeoffs",
      "Installation Sequencing",
    ],
  },
  {
    id: "landscape",
    title: "Landscape",
    description: "Site and landscape BIM modeling including terrain, hardscape, softscape, and civil elements integrated with building models.",
    features: [
      "Terrain Modeling",
      "Hardscape Design",
      "Irrigation Systems",
      "Site Grading",
      "Planting Plans",
      "Site Coordination",
    ],
  },
];

const faqs = [
  {
    question: "What is the typical turnaround time for BIM modeling projects?",
    answer: "Turnaround times vary based on project complexity and scope. Simple residential projects may take 5-7 business days, while complex commercial projects typically require 2-4 weeks. For urgent requirements, we offer expedited delivery within 24-72 hours for qualifying projects.",
  },
  {
    question: "Which Level of Development (LOD) is right for my project?",
    answer: "The appropriate LOD depends on your project phase and intended use. LOD 200-300 is suitable for design development and coordination, LOD 350-400 for construction and fabrication, and LOD 500 for as-built documentation. We'll help you determine the optimal LOD during our initial consultation.",
  },
  {
    question: "Can you work with our existing CAD or Revit files?",
    answer: "Absolutely. We regularly work with legacy CAD files, PDFs, sketches, and existing Revit models. Our team can convert 2D drawings to 3D BIM, upgrade models to higher LOD levels, or continue development on in-progress projects.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver in all major industry formats including Revit (.rvt), AutoCAD (.dwg), IFC, Navisworks (.nwc/.nwd), and PDF. We can also provide custom exports based on your project requirements and software preferences.",
  },
  {
    question: "How do you ensure model quality and accuracy?",
    answer: "We follow a rigorous QA/QC process including multi-level reviews, clash detection, model auditing, and compliance checks against industry standards (BIM Forum LOD Spec, AIA guidelines). Every project undergoes senior review before delivery.",
  },
  {
    question: "Do you offer clash detection as part of the service?",
    answer: "Yes, multi-discipline clash detection and resolution is included in our coordination services. We use Navisworks and BIM 360 to identify, categorize, and resolve clashes, providing detailed coordination reports for your project team.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse sectors including commercial, residential, healthcare, hospitality, education, industrial, infrastructure, and retail. Our team has specialized experience in sector-specific requirements and compliance standards.",
  },
  {
    question: "How quickly can I get a quote for my project?",
    answer: "We typically provide detailed quotes within 24-48 hours of receiving your project documentation. For straightforward projects, same-day quotes are possible. Contact us with your project details for a prompt response.",
  },
];

const BIMModeling = () => {
  useEffect(() => {
    document.title = "BIM Modeling Services | Arcon Infratek - LOD 100-500 BIM Solutions";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">BIM Modeling Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Precision-driven</span> BIM modeling for seamless project delivery
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From architectural concepts to fabrication-ready models, we deliver high-quality 
                BIM solutions across all disciplines. Our expert team ensures accurate, 
                coordinated, and compliant models that drive project success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl aspect-video flex items-center justify-center">
              <Building2 className="h-24 w-24 icon-gradient opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Comprehensive BIM Modeling Across All Disciplines
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              At Arcon Infratek, we specialize in creating detailed, accurate BIM models that serve as the 
              single source of truth throughout your project lifecycle. Our multi-discipline expertise 
              enables seamless coordination between architectural, structural, and MEP systems, reducing 
              conflicts and accelerating construction timelines.
            </p>
            <p className="text-muted-foreground text-center">
              Whether you need conceptual massing at LOD 100 or fabrication-ready models at LOD 400, 
              our experienced team delivers production-grade outputs with industry-leading turnaround times.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Our BIM Modeling Expertise"
        subtitle="Explore our specialized modeling capabilities across all building disciplines."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Projects Across the Globe"
        subtitle="Explore our portfolio of successful BIM modeling implementations."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="BIM Modeling" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Ready to start your BIM modeling project?"
        description="Get in touch with our experts for a personalized consultation and project quote."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCTA={{ text: "Download Brochure", href: "/insights/brochures" }}
      />
    </Layout>
  );
};

export default BIMModeling;
