import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAStripProps {
  title: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "dark" | "light";
  className?: string;
}

export const CTAStrip = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "dark",
  className,
}: CTAStripProps) => {
  const isDark = variant === "dark";
  
  return (
    <section className={cn(
      "section-padding-lg",
      isDark ? "bg-foreground text-background" : "bg-secondary",
      className
    )}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={cn(
              "font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
              isDark && "[&_.text-gradient]:text-background [&_.text-gradient]:bg-none"
            )}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          {description && (
            <p className={cn(
              "text-lg mb-10 max-w-2xl mx-auto",
              isDark ? "text-background/70" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className={cn(
                isDark 
                  ? "bg-background text-foreground hover:bg-background/90" 
                  : "bg-foreground text-background hover:bg-foreground/90"
              )}
              asChild
            >
              <Link to={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className={cn(
                  isDark && "border-background/30 text-background hover:bg-background/10"
                )}
                asChild
              >
                <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
