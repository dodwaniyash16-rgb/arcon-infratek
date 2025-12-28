import Layout from "@/components/layout/Layout";
import { Play, Clock } from "lucide-react";

const videos = [
  {
    title: "Introduction to Arcon Infratek",
    description: "Learn about our company, services, and what makes us different.",
    duration: "3:45",
    category: "Company",
  },
  {
    title: "BIM Coordination Best Practices",
    description: "Expert tips on effective multi-discipline coordination workflows.",
    duration: "12:30",
    category: "Webinar",
  },
  {
    title: "Scan to BIM Process Walkthrough",
    description: "See how we transform point cloud data into accurate BIM models.",
    duration: "8:15",
    category: "Tutorial",
  },
  {
    title: "MEP Shop Drawing Production",
    description: "Our process for creating fabrication-ready shop drawings.",
    duration: "6:20",
    category: "Tutorial",
  },
  {
    title: "Client Success Story: Healthcare Project",
    description: "How we helped deliver a complex hospital expansion on time.",
    duration: "5:10",
    category: "Case Study",
  },
  {
    title: "The Future of VDC in Construction",
    description: "Industry trends and emerging technologies in virtual design.",
    duration: "15:45",
    category: "Webinar",
  },
];

const Media = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Media</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Videos and{" "}
              <span className="text-gradient">webinars</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Watch our video content including tutorials, webinars, and 
              project showcases.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-video bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="px-2 py-0.5 bg-secondary rounded text-xs font-medium">
                      {video.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
