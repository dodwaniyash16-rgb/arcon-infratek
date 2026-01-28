import Layout from "@/components/layout/Layout";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Arcon Infratek transformed our BIM workflow. Their attention to detail and commitment to deadlines has made them an invaluable partner.",
    author: "Sarah Johnson",
    role: "Project Director",
    company: "Deskon Construction",
    rating: 5,
  },
  {
    quote: "The quality of their modeling work is exceptional. They consistently deliver clash-free coordination that saves us time and money on site.",
    author: "Michael Chen",
    role: "BIM Manager",
    company: "Skanska USA",
    rating: 5,
  },
  {
    quote: "Working with Arcon has been seamless. Their team understands construction and delivers models that are actually buildable.",
    author: "David Rodriguez",
    role: "VP of Operations",
    company: "McCarthy Building",
    rating: 5,
  },
  {
    quote: "Their MEP coordination expertise is unmatched. We've reduced our RFIs significantly since partnering with them.",
    author: "Jennifer Walsh",
    role: "MEP Coordinator",
    company: "MKS Construction",
    rating: 5,
  },
  {
    quote: "Arcon's scan-to-BIM services are incredibly accurate. They've become our go-to partner for renovation projects.",
    author: "Robert Kim",
    role: "Senior Project Manager",
    company: "Gilbane Building",
    rating: 5,
  },
  {
    quote: "The responsiveness and quality of their team is remarkable. They truly operate as an extension of our own staff.",
    author: "Amanda Foster",
    role: "VDC Director",
    company: "Holder Construction",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Testimonials</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              What our clients{" "}
              <span className="text-gradient">say about us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hear from the industry professionals who trust Arcon Infratek 
              for their BIM and VDC needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <Quote className="h-8 w-8 icon-gradient mb-6 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
