import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  "All",
  "Healthcare",
  "Commercial",
  "Industrial",
  "Residential",
  "Hospitality",
  "Education",
  "Infrastructure",
];

const projects = [
  {
    id: 1,
    title: "Metropolitan Medical Center",
    category: "Healthcare",
    location: "Chicago, IL",
    description: "Full MEP coordination for a 500,000 SF hospital expansion.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Skyline Office Tower",
    category: "Commercial",
    location: "New York, NY",
    description: "Structural and architectural BIM for a 45-story office building.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    location: "Detroit, MI",
    description: "Complete BIM coordination for automotive manufacturing plant.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Miami, FL",
    description: "Multi-family residential with full MEP and structural coordination.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Grand Resort & Spa",
    category: "Hospitality",
    location: "Las Vegas, NV",
    description: "Hotel and casino complex with extensive coordination requirements.",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "University Science Building",
    category: "Education",
    location: "Boston, MA",
    description: "Research laboratory with specialized MEP systems.",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Regional Transit Hub",
    category: "Infrastructure",
    location: "Seattle, WA",
    description: "Multi-modal transit station with complex structural systems.",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Data Center Campus",
    category: "Industrial",
    location: "Phoenix, AZ",
    description: "Mission-critical facility with advanced MEP coordination.",
    image: "/placeholder.svg",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

      {/* Filter & Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === sector
                    ? "bg-gradient-brand text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
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
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
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
