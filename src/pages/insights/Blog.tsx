import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime} read</span>
                    <span>·</span>
                    <span>{featuredPost.author}</span>
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
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/insights/blog/${post.slug}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.author}
                    </span>
                    <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
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
