import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Commercial High-Rise Development",
    category: "Architectural BIM",
    location: "New York, USA",
    image: null,
  },
  {
    id: 2,
    title: "Healthcare Facility Expansion",
    category: "MEP BIM",
    location: "London, UK",
    image: null,
  },
  {
    id: 3,
    title: "Mixed-Use Urban Complex",
    category: "VDC Consulting",
    location: "Dubai, UAE",
    image: null,
  },
  {
    id: 4,
    title: "Industrial Manufacturing Plant",
    category: "Structural BIM",
    location: "Toronto, Canada",
    image: null,
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Proven delivery</span> across sectors
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative bg-background rounded-xl overflow-hidden border border-border card-hover"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-heading font-bold text-gradient">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {project.location}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
