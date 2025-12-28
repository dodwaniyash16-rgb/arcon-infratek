import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, Users, Play, Download, Newspaper } from "lucide-react";

const insightCategories = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Industry insights, tips, and best practices for BIM professionals.",
    href: "/insights/blog",
    count: "25+ Articles",
  },
  {
    icon: Download,
    title: "Brochures",
    description: "Downloadable resources about our services and capabilities.",
    href: "/insights/brochures",
    count: "10+ Resources",
  },
  {
    icon: Users,
    title: "Testimonials",
    description: "Hear what our clients say about working with Arcon Infratek.",
    href: "/insights/testimonials",
    count: "50+ Reviews",
  },
  {
    icon: Play,
    title: "Media",
    description: "Videos, webinars, and presentations showcasing our work.",
    href: "/insights/media",
    count: "15+ Videos",
  },
  {
    icon: Newspaper,
    title: "Media Kit",
    description: "Press releases, logos, and brand assets for media use.",
    href: "/insights/media-kit",
    count: "Brand Assets",
  },
];

const featuredPosts = [
  {
    title: "The Future of BIM: Trends to Watch in 2024",
    category: "Industry Trends",
    date: "Dec 15, 2024",
    excerpt: "Explore the emerging technologies and methodologies shaping the future of BIM.",
    href: "/insights/blog/future-of-bim-2024",
  },
  {
    title: "Maximizing ROI with Effective BIM Coordination",
    category: "Best Practices",
    date: "Dec 10, 2024",
    excerpt: "Learn how proper coordination can significantly reduce construction costs.",
    href: "/insights/blog/maximizing-roi-bim-coordination",
  },
  {
    title: "Scan to BIM: Best Practices for Accuracy",
    category: "Technical Guide",
    date: "Dec 5, 2024",
    excerpt: "A comprehensive guide to achieving high-accuracy as-built models.",
    href: "/insights/blog/scan-to-bim-best-practices",
  },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Insights</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Knowledge and resources for{" "}
              <span className="text-gradient">BIM excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest articles, resources, and insights 
              on BIM best practices and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightCategories.map((category, index) => (
              <Link 
                key={index} 
                to={category.href}
                className="group bg-card p-8 rounded-xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-all duration-300">
                  <category.icon className="h-7 w-7 icon-gradient group-hover:text-white group-hover:[background:none] group-hover:[-webkit-text-fill-color:white]" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent font-medium">{category.count}</span>
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="section-label mb-4">Featured Articles</p>
              <h2 className="font-heading text-3xl font-bold">
                Latest from our <span className="text-gradient">blog</span>
              </h2>
            </div>
            <Link 
              to="/insights/blog" 
              className="hidden md:flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link 
                key={index} 
                to={post.href}
                className="group bg-background p-6 rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-2 py-0.5 bg-secondary rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/insights/blog" 
              className="inline-flex items-center gap-2 text-accent font-medium"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
