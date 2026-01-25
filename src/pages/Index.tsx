import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Layers, Globe, Shield, Box, FileText, Calculator, ScanLine, CheckCircle, Pencil, Blocks, Users, Briefcase, Building2, HardHat, Landmark, Home, UserCircle, Timer, FolderCheck, UsersRound, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard, StatCard, ProcessStep, FeatureBlock, TestimonialCard, SectorChip, StakeholderCard, ProjectCard } from "@/components/ui/cards";
import { CTAStrip } from "@/components/ui/cta-strip";
import HeroSection from "@/components/home/HeroSection";
// Data
const metrics = [{
  icon: Timer,
  value: 72,
  prefix: "24-",
  suffix: " hrs",
  label: "Turnaround"
}, {
  icon: FolderCheck,
  value: 500,
  suffix: "+",
  label: "Projects Completed"
}, {
  icon: UsersRound,
  value: 350,
  suffix: "+",
  label: "Clients Worldwide"
}, {
  icon: Earth,
  value: 15,
  suffix: "+",
  label: "Countries"
}];
const services = [{
  title: "BIM Modeling",
  description: "Architectural, structural, and MEP models built to LOD specifications.",
  href: "/services/bim-modeling",
  icon: Box
}, {
  title: "BIM Coordination",
  description: "Clash detection and resolution across all disciplines.",
  href: "/services/bim-coordination",
  icon: Layers
}, {
  title: "Shop Drawings",
  description: "Fabrication-ready drawings from coordinated models.",
  href: "/services/shop-drawings",
  icon: FileText
}, {
  title: "Estimation & QTO",
  description: "Accurate quantity takeoffs and cost estimation from BIM.",
  href: "/services/estimation-qto",
  icon: Calculator
}, {
  title: "Scan to BIM",
  description: "Point cloud to intelligent BIM model conversion.",
  href: "/services/scan-to-bim",
  icon: ScanLine
}, {
  title: "BIM Auditing",
  description: "Model quality checks against your standards.",
  href: "/services/bim-auditing",
  icon: CheckCircle
}, {
  title: "CAD Drafting",
  description: "2D documentation and drafting services.",
  href: "/services/cad-drafting",
  icon: Pencil
}, {
  title: "BIM Content Creation",
  description: "Custom Revit families and content libraries.",
  href: "/services/bim-content-creation",
  icon: Blocks
}];
import { getFeaturedProjects } from "@/data/projects";

const featuredProjects = getFeaturedProjects();
const stakeholders = [{
  icon: Pencil,
  title: "Design Consultants"
}, {
  icon: Users,
  title: "BIM Managers"
}, {
  icon: Briefcase,
  title: "General Contractors"
}, {
  icon: HardHat,
  title: "Trade Contractors"
}, {
  icon: Landmark,
  title: "Government"
}, {
  icon: Building2,
  title: "Facility Management"
}, {
  icon: UserCircle,
  title: "Developers/Owners"
}];
// Client logos imports
import godrejLogo from "@/assets/clients/godrej.png";
import karnatakaGovtLogo from "@/assets/clients/karnataka-govt.png";
import unescoLogo from "@/assets/clients/unesco.png";
import autodeskLogo from "@/assets/clients/autodesk.png";
import mpGovtLogo from "@/assets/clients/mp-govt.png";
import nhsrclLogo from "@/assets/clients/nhsrcl.png";
import rajasthanGovtLogo from "@/assets/clients/rajasthan-govt.png";
import unicefLogo from "@/assets/clients/unicef.png";
import uttarakhandGovtLogo from "@/assets/clients/uttarakhand-govt.png";
import wspLogo from "@/assets/clients/wsp.png";
import barcelonaLogo from "@/assets/clients/barcelona.png";

