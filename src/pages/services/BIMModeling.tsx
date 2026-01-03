import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import architecturalBimImage from "@/assets/services/architectural-bim.png";
import structuralBimImage from "@/assets/services/structural-bim.png";
import mepBimImage from "@/assets/services/mep-bim.png";
import facadeBimImage from "@/assets/services/facade-bim.png";
import landscapeBimImage from "@/assets/services/landscape-bim.png";
import { Button } from "@/components/ui/button";
import ServiceScopeTabs from "@/components/sections/ServiceScopeTabs";
import ProcessWorkflow from "@/components/sections/ProcessWorkflow";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import IndustriesSection from "@/components/sections/IndustriesSection";
import RelatedServicesSection from "@/components/sections/RelatedServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTAStrip from "@/components/ui/cta-strip";
import bimModelingHero from "@/assets/services/bim-modeling-hero.png";

const heroImage = bimModelingHero;
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
    image: architecturalBimImage,
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
    image: structuralBimImage,
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
    image: mepBimImage,
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
    image: facadeBimImage,
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
    image: landscapeBimImage,
  },
];

const faqs = [
  {
    question: "What projects benefit most from LOD 300-400 BIM Modeling?",
    answer: "LOD 300-400 modeling is ideal for complex commercial buildings, hospitals, data centers, industrial facilities, and infrastructure projects requiring precise quantities, fabrication details, and clash detection. These levels provide the detail needed for construction planning, shop drawing generation, and accurate material takeoffs.",
  },
  {
    question: "What is the difference between LOD 100, 200, 300, 400, and 500?",
    answer: "LOD 100 is conceptual massing for early design. LOD 200 includes approximate geometry for schematic design. LOD 300 provides accurate geometry with quantities for coordination and construction documentation. LOD 400 adds fabrication-level detail for shop drawings. LOD 500 represents verified as-built conditions for facility management.",
  },
  {
    question: "How does BIM Modeling help reduce construction costs?",
    answer: "BIM modeling reduces costs through early clash detection (preventing costly on-site rework), accurate quantity takeoffs (enabling precise budgeting), optimized material procurement, and improved coordination between disciplines. Studies show BIM can reduce project costs by 5-15% through these efficiencies.",
  },
  {
    question: "Can you integrate architectural, structural, and MEP models together?",
    answer: "Yes, multi-discipline coordination is a core strength. We develop federated models combining architectural, structural, MEP, facade, and civil elements in a shared BIM environment. Our coordination process identifies and resolves clashes before construction, ensuring all systems fit properly.",
  },
  {
    question: "What software and standards do you use for BIM Modeling?",
    answer: "We primarily use Autodesk Revit, Navisworks, BIM 360, Tekla, and Civil 3D. Our models comply with international standards including BIM Forum LOD Specification, AIA guidelines, ISO 19650, and regional codes like ADA, IBC, NFPA, ASHRAE, and SMACNA.",
  },
  {
    question: "How long does it take to create a detailed BIM model?",
    answer: "Timelines depend on project size and complexity. Simple residential models may take 5-10 business days, mid-size commercial projects 2-4 weeks, and large complex facilities 6-12 weeks. We offer expedited delivery for urgent projects. A detailed schedule is provided after reviewing your project scope.",
  },
  {
    question: "Do you provide clash detection and coordination reports?",
    answer: "Yes, comprehensive clash detection is included in our coordination services. We use Navisworks to identify hard clashes, soft clashes, and clearance violations. Detailed coordination reports with clash matrices, resolution status, and visual markups are provided for your project team.",
  },
  {
    question: "Can you work from 2D CAD drawings or point cloud data?",
    answer: "Absolutely. We regularly convert 2D CAD files, PDFs, sketches, and point cloud scans into detailed 3D BIM models. Our Scan-to-BIM process captures existing conditions accurately, making it ideal for renovation, retrofit, and as-built documentation projects.",
  },
  {
    question: "What deliverables are included with BIM Modeling services?",
    answer: "Deliverables typically include native Revit files (.rvt), IFC exports, Navisworks models (.nwc/.nwd), 2D drawings, schedules, quantity reports, and clash detection reports. We customize outputs based on your project requirements and can provide additional formats as needed.",
  },
  {
    question: "Do you offer ongoing support after model delivery?",
    answer: "Yes, we provide post-delivery support including model updates during construction, RFI responses, design change incorporation, and as-built documentation. We can also provide training on using the delivered models and establishing BIM workflows for your team.",
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
            <div className="bg-secondary rounded-2xl aspect-video overflow-hidden">
              <img 
                src={heroImage} 
                alt="BIM Modeling Services" 
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
