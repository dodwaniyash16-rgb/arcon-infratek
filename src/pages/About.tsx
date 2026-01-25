import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Clock, Users, Globe, ArrowRight, MapPin, Building2, Layers, FileCheck, ScanLine } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import officeTeamImage from "@/assets/office-team.png";
import unicefLogo from "@/assets/clients/unicef.png";
import karnatakaLogo from "@/assets/clients/karnataka-govt.png";
import mpLogo from "@/assets/clients/mp-govt.png";
import autodeskLogo from "@/assets/clients/autodesk.png";
import godrejLogo from "@/assets/clients/godrej.png";
import nhsrclLogo from "@/assets/clients/nhsrcl.png";
import rajasthanLogo from "@/assets/clients/rajasthan-govt.png";
import unescoLogo from "@/assets/clients/unesco.png";
import uttarakhandLogo from "@/assets/clients/uttarakhand-govt.png";
import wspLogo from "@/assets/clients/wsp.png";
import worldMapImage from "@/assets/world-map-new.png";

// Client logos for marquee
const clientLogos = [
  { src: unicefLogo, alt: "UNICEF" },
  { src: karnatakaLogo, alt: "Government of Karnataka" },
  { src: mpLogo, alt: "Government of Madhya Pradesh" },
  { src: autodeskLogo, alt: "Autodesk" },
  { src: godrejLogo, alt: "Godrej" },
  { src: nhsrclLogo, alt: "NHSRCL" },
  { src: rajasthanLogo, alt: "Government of Rajasthan" },
  { src: unescoLogo, alt: "UNESCO" },
  { src: uttarakhandLogo, alt: "Government of Uttarakhand" },
  { src: wspLogo, alt: "WSP" },
];

