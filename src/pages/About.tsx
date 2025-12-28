import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Precision First",
    description: "Every model we deliver is audit-ready and clash-free, ensuring seamless coordination.",
  },
  {
    icon: Clock,
    title: "Speed Without Compromise",
    description: "24-72 hour turnaround times without sacrificing quality or accuracy.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We integrate with your team, processes, and tools for seamless project delivery.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Multi-timezone operations ensure your projects keep moving around the clock.",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "15+", label: "Years Experience" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Engineering excellence in{" "}
              <span className="text-gradient">BIM delivery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Arcon Infratek is a global BIM and VDC services provider specializing in 
              precision modeling, coordination, and construction documentation for 
              AEC firms worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To deliver fast, accurate, and accountable BIM services that empower 
                construction teams to build better, faster, and with greater confidence.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted BIM partner for construction firms globally, 
                setting the standard for quality, speed, and coordination excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              What drives our <span className="text-gradient">excellence</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 icon-gradient" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-alt">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
