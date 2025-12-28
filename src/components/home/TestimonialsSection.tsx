import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Arcon Infratek delivered exactly what we needed, on time and with zero rework. Their team understood our standards from day one.",
    author: "James Mitchell",
    role: "VDC Director",
    company: "Turner Construction",
  },
  {
    quote: "We've worked with several BIM providers. Arcon stands out for their communication and consistency. Models arrive ready to use.",
    author: "Sarah Chen",
    role: "BIM Manager",
    company: "Skanska USA",
  },
  {
    quote: "Their coordination work helped us avoid major clashes on site. The ROI was clear within the first month of the project.",
    author: "Michael Rodriguez",
    role: "Project Executive",
    company: "McCarthy Building",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What our <span className="text-gradient">partners</span> say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl border border-border"
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
