import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";

export interface ProjectItem {
  title: string;
  category: string;
  location: string;
  image?: string;
  href?: string;
}

interface FeaturedProjectsProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectItem[];
}

const getDefaultProjects = (): ProjectItem[] => {
  return getFeaturedProjects().slice(0, 4).map(project => ({
    title: project.title,
    category: project.category,
    location: project.location,
    image: project.image,
    href: `/portfolio/${project.slug}`,
  }));
};

const FeaturedProjects = ({ 
  title = "Featured Projects", 
  subtitle = "Explore our portfolio of successful BIM implementations across the globe.",
  projects
}: FeaturedProjectsProps) => {
  const displayProjects = projects || getDefaultProjects();
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Our Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project, index) => (
            <Link 
              key={index} 
              to={project.href || "/portfolio"}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-secondary"
            >
              {/* Image */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-background">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-background/60 uppercase tracking-wide mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-heading font-semibold mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-background/70">{project.location}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
