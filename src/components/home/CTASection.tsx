import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your{" "}
            <span className="text-gradient">BIM workflow?</span>
          </h2>
          
          <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you deliver projects faster, 
            with greater accuracy and coordination certainty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="xl" variant="gradient" asChild>
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-background/30 text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-background/70">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" />
              +1 (234) 567-890
            </a>
            <a 
              href="mailto:info@arconinfratek.com" 
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@arconinfratek.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
