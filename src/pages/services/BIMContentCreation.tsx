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
    id: "revit-families",
    title: "Revit Families",
    description: "Custom parametric Revit families designed for your specific project and organizational needs.",
    features: [
      "Parametric Flexibility",
      "Type Catalogs",
      "Shared Parameters",
      "Scheduling Capabilities",
      "LOD Compliance",
      "Performance Optimization",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "manufacturer-content",
    title: "Manufacturer Content",
    description: "Product-specific BIM content for manufacturers seeking to support specifiers and contractors.",
    features: [
      "Product Families",
      "Multiple Format Export",
      "Specification Data",
      "Installation Details",
      "Maintenance Information",
      "Marketing Visualization",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "template-development",
    title: "Template Development",
    description: "Custom Revit templates and standards packages for consistent, efficient project delivery.",
    features: [
      "Project Templates",
      "View Templates",
      "Family Libraries",
      "Annotation Families",
      "Title Blocks",
      "Standard Details",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "dynamo-scripts",
    title: "Dynamo & Automation",
    description: "Custom automation tools and scripts to streamline repetitive BIM tasks and improve productivity.",
    features: [
      "Dynamo Scripts",
      "Automated Workflows",
      "Data Exchange Tools",
      "Quality Check Scripts",
      "Schedule Generation",
      "Reporting Automation",
    ],
    // Add your image path here
    image: "",
  },
];

const faqs = [
  {
    question: "What makes a good Revit family?",
    answer: "A good Revit family is parametric (flexible dimensions and configurations), lightweight (optimized geometry), properly nested (uses shared families efficiently), and data-rich (includes necessary parameters for scheduling and specifications). Our families are built following best practices for performance and usability.",
  },
  {
    question: "Can you create families from manufacturer product data?",
    answer: "Yes, we regularly create Revit families from manufacturer catalogs, CAD drawings, and specifications. We work with product teams to ensure accurate representation and include relevant technical data for specifiers.",
  },
  {
    question: "How do you ensure family performance?",
    answer: "We follow strict optimization practices: appropriate detail levels, efficient geometry, minimized nested families, and clean parameter structures. All families are tested for file size impact and rendering performance before delivery.",
  },
  {
    question: "What LOD do you build families to?",
    answer: "We build families to the LOD appropriate for their intended use. Most general families support LOD 100-300 with level of detail visibility controls. Fabrication-focused families can be developed to LOD 400 with precise geometry.",
  },
  {
    question: "Can you create families for other BIM platforms?",
    answer: "While Revit families are our specialty, we also create content for ArchiCAD (GDL objects), SketchUp, and IFC-compatible formats. Contact us to discuss your specific platform requirements.",
  },
  {
    question: "Do you provide ongoing family library maintenance?",
    answer: "Yes, we offer library management services including family updates for new Revit versions, standard enforcement, and ongoing content development to support your project needs.",
  },
];

const BIMContentCreation = () => {
  useEffect(() => {
    document.title = "BIM Content Creation | Arcon Infratek - Revit Families & Libraries";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">BIM Content Creation</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Custom</span> Revit families & BIM libraries
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                High-quality, parametric BIM content that enhances model accuracy 
                and project efficiency. From custom families to complete library 
                development, we create content that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Discuss Your Needs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Samples</Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl aspect-video overflow-hidden">
              <img 
                src={heroImage} 
                alt="BIM Content Creation Services" 
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
              Building Blocks for Better BIM
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Quality BIM content is the foundation of efficient modeling. Whether you need 
              custom Revit families for a specific project, manufacturer content for product 
              marketing, or standardized libraries for your organization, our content creation 
              services deliver parametric, performant, and data-rich components.
            </p>
            <p className="text-muted-foreground text-center">
              We also develop Dynamo scripts and automation tools to streamline repetitive 
              tasks and maximize your team's productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Content Development Services"
        subtitle="Custom BIM content for projects, products, and organizations."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Content Creation Portfolio"
        subtitle="Examples of custom families and libraries we've developed."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="BIM Content Creation" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Need custom BIM content?"
        description="Let's discuss your family and library requirements."
        primaryCTA={{ text: "Start a Project", href: "/contact" }}
        secondaryCTA={{ text: "View Samples", href: "/portfolio" }}
      />
    </Layout>
  );
};

export default BIMContentCreation;
