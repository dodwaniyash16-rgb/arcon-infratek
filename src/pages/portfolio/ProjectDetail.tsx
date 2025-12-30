import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, MapPin, Building2, Users, CheckCircle, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { getProjectBySlug, getRelatedProjects, Project } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedProjects = getRelatedProjects(project.slug, project.category);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/20" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 text-background">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-background/70 text-sm mb-6">
            <Link to="/" className="hover:text-background transition-colors">Home</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-background transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-background">{project.title}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-background/20 backdrop-blur-sm rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-background/80">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
          </div>

          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Discuss Your Project With a BIM Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-6 text-accent">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <Building2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Scale</p>
                      <p className="font-medium">{project.scale}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4 text-accent">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4 text-accent">Deliverables</h2>
                <ul className="space-y-3">
                  {project.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Gallery & Share */}
            <div className="space-y-8">
              {/* Gallery */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4 text-accent">Gallery</h2>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.galleryImages.slice(0, 3).map((img, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden bg-secondary">
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Share */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4 text-accent">Share</h2>
                <div className="flex gap-3">
                  <button className="p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Works Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24 bg-card border-y border-border">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Related Works</h2>
              <p className="text-muted-foreground">See more projects related to {project.category}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id}
                  to={`/portfolio/${relatedProject.slug}`}
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{relatedProject.category}</p>
                    <h3 className="font-heading font-semibold group-hover:text-accent transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{relatedProject.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Build Better, Faster
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Partner with Arcon Infratek for your next project. Our team of BIM experts is ready to deliver 
            precision-driven results that meet your standards and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="gradient" asChild>
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10" asChild>
              <Link to="/insights/brochures">
                Download Case Study
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
