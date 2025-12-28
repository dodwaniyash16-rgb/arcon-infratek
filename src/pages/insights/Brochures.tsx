import Layout from "@/components/layout/Layout";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const brochures = [
  {
    title: "Company Overview",
    description: "Learn about Arcon Infratek's services, capabilities, and global reach.",
    pages: 12,
    size: "2.4 MB",
  },
  {
    title: "MEP BIM Services",
    description: "Detailed information about our MEP modeling and coordination services.",
    pages: 8,
    size: "1.8 MB",
  },
  {
    title: "Scan to BIM Capabilities",
    description: "Overview of our point cloud processing and as-built modeling services.",
    pages: 6,
    size: "3.2 MB",
  },
  {
    title: "Case Studies Collection",
    description: "Selected project case studies showcasing our work across sectors.",
    pages: 20,
    size: "5.6 MB",
  },
  {
    title: "VDC Consulting Services",
    description: "How we help organizations implement and optimize BIM workflows.",
    pages: 10,
    size: "2.1 MB",
  },
];

const Brochures = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Resources</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Downloadable{" "}
              <span className="text-gradient">brochures</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Access our collection of brochures and resources to learn more 
              about our capabilities and services.
            </p>
          </div>
        </div>
      </section>

      {/* Brochures List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {brochures.map((brochure, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 icon-gradient" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {brochure.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {brochure.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{brochure.pages} pages</span>
                      <span>PDF • {brochure.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brochures;
