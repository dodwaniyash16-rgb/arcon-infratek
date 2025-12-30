import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler } from "lucide-react";
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
    id: "structural-steel",
    title: "Structural Steel",
    description: "Fabrication-ready structural steel shop drawings with accurate connection details, piece marks, and erection sequences.",
    features: [
      "Connection Details & Plates",
      "Beam & Column Layouts",
      "Piece Mark Drawings",
      "Bill of Materials",
      "Erection Drawings",
      "Anchor Bolt Plans",
    ],
  },
  {
    id: "mep-shop",
    title: "MEP Shop Drawings",
    description: "Detailed mechanical, electrical, and plumbing shop drawings for fabrication and installation.",
    features: [
      "Ductwork Fabrication Drawings",
      "Piping Spool Drawings",
      "Electrical Riser Diagrams",
      "Equipment Layouts",
      "Hanger & Support Details",
      "Sleeve & Penetration Plans",
    ],
  },
  {
    id: "rebar",
    title: "Rebar Detailing",
    description: "Comprehensive reinforcement detailing with bar bending schedules, placement drawings, and quantity summaries.",
    features: [
      "Foundation Rebar Details",
      "Column & Beam Schedules",
      "Slab Reinforcement Plans",
      "Bar Bending Schedules",
      "Special Moment Frames",
      "Quantity Summaries",
    ],
  },
  {
    id: "precast",
    title: "Precast Concrete",
    description: "Production-ready precast concrete shop drawings with embed layouts, lifting points, and finish specifications.",
    features: [
      "Panel Erection Drawings",
      "Connection Details",
      "Embed Layouts",
      "Hardware Schedules",
      "Production Tickets",
      "As-Placed Verification",
    ],
  },
  {
    id: "curtain-wall",
    title: "Curtain Wall",
    description: "Detailed curtain wall and glazing shop drawings with mullion layouts, panel schedules, and installation sequences.",
    features: [
      "Mullion Details",
      "Panel Layouts",
      "Anchor Attachments",
      "Thermal Break Details",
      "Gasket & Sealant Specs",
      "Installation Sequences",
    ],
  },
];

const faqs = [
  {
    question: "What is the difference between construction drawings and shop drawings?",
    answer: "Construction drawings (CDs) are prepared by architects and engineers to convey design intent and obtain permits. Shop drawings are detailed fabrication and installation drawings prepared by contractors or specialty trades, showing exactly how elements will be manufactured and installed. Shop drawings translate design intent into production reality.",
  },
  {
    question: "Do your shop drawings comply with industry standards?",
    answer: "Yes, all our shop drawings comply with relevant industry standards including AISC for structural steel, ACI for concrete reinforcement, SMACNA for ductwork, and regional building codes. We follow the specifications outlined in your project documents and coordinate with engineers of record.",
  },
  {
    question: "Can you produce shop drawings from our existing BIM models?",
    answer: "Absolutely. We can extract shop drawings directly from coordinated BIM models, ensuring consistency between the 3D model and 2D fabrication documents. This BIM-to-shop drawing workflow reduces errors and accelerates production.",
  },
  {
    question: "What is your typical turnaround for shop drawings?",
    answer: "Turnaround varies by discipline and complexity. Structural steel shop drawings typically take 1-2 weeks per submission, MEP shop drawings 1-3 weeks, and rebar detailing 1-2 weeks. We offer expedited services for critical path items.",
  },
  {
    question: "Do you coordinate shop drawings with other trades?",
    answer: "Yes, coordination is essential to our shop drawing process. We work with federated BIM models to ensure our drawings account for all disciplines, identifying and resolving conflicts before fabrication begins.",
  },
  {
    question: "What information do you need to start shop drawings?",
    answer: "We typically need construction drawings (architectural, structural, MEP), project specifications, BIM models if available, and any owner/architect standards. For revisions, we also need marked-up returns and coordination reports.",
  },
];

const ShopDrawings = () => {
  useEffect(() => {
    document.title = "Shop Drawing Services | Arcon Infratek - Fabrication-Ready Details";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Shop Drawing Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Fabrication-ready</span> shop drawings for every trade
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From structural steel to MEP systems, we deliver precise shop drawings 
                that translate design intent into production-ready documentation, 
                accelerating fabrication and reducing field errors.
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
              <Ruler className="h-24 w-24 icon-gradient opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Precision Detailing for Successful Fabrication
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Quality shop drawings are the bridge between design and construction. Our experienced 
              detailers create comprehensive fabrication and installation drawings that meet the 
              highest industry standards, enabling manufacturers to produce components with confidence 
              and installers to execute work efficiently.
            </p>
            <p className="text-muted-foreground text-center">
              We leverage BIM technology to ensure our shop drawings are coordinated across all trades, 
              reducing RFIs and change orders during construction.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Shop Drawing Disciplines"
        subtitle="Expert detailing across structural, mechanical, and specialty trades."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Projects We've Detailed"
        subtitle="See examples of our shop drawing work across various industries."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="Shop Drawings" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Need shop drawings for your project?"
        description="Get a quote from our detailing experts today."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Samples", href: "/portfolio" }}
      />
    </Layout>
  );
};

export default ShopDrawings;