// Technology logos imports
import revitLogo from "@/assets/technologies/revit.png";
import dsMaxLogo from "@/assets/technologies/3ds-max.png";
import rhinoLogo from "@/assets/technologies/rhino.png";
import civil3dLogo from "@/assets/technologies/civil3d.jpg";
import archicadLogo from "@/assets/technologies/archicad.png";
import constructionCloudLogo from "@/assets/technologies/construction-cloud.jpg";
import inventorLogo from "@/assets/technologies/inventor.png";
import bim360Logo from "@/assets/technologies/bim360.jpg";
import dynamoLogo from "@/assets/technologies/dynamo.png";
import cfdLogo from "@/assets/technologies/cfd.png";
import enscapeLogo from "@/assets/technologies/enscape.png";
import etabsLogo from "@/assets/technologies/etabs.png";
import fabricationLogo from "@/assets/technologies/fabrication-camduct.png";
import grasshopperLogo from "@/assets/technologies/grasshopper.png";
import bluebeamLogo from "@/assets/technologies/bluebeam.png";
import jiraLogo from "@/assets/technologies/jira.png";
import teklaLogo from "@/assets/technologies/tekla.png";
import lumionLogo from "@/assets/technologies/lumion.png";
import navisworksLogo from "@/assets/technologies/navisworks.png";
import sketchupLogo from "@/assets/technologies/sketchup.png";
import solidworksLogo from "@/assets/technologies/solidworks.png";
import staadProLogo from "@/assets/technologies/staad-pro.png";
import twinmotionLogo from "@/assets/technologies/twinmotion.png";
import processImage from "@/assets/process-delivery.png";
const clientLogos = [{
  src: godrejLogo,
  alt: "Godrej"
}, {
  src: karnatakaGovtLogo,
  alt: "Government of Karnataka"
}, {
  src: unescoLogo,
  alt: "UNESCO"
}, {
  src: autodeskLogo,
  alt: "Autodesk"
}, {
  src: mpGovtLogo,
  alt: "Government of Madhya Pradesh"
}, {
  src: nhsrclLogo,
  alt: "NHSRCL"
}, {
  src: rajasthanGovtLogo,
  alt: "Government of Rajasthan"
}, {
  src: unicefLogo,
  alt: "UNICEF"
}, {
  src: uttarakhandGovtLogo,
  alt: "Government of Uttarakhand"
}, {
  src: wspLogo,
  alt: "WSP"
}, {
  src: barcelonaLogo,
  alt: "Barcelona"
}];
const processSteps = [{
  number: "01",
  title: "Discover and align",
  description: "Understand your standards, deliverables, and timeline requirements."
}, {
  number: "02",
  title: "Execution plan and setup",
  description: "Define scope, milestones, and communication protocols."
}, {
  number: "03",
  title: "Production and coordination",
  description: "Execute modeling, coordination, and documentation."
}, {
  number: "04",
  title: "QA and handover",
  description: "Quality checks and seamless deliverable handoff."
}];
const features = [{
  icon: CheckCircle,
  title: "Standards-driven output",
  description: "Your naming, families, views, sheets, and QA rules are followed consistently across every deliverable."
}, {
  icon: Layers,
  title: "Communication that does not slow projects",
  description: "Clear daily or milestone updates, issue logs, and quick turnarounds with minimal back-and-forth."
}, {
  icon: Box,
  title: "Coordination-first mindset",
  description: "Models built for downstream use: coordination, documentation, estimating, and fabrication."
}];
const technologies = [{
  src: revitLogo,
  alt: "Autodesk Revit"
}, {
  src: dsMaxLogo,
  alt: "3DS Max"
}, {
  src: rhinoLogo,
  alt: "Rhinoceros 3D"
}, {
  src: civil3dLogo,
  alt: "Autodesk Civil 3D"
}, {
  src: archicadLogo,
  alt: "ArchiCAD"
}, {
  src: constructionCloudLogo,
  alt: "Autodesk Construction Cloud"
}, {
  src: inventorLogo,
  alt: "Autodesk Inventor"
}, {
  src: bim360Logo,
  alt: "Autodesk BIM 360"
}, {
  src: dynamoLogo,
  alt: "Dynamo"
}, {
  src: cfdLogo,
  alt: "Autodesk CFD"
}, {
  src: enscapeLogo,
  alt: "Enscape"
}, {
  src: etabsLogo,
  alt: "ETABS"
}, {
  src: fabricationLogo,
  alt: "Autodesk Fabrication CAMduct"
}, {
  src: grasshopperLogo,
  alt: "Grasshopper 3D"
}, {
  src: bluebeamLogo,
  alt: "Bluebeam"
}, {
  src: jiraLogo,
  alt: "Jira"
}, {
  src: teklaLogo,
  alt: "Tekla"
}, {
  src: lumionLogo,
  alt: "Lumion"
}, {
  src: navisworksLogo,
  alt: "Autodesk Navisworks"
}, {
  src: sketchupLogo,
  alt: "SketchUp"
}, {
  src: solidworksLogo,
  alt: "SolidWorks"
}, {
  src: staadProLogo,
  alt: "STAAD.Pro"
}, {
  src: twinmotionLogo,
  alt: "Twinmotion"
}];
const testimonials = [{
  quote: "Arcon Infratek delivered exactly what we needed, on time and with zero rework. Their team understood our standards from day one.",
  author: "James Mitchell",
  role: "VDC Director",
  company: "Turner Construction"
}, {
  quote: "We've worked with several BIM providers. Arcon stands out for their communication and consistency. Models arrive ready to use.",
  author: "Sarah Chen",
  role: "BIM Manager",
  company: "Skanska USA"
}, {
  quote: "Their coordination work helped us avoid major clashes on site. The ROI was clear within the first month of the project.",
  author: "Michael Rodriguez",
  role: "Project Executive",
  company: "McCarthy Building"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Band - Metrics */}
      <section className="py-16 lg:py-20 border-y border-border bg-card">
        <div className="container-custom">
          {/* Tagline */}
          <div className="text-center mb-12">
            <span className="badge-pill">
              <span className="text-gradient font-semibold">Precision driven</span>
              <span className="text-muted-foreground"> BIM services delivered right, every time.</span>
            </span>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <StatCard 
                key={index} 
                icon={metric.icon}
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - NO gradient in heading */}
      <Section>
        <SectionHeader label="Our Services" title="Services designed for production speed and coordination certainty." description="From modeling to clash coordination to fabrication-ready documentation, we deliver consistent outputs aligned with your standards." />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Our Work Section - Moved after Services */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container-custom">
          <SectionHeader label="Our Work" title={<>
              <span className="text-gradient">Proven delivery</span> across project types.
            </>} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                image={project.image}
                title={project.title}
                category={project.category}
                location={project.location}
                href={`/portfolio/${project.slug}`}
              />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Customers Section - NEW */}
      <Section>
        <SectionHeader label="Our Customers" title={<>
            Trusted by <span className="text-gradient">industry leaders</span> worldwide.
          </>} />
        
        {/* Stakeholder boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-12">
          {stakeholders.map((stakeholder, index) => <StakeholderCard key={index} {...stakeholder} />)}
        </div>

        {/* Client Logos Marquee */}
        <div className="marquee-container py-8">
          <div className="marquee">
            {/* Duplicate logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => <div key={index} className="flex-shrink-0 h-20 px-8 bg-card rounded-lg border border-border flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-14 w-auto max-w-[180px] object-contain" />
              </div>)}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Steps */}
            <div>
              <span className="badge-pill mb-4">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                A delivery process your team can <span className="text-gradient">trust.</span>
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => <ProcessStep key={index} {...step} />)}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img src={processImage} alt="BIM delivery process - team collaboration and coordination" className="w-full h-auto rounded-2xl object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section>
        <SectionHeader label="Why Arcon Infratek" title={<>
            Built for teams that value <span className="text-gradient">precision.</span>
          </>} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureBlock key={index} {...feature} />)}
        </div>
      </Section>

      {/* Technologies We Use Section - NEW */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container-custom">
          <SectionHeader label="Technologies" title={<>
              Industry-leading <span className="text-gradient">software</span> we use.
            </>} description="We leverage the best tools in the industry to deliver high-quality BIM deliverables." />
          
          {/* Software Logos Marquee */}
          <div className="marquee-container py-8">
            <div className="marquee-slow">
              {/* Duplicate for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => <div key={index} className="flex-shrink-0 h-20 px-8 bg-background rounded-xl border border-border flex items-center justify-center">
                  <img src={tech.src} alt={tech.alt} className="h-14 w-auto max-w-[180px] object-contain" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Section>
        <SectionHeader label="Testimonials" title={<>
            What our <span className="text-gradient">partners</span> say
          </>} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </Section>

      {/* CTA Section - Dark */}
      <CTAStrip title="Ready to streamline BIM production and coordination?" description="Share your scope and timeline. We will respond with a clear plan and estimate." primaryCTA={{
      text: "Schedule a Call",
      href: "/contact"
    }} secondaryCTA={{
      text: "Request a Quote",
      href: "/contact"
    }} variant="dark" />
    </Layout>;
};
export default Index;