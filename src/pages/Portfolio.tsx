import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Projects that demonstrate{" "}
              <span className="text-gradient">excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successfully delivered BIM projects across 
              diverse sectors and building types.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-0.5 bg-secondary rounded text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.overview}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* And Many More Section */}
          <div className="mt-16 text-center py-12 bg-card rounded-2xl border border-border">
            <p className="text-muted-foreground mb-2">25+ projects shown</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              ...and many more successful deliveries.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss how we can support your next project with precision-driven BIM services.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to add your project to our portfolio?
          </h2>
          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
