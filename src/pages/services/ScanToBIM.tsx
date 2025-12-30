import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ScanLine } from "lucide-react";
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
    id: "scan-to-bim",
    title: "Scan to BIM",
    description: "Accurate BIM models created from point cloud data, capturing existing conditions with millimeter precision.",
    features: [
      "Point Cloud Processing",
      "3D Model Development",
      "LOD 200-400 Outputs",
      "Multi-Discipline Modeling",
      "Deviation Reporting",
      "Quality Verification",
    ],
  },
  {
    id: "scan-to-cad",
    title: "Scan to CAD",
    description: "Precise 2D CAD drawings extracted from laser scan data for existing building documentation.",
    features: [
      "Floor Plans",
      "Elevations & Sections",
      "Ceiling Plans",
      "Equipment Layouts",
      "MEP Documentation",
      "As-Built Updates",
    ],
  },
  {
    id: "laser-scanning",
    title: "Laser Scanning",
    description: "Comprehensive 3D laser scanning services using state-of-the-art equipment for accurate reality capture.",
    features: [
      "Site Survey Planning",
      "High-Density Point Clouds",
      "Registered Scan Data",
      "Site Photography",
      "Progress Monitoring",
      "Deliverable Export",
    ],
  },
  {
    id: "asset-documentation",
    title: "Asset Documentation",
    description: "Detailed documentation of existing MEP systems, equipment, and infrastructure for facility management.",
    features: [
      "Equipment Inventories",
      "System Documentation",
      "Space Management",
      "Maintenance Planning",
      "CAFM Integration",
      "Asset Tagging",
    ],
  },
];

const faqs = [
  {
    question: "What is Scan to BIM and when is it used?",
    answer: "Scan to BIM is the process of creating accurate 3D BIM models from laser scan point cloud data. It's used for renovation projects, facility management, historic preservation, and any situation where accurate existing conditions documentation is needed. The resulting models serve as a reliable foundation for design and construction.",
  },
  {
    question: "What accuracy can you achieve from point cloud data?",
    answer: "We typically achieve model accuracy of ±6mm to ±12mm depending on LOD requirements and scan quality. For high-precision applications like industrial or MEP coordination, we can deliver tighter tolerances. All outputs include deviation reports comparing the model to source scan data.",
  },
  {
    question: "Do you provide laser scanning services, or just modeling?",
    answer: "We offer both scanning and modeling services. For scanning, we partner with certified scanning providers or can utilize your preferred scanning contractor. For modeling, our team specializes in creating accurate BIM models from point cloud data regardless of the scanning source.",
  },
  {
    question: "What LOD can you deliver for Scan to BIM projects?",
    answer: "We deliver Scan to BIM models at LOD 200 through LOD 400 depending on project requirements. LOD 200 is typical for renovation design, LOD 300 for coordination, and LOD 400 for detailed MEP or fabrication applications.",
  },
  {
    question: "How do you handle areas that weren't scanned?",
    answer: "We clearly document modeled vs. non-modeled areas in our deliverables. For critical spaces not captured in scans, we can coordinate additional scanning, use supplementary photographs, or model based on available drawings with appropriate documentation of assumptions.",
  },
  {
    question: "Can you integrate scan data with new design models?",
    answer: "Absolutely. We regularly merge as-built models with new construction designs, enabling accurate coordination between existing conditions and proposed work. This is essential for renovation, addition, and tenant improvement projects.",
  },
];

const processSteps = [
  {
    icon: ScanLine,
    title: "Data Receipt & Review",
    description: "Receiving and analyzing point cloud data for coverage, quality, and registration accuracy.",
  },
  {
    icon: ScanLine,
    title: "Scope Definition",
    description: "Defining modeling scope, LOD requirements, and deliverable specifications with your team.",
  },
  {
    icon: ScanLine,
    title: "Model Development",
    description: "Creating accurate BIM geometry from point cloud data following established standards.",
  },
  {
    icon: ScanLine,
    title: "Quality Verification",
    description: "Comparing model geometry against point cloud to verify accuracy and identify gaps.",
  },
  {
    icon: ScanLine,
    title: "Documentation",
    description: "Generating deviation reports, 2D drawings, and supporting documentation.",
  },
  {
    icon: ScanLine,
    title: "Delivery & Support",
    description: "Delivering final models with training and ongoing support for your project team.",
  },
];

const ScanToBIM = () => {
  useEffect(() => {
    document.title = "Scan to BIM Services | Arcon Infratek - Point Cloud Modeling";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">Scan to BIM</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Reality capture</span> to accurate BIM models
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform point cloud data into precise, coordinated BIM models that 
                capture existing conditions with millimeter accuracy. Essential for 
                renovation, facility management, and as-built documentation.
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
            <div className="bg-secondary rounded-2xl aspect-video flex items-center justify-center">
              <ScanLine className="h-24 w-24 icon-gradient opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              From Point Clouds to Intelligent Models
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Laser scanning captures millions of 3D points representing existing buildings with 
              unprecedented accuracy. Our Scan to BIM services transform this raw data into 
              intelligent, parametric BIM models that can be used for design coordination, 
              renovation planning, and facility management.
            </p>
            <p className="text-muted-foreground text-center">
              Whether you're planning a complex renovation or need accurate as-built documentation, 
              our experienced team delivers models you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="As-Built Services"
        subtitle="Comprehensive reality capture and documentation solutions."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow steps={processSteps} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Scan to BIM Projects"
        subtitle="Explore our portfolio of reality capture and modeling work."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="Scan to BIM" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Have point cloud data that needs modeling?"
        description="Get accurate BIM models from your laser scans."
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ label: "Download Brochure", href: "/insights/brochures" }}
      />
    </Layout>
  );
};

export default ScanToBIM;
