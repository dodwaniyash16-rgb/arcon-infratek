import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Arcon Infratek transformed our BIM workflow. Their attention to detail and commitment to deadlines has made them an invaluable partner.",
    author: "Sarah Johnson",
    role: "Project Director",
    company: "Turner Construction",
  },
  {
    quote: "The quality of their modeling work is exceptional. They consistently deliver clash-free coordination that saves us time and money on site.",
    author: "Michael Chen",
    role: "BIM Manager",
    company: "Skanska USA",
  },
  {
    quote: "Working with Arcon has been seamless. Their team understands construction and delivers models that are actually buildable.",
    author: "David Rodriguez",
    role: "VP of Operations",
    company: "McCarthy Building",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Trusted by industry{" "}
            <span className="text-gradient">partners</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 icon-gradient mb-6 opacity-50" />
              
              {/* Quote Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
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
  );
};

export default TestimonialsSection;
