import { Link } from "react-router-dom";
import { LucideIcon, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// Service Card
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, href, icon: Icon }: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className="group block bg-card p-6 rounded-xl border border-border card-hover"
    >
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon className="h-6 w-6 icon-gradient" />
      </div>
      <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

// Stat Card
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 icon-gradient" />
      </div>
      <div>
        <div className="font-heading text-xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
};

// Process Step
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Feature Block
interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureBlock = ({ icon: Icon, title, description }: FeatureBlockProps) => {
  return (
    <div className="bg-card p-8 rounded-xl border border-border">
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 icon-gradient" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

// Testimonial Card
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-xl border border-border">
      <Quote className="h-8 w-8 icon-gradient mb-6 opacity-50" />
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{author}</div>
          <div className="text-xs text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sector Chip
interface SectorChipProps {
  label: string;
  href?: string;
}

export const SectorChip = ({ label, href }: SectorChipProps) => {
  const className = "px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer";
  
  if (href) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }
  
  return <span className={className}>{label}</span>;
};
