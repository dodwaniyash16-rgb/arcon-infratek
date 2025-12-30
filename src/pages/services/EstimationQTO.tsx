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
    id: "quantity-takeoff",
    title: "Quantity Takeoff",
    description: "Accurate material quantities extracted directly from BIM models, ensuring precision and eliminating manual counting errors.",
    features: [
      "Model-Based Extraction",
      "Material Categorization",
      "Area & Volume Calculations",
      "Assembly Breakdowns",
      "Excel Export & Integration",
      "Revision Comparison",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "cost-estimation",
    title: "Cost Estimation",
    description: "Comprehensive cost estimates at any project phase, from conceptual budgets to detailed bid preparation.",
    features: [
      "Conceptual Estimates",
      "Detailed Line-Item Budgets",
      "Labor & Material Costing",
      "Subcontractor Pricing",
      "Value Engineering Support",
      "Cost-to-Complete Analysis",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "5d-bim",
    title: "5D BIM",
    description: "Integrated cost data within BIM models enabling real-time budget tracking and design optimization.",
    features: [
      "Cost-Linked BIM Elements",
      "Real-Time Budget Updates",
      "Design Option Comparison",
      "Change Order Impact Analysis",
      "Cash Flow Projections",
      "Cost Visualization",
    ],
    // Add your image path here
    image: "",
  },
  {
    id: "bid-support",
    title: "Bid Support",
    description: "Pre-bid quantity takeoffs and estimating support to help contractors win work with accurate pricing.",
    features: [
      "Pre-Bid Takeoffs",
      "Scope Clarification",
      "Bid Package Preparation",
      "Subcontractor Leveling",
      "Risk Assessment",
      "Bid Day Support",
    ],
    // Add your image path here
    image: "",
  },
];

const faqs = [
  {
    question: "How accurate are BIM-based quantity takeoffs?",
    answer: "BIM-based takeoffs are typically 95-99% accurate when working with well-developed models. Unlike manual takeoffs that rely on interpretation, model-based extraction captures exact quantities embedded in the design. We validate all outputs against drawings and provide detailed breakdowns for verification.",
  },
  {
    question: "What cost databases do you use for estimation?",
    answer: "We utilize industry-standard databases including RSMeans, Craftsman, and regional cost data tailored to your project location. For specialized work, we incorporate historical data from similar projects and current market pricing from subcontractor networks.",
  },
  {
    question: "Can you provide estimates at the schematic design phase?",
    answer: "Yes, we offer conceptual estimates based on parametric modeling, historical benchmarks, and cost-per-square-foot data. As the design develops, we refine estimates to reflect greater detail, providing budget confidence at every phase.",
  },
  {
    question: "What format do you deliver takeoffs in?",
    answer: "We deliver takeoffs in Excel, PDF, and direct integration with estimation software including Sage, Bluebeam, and custom formats. Our outputs are organized by CSI MasterFormat, Uniformat, or your preferred categorization system.",
  },
  {
    question: "How do you handle design changes during estimation?",
    answer: "Our BIM-based approach makes change management efficient. When designs update, we re-extract quantities from the revised model and provide comparison reports highlighting quantity and cost impacts. This enables informed decision-making during value engineering.",
  },
  {
    question: "Do you provide subcontractor-ready bid packages?",
    answer: "Yes, we prepare detailed scope breakdowns and quantity packages for subcontractor bidding. Our outputs clearly define scope boundaries, helping you obtain accurate and comparable bids from trade partners.",
  },
];

const EstimationQTO = () => {
  useEffect(() => {
    document.title = "Estimation & Quantity Takeoff Services | Arcon Infratek - 5D BIM";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Estimation & QTO</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Accurate</span> quantity takeoffs & cost estimation
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Leverage BIM-based quantity extraction and expert cost estimation to 
                bid with confidence, control budgets, and maximize project profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get a Quote
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
                alt="Estimation & QTO Services" 
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
              Precision Quantities, Reliable Budgets
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Accurate quantities and cost estimates are the foundation of successful projects. 
              Our BIM-integrated approach extracts material quantities directly from coordinated 
              models, eliminating manual errors and providing a clear picture of project costs 
              from concept through construction.
            </p>
            <p className="text-muted-foreground text-center">
              Whether you're preparing a conceptual budget, bidding a project, or tracking 
              costs during construction, our estimation services deliver the accuracy you need.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Estimation Services"
        subtitle="Comprehensive cost solutions for every project phase."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Estimation Success Stories"
        subtitle="See how our estimating services have supported winning bids."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="Estimation & QTO" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Need accurate quantities for your bid?"
        description="Get a competitive edge with BIM-based takeoffs."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Download Brochure", href: "/insights/brochures" }}
      />
    </Layout>
  );
};

export default EstimationQTO;
