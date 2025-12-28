import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding-lg bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to streamline{" "}
            <span className="text-gradient">BIM production</span> and{" "}
            <span className="text-gradient">coordination?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Share your scope and timeline. We will respond with a clear plan and estimate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
