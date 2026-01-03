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
import vdcServicesImage from "@/assets/services/vdc-services.png";
import clashDetectionImage from "@/assets/services/clash-detection.png";
import modelCoordinationImage from "@/assets/services/model-coordination.png";
import bimManagementImage from "@/assets/services/bim-management.png";
import bimCoordinationHero from "@/assets/services/bim-coordination-hero.png";

const heroImage = bimCoordinationHero;
const serviceScopes = [
  {
    id: "vdc",
    title: "VDC Services",
    description: "Virtual Design and Construction services that enable project teams to visualize, simulate, and optimize construction processes before breaking ground.",
    features: [
      "4D Construction Sequencing",
      "Virtual Mockups & Reviews",
      "Constructability Analysis",
      "Logistics Planning",
      "Trade Coordination",
      "Digital Twin Development",
    ],
    image: vdcServicesImage,
  },
  {
    id: "clash-detection",
    title: "Clash Detection",
    description: "Comprehensive multi-discipline clash detection and resolution services to eliminate field conflicts and reduce costly rework.",
    features: [
      "Automated Clash Detection",
      "Clash Classification & Prioritization",
      "Resolution Workflow Management",
      "Coordination Reports",
      "Issue Tracking & Closeout",
      "BIM 360 Integration",
    ],
    image: clashDetectionImage,
  },
  {
    id: "model-coordination",
    title: "Model Coordination",
    description: "Expert coordination of multi-discipline BIM models ensuring seamless integration between architectural, structural, MEP, and specialty trades.",
    features: [
      "Federated Model Management",
      "Coordination Meeting Facilitation",
      "RFI Response Support",
      "Design Change Integration",
      "Model Version Control",
      "Stakeholder Communication",
    ],
    image: modelCoordinationImage,
  },
  {
    id: "bim-management",
    title: "BIM Management",
    description: "Full-service BIM management including execution planning, standards enforcement, and quality assurance throughout the project lifecycle.",
    features: [
      "BIM Execution Planning",
      "Standards Development",
      "Team Training & Support",
      "Model Auditing",
      "Deliverable Management",
      "Progress Tracking",
    ],
    image: bimManagementImage,
  },
];

const faqs = [
  {
    question: "What is VDC and how does it differ from BIM?",
    answer: "VDC (Virtual Design and Construction) encompasses the broader use of integrated models and processes to simulate and optimize project delivery. While BIM focuses on creating accurate digital representations of buildings, VDC extends to include 4D scheduling, cost integration, logistics planning, and collaborative workflows that improve overall project outcomes.",
  },
  {
    question: "How does clash detection reduce project costs?",
    answer: "Clash detection identifies conflicts between building systems in the virtual environment before construction begins. Studies show that resolving clashes digitally costs 1/10th of addressing them in the field. Our comprehensive clash detection typically identifies hundreds to thousands of potential issues, preventing costly rework and schedule delays.",
  },
  {
    question: "Do you provide on-site coordination support?",
    answer: "Yes, we offer flexible coordination support including remote management, hybrid models, and on-site BIM coordination services. Our team can attend coordination meetings virtually, provide on-site support during critical phases, or embed full-time coordinators for large projects.",
  },
  {
    question: "What software do you use for coordination?",
    answer: "We utilize industry-leading platforms including Autodesk Navisworks, BIM 360, Solibri, and custom coordination tools. Our team is proficient in all major software ecosystems and can adapt to your existing technology stack.",
  },
  {
    question: "How do you handle coordination between multiple subcontractors?",
    answer: "We establish clear coordination protocols, manage federated model integration, and facilitate regular coordination meetings. Our role includes gathering models from all trades, identifying conflicts, proposing resolutions, and tracking issues to closeout.",
  },
  {
    question: "What is included in a BIM Execution Plan (BEP)?",
    answer: "Our BEP includes project goals, team roles and responsibilities, modeling standards, coordination procedures, quality control measures, and deliverable specifications. We tailor each BEP to align with project requirements and stakeholder needs.",
  },
];

const BIMCoordination = () => {
  useEffect(() => {
    document.title = "BIM Coordination & VDC Services | Arcon Infratek";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">BIM Coordination</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Clash-free</span> coordination for construction excellence
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert VDC and BIM coordination services that bring multi-discipline teams 
                together, eliminate conflicts before construction, and deliver projects 
                on time and within budget.
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
                alt="BIM Coordination Services" 
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
              Seamless Multi-Discipline Coordination
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Construction projects involve dozens of systems that must work together flawlessly. 
              Our coordination services ensure that architectural, structural, MEP, and specialty 
              trade models integrate seamlessly, identifying and resolving conflicts in the virtual 
              environment before they become costly field issues.
            </p>
            <p className="text-muted-foreground text-center">
              With proven processes and cutting-edge technology, we help project teams reduce RFIs, 
              minimize change orders, and maintain construction schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope Tabs */}
      <ServiceScopeTabs
        title="Coordination Services"
        subtitle="Comprehensive coordination solutions for every project phase."
        scopes={serviceScopes}
      />

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Projects */}
      <FeaturedProjects
        title="Coordination Success Stories"
        subtitle="See how our coordination services have delivered results."
      />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Related Services */}
      <RelatedServicesSection currentService="BIM Coordination" />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <CTAStrip
        title="Ready to streamline your project coordination?"
        description="Connect with our VDC experts for a consultation."
        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
        secondaryCTA={{ text: "Download Brochure", href: "/insights/brochures" }}
      />
    </Layout>
  );
};

export default BIMCoordination;