// Animated stat component
const AnimatedStat = ({
  value,
  suffix = "",
  prefix = "",
  label
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) => {
  const {
    count,
    elementRef
  } = useCountUp({
    end: value,
    duration: 2000
  });
  return <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white font-heading">
        {prefix}{count}{suffix}
      </div>
      <div className="text-white/70 mt-2 text-sm">{label}</div>
    </div>;
};

// Service card for What We Do section - with premium hover effect
const ServiceCard = ({
  title,
  icon: Icon,
  href
}: {
  title: string;
  icon: React.ElementType;
  href: string;
}) => <Link to={href} className="group block bg-card border border-border rounded-2xl p-6 hover:border-transparent hover:shadow-md hover:scale-[1.02] transition-all duration-300 relative">
    {/* Thin gradient border overlay on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
    background: 'linear-gradient(90deg, hsl(328, 65%, 48%), hsl(351, 75%, 55%), hsl(40, 98%, 70%))',
    padding: '1px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude'
  }} />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-gradient-brand flex items-center justify-center mb-4 transition-all duration-300">
        <Icon className="w-6 h-6 icon-gradient group-hover-icon-white transition-all duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-foreground group-hover:text-gradient transition-all">
        {title}
      </h3>
      <ArrowRight className="w-4 h-4 mt-3 text-gradient" />
    </div>
  </Link>;

// Value card component - with premium hover effect
const ValueCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => <div className="group bg-card border border-border rounded-2xl p-6 hover:border-transparent hover:shadow-md hover:scale-[1.02] transition-all duration-300 relative">
    {/* Thin gradient border overlay on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
    background: 'linear-gradient(90deg, hsl(328, 65%, 48%), hsl(351, 75%, 55%), hsl(40, 98%, 70%))',
    padding: '1px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude'
  }} />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-gradient-brand flex items-center justify-center mb-5 transition-all duration-300">
        <Icon className="w-7 h-7 icon-gradient group-hover-icon-white transition-all duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-gradient transition-all">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>;

// Office location card
const OfficeCard = ({
  city,
  country,
  description
}: {
  city: string;
  country: string;
  description: string;
}) => <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c5328f] to-[#fec967] flex items-center justify-center flex-shrink-0">
      <MapPin className="w-5 h-5 text-white" />
    </div>
    <div>
      <h4 className="font-heading font-semibold text-foreground">{city}, {country}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>;
const values = [{
  icon: Target,
  title: "Precision First",
  description: "Every model we deliver is audit-ready and clash-free, meeting the highest industry standards for coordination and documentation."
}, {
  icon: Clock,
  title: "Speed Without Compromise",
  description: "24-72 hour turnaround times without sacrificing quality. Our multi-timezone operations keep your projects moving."
}, {
  icon: Users,
  title: "Collaborative Partnership",
  description: "We integrate seamlessly with your team, processes, and tools — functioning as a true extension of your workforce."
}, {
  icon: Globe,
  title: "Global Coverage",
  description: "Local expertise across 4 continents ensures your projects receive culturally aware, timezone-friendly support."
}];
const services = [{
  title: "BIM Modeling",
  icon: Layers,
  href: "/services/bim-modeling"
}, {
  title: "BIM Coordination",
  icon: Building2,
  href: "/services/bim-coordination"
}, {
  title: "Shop Drawings",
  icon: FileCheck,
  href: "/services/shop-drawings"
}, {
  title: "Scan to BIM",
  icon: ScanLine,
  href: "/services/scan-to-bim"
}];
const offices = [{
  city: "Indore",
  country: "India",
  description: "Headquarters"
}, {
  city: "Delhi",
  country: "India",
  description: "North India Operations"
}, {
  city: "Dubai",
  country: "UAE",
  description: "Middle East & GCC Hub"
}, {
  city: "Wyoming",
  country: "USA",
  description: "Americas Operations"
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Your Extended BIM Team for{" "}
              <span className="text-gradient">Precision-Driven Project Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Arcon Infratek is a leading BIM and VDC services provider delivering audit-ready models, 
              clash-free coordination, and construction-grade documentation to AEC firms across 15+ countries. 
              We operate as your offshore extension — fast, accountable, and built for scale.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-6">
                End-to-End <span className="text-gradient">BIM Solutions</span> for the AEC Industry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide comprehensive Building Information Modeling (BIM) solutions to architects, 
                engineers, contractors, and developers worldwide. From design development through 
                construction and operations, our multidisciplinary team delivers coordinated models 
                that reduce rework, accelerate schedules, and improve project certainty.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our expertise spans architectural, structural, MEP, and civil disciplines — enabling 
                seamless coordination across all project stakeholders and construction phases.
              </p>
              <Button variant="outline" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map(service => <ServiceCard key={service.title} {...service} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section with Office Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${officeTeamImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
              120+ BIM Professionals Powering Your Projects
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Our multidisciplinary team brings together architects, structural engineers, MEP specialists, 
              and VDC managers with an average of 10+ years of industry experience. We don't just model — 
              we understand construction.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white font-heading">120+</div>
                <div className="text-white/70 mt-1">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white font-heading">10+</div>
                <div className="text-white/70 mt-1">Years Avg. Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar with Rolling Numbers */}
      <section className="py-16 bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <AnimatedStat value={8} prefix="$" suffix="B+" label="Value of Projects Delivered" />
            <AnimatedStat value={120} suffix="+" label="BIM Professionals" />
            <AnimatedStat value={4} label="Global Offices" />
            <AnimatedStat value={10} suffix="+" label="Years Avg. Experience" />
          </div>
          
          {/* Client Trust Badge - Scrolling Marquee */}
          <div className="flex flex-col items-center pt-8">
            <p className="text-white/60 text-sm mb-6">Trusted by industry leaders including</p>
            <div className="marquee-container py-4 w-full">
              <div className="marquee">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 h-16 px-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center mx-2">
                    <img src={logo.src} alt={logo.alt} className="h-10 w-auto max-w-[140px] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Driven by <span className="text-gradient">Mission & Vision</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c5328f] to-[#fec967] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower AEC firms with fast, accurate, and accountable BIM services that eliminate 
                coordination bottlenecks, reduce construction risk, and accelerate project delivery. 
                We exist to make our clients' jobs easier and their projects more successful.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c5328f] to-[#fec967] flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted offshore BIM partner for construction professionals globally, 
                setting the benchmark for quality, speed, and technical excellence in virtual design 
                and construction. We aim to transform how the world builds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Are We Section */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-4">
              Where Are We?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With global delivery centers and local expertise, we serve clients across 15+ countries around the clock.
            </p>
          </div>
          
          {/* Full-width Map */}
          <div className="mb-12">
            <img src={worldMapImage} alt="Global Office Locations - Indore, Delhi, Dubai, Wyoming USA" className="w-full h-auto max-w-5xl mx-auto" />
          </div>
          
          {/* Office Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden">
              <img src={officeTeamImage} alt="Arcon Infratek Office" className="w-full h-64 object-cover" />
            </div>
            
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {offices.map(office => <OfficeCard key={office.city} {...office} />)}
              </div>
              
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/portfolio">
                  Explore Our Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-4">
              The Principles That <span className="text-gradient">Guide Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every decision we make and every model we deliver is shaped by these core values.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(value => <ValueCard key={value.title} {...value} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Join 350+ clients worldwide who trust Arcon Infratek for their BIM and VDC needs. 
            Let's discuss how we can support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;