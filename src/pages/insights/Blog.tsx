import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "The Future of BIM: Trends to Watch in 2024",
    category: "Industry Trends",
    author: "John Smith",
    date: "Dec 15, 2024",
    excerpt: "Explore the emerging technologies and methodologies shaping the future of BIM and construction technology.",
    slug: "future-of-bim-2024",
    featured: true,
  },
  {
    title: "Maximizing ROI with Effective BIM Coordination",
    category: "Best Practices",
    author: "Sarah Johnson",
    date: "Dec 10, 2024",
    excerpt: "Learn how proper coordination can significantly reduce construction costs and improve project outcomes.",
    slug: "maximizing-roi-bim-coordination",
    featured: false,
  },
  {
    title: "Scan to BIM: Best Practices for Accuracy",
    category: "Technical Guide",
    author: "Mike Chen",
    date: "Dec 5, 2024",
    excerpt: "A comprehensive guide to achieving high-accuracy as-built models from point cloud data.",
    slug: "scan-to-bim-best-practices",
    featured: false,
  },
  {
    title: "MEP Coordination: Reducing Field Conflicts",
    category: "Technical Guide",
    author: "David Lee",
    date: "Nov 28, 2024",
    excerpt: "Strategies for effective MEP coordination that minimize costly field modifications.",
    slug: "mep-coordination-reducing-conflicts",
    featured: false,
  },
  {
    title: "LOD Specifications: A Complete Guide",
    category: "Standards",
    author: "Emily Brown",
    date: "Nov 20, 2024",
    excerpt: "Understanding Level of Development specifications and their impact on project deliverables.",
    slug: "lod-specifications-guide",
    featured: false,
  },
  {
    title: "BIM for Facility Management: Beyond Construction",
    category: "Applications",
    author: "John Smith",
    date: "Nov 15, 2024",
    excerpt: "How BIM models can drive value throughout the building lifecycle.",
    slug: "bim-facility-management",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Blog</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              BIM insights and{" "}
              <span className="text-gradient">industry knowledge</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert perspectives on BIM best practices, industry trends, and 
              construction technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container-custom">
            <Link 
              to={`/insights/blog/${featuredPost.slug}`}
              className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video md:aspect-auto bg-secondary" />
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="px-2 py-0.5 bg-gradient-brand text-white rounded text-xs font-medium">
                      Featured
                    </span>
                    <span className="px-2 py-0.5 bg-secondary rounded text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 pb-24">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link 
                key={index}
                to={`/insights/blog/${post.slug}`}
                className="group bg-card p-6 rounded-xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-2 py-0.5 bg-secondary rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
