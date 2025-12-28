import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Zap, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning in cutting-edge BIM technologies.",
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Remote-friendly environment with flexible schedules to support work-life balance.",
  },
  {
    icon: Users,
    title: "Global Team",
    description: "Work with diverse, talented professionals from around the world.",
  },
  {
    icon: Heart,
    title: "Great Benefits",
    description: "Competitive compensation, health benefits, and professional development budget.",
  },
];

const openings = [
  {
    title: "Senior BIM Modeler - Architectural",
    department: "Production",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "MEP BIM Coordinator",
    department: "Coordination",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Structural BIM Engineer",
    department: "Production",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "VDC Manager",
    department: "Management",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "BIM Content Developer",
    department: "Content",
    location: "Remote",
    type: "Contract",
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Careers</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Build your career with{" "}
              <span className="text-gradient">Arcon Infratek</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our global team of BIM professionals and work on exciting 
              projects with industry-leading clients.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Why Join Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              A place to grow and <span className="text-gradient">thrive</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 icon-gradient" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Open Positions</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Current <span className="text-gradient">opportunities</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Don't see a perfect fit?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented BIM professionals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Submit Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
