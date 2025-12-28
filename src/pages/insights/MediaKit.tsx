import Layout from "@/components/layout/Layout";
import { Download, Image, FileText, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const assets = [
  {
    icon: Image,
    title: "Logo Package",
    description: "All logo variations including color, black, white, and gradient versions.",
    formats: "PNG, SVG, EPS",
  },
  {
    icon: Palette,
    title: "Brand Colors",
    description: "Official brand color palette with hex codes and usage guidelines.",
    formats: "PDF, ASE",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description: "Complete brand identity manual with usage rules and examples.",
    formats: "PDF",
  },
  {
    icon: Image,
    title: "Executive Photos",
    description: "High-resolution photos of leadership team for press use.",
    formats: "JPG, PNG",
  },
];

const MediaKit = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Media Kit</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Press and{" "}
              <span className="text-gradient">brand assets</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Download official Arcon Infratek logos, brand guidelines, and 
              press materials for media use.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6">About Arcon Infratek</h2>
              <p className="text-muted-foreground mb-4">
                Arcon Infratek is a global BIM and VDC services provider specializing in 
                precision modeling, coordination, and construction documentation for 
                architecture, engineering, and construction firms worldwide.
              </p>
              <p className="text-muted-foreground">
                Founded with a mission to deliver fast, accurate, and accountable BIM 
                services, Arcon Infratek has grown to serve clients across multiple 
                continents, delivering excellence on projects ranging from healthcare 
                facilities to high-rise commercial developments.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold mb-8">Brand Assets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {assets.map((asset, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <asset.icon className="h-6 w-6 icon-gradient" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-1">{asset.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{asset.formats}</span>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaKit;
