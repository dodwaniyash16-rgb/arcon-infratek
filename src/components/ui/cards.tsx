import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight, CheckCircle, AlertTriangle } from "lucide-react";

// Service Card - with ArrowUpRight icon
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}
export const ServiceCard = ({
  title,
  description,
  href,
  icon: Icon
}: ServiceCardProps) => {
  return <Link to={href} className="group block p-6 rounded-xl border border-border card-hover relative bg-primary-foreground">
      {/* Arrow icon top-right */}
      <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors shadow-none bg-primary" />
      
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 border-accent border-solid border-0">
        <AlertTriangle className="h-6 w-6 text-sidebar-primary bg-primary" />
      </div>
      <h3 className="font-heading font-semibold mb-2 group-hover:text-foreground transition-colors text-base">
        {title}
      </h3>
      <p className="leading-relaxed text-xs font-semibold text-slate-400">
        {description}
      </p>
    </Link>;
};

// Stat Card - simple centered text, no icon
interface StatCardProps {
  icon?: LucideIcon;
  value: string;
  label: string;
}
export const StatCard = ({
  value,
  label
}: StatCardProps) => {
  return <div className="text-center p-4">
      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>;
};

// Process Step - solid bg-foreground circle
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}
export const ProcessStep = ({
  number,
  title,
  description
}: ProcessStepProps) => {
  return <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>;
};

// Feature Block - icon box with bg-secondary
interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
export const FeatureBlock = ({
  icon: Icon,
  title,
  description
}: FeatureBlockProps) => {
  return <div className="p-8 rounded-xl border border-border bg-primary-foreground">
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <h3 className="font-heading font-semibold mb-3 text-lg">{title}</h3>
      <p className="leading-relaxed text-sm text-slate-400 font-semibold">{description}</p>
    </div>;
};

// Testimonial Card - bg-secondary avatar, no gradient
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}
export const TestimonialCard = ({
  quote,
  author,
  role,
  company
}: TestimonialCardProps) => {
  return <div className="bg-background p-8 rounded-xl border border-border">
      <CheckCircle className="h-8 w-8 text-muted-foreground mb-6 opacity-50" />
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{author}</div>
          <div className="text-xs text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>;
};

// Sector Chip
interface SectorChipProps {
  label: string;
  href?: string;
}
export const SectorChip = ({
  label,
  href
}: SectorChipProps) => {
  const className = "px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer";
  if (href) {
    return <Link to={href} className={className}>
        {label}
      </Link>;
  }
  return <span className={className}>{label}</span>;
};

// Stakeholder Card - for Our Customers section
interface StakeholderCardProps {
  icon: LucideIcon;
  title: string;
}
export const StakeholderCard = ({
  icon: Icon,
  title
}: StakeholderCardProps) => {
  return <div className="flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-lg py-[20px] px-[20px]">
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
        <Icon className="h-7 w-7 icon-gradient" />
      </div>
      <span className="text-sm font-medium text-center text-foreground">{title}</span>
    </div>;
};

// Project Card - for Our Work section
interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  href: string;
}
export const ProjectCard = ({
  image,
  title,
  category,
  href
}: ProjectCardProps) => {
  return <Link to={href} className="group block relative rounded-xl overflow-hidden card-hover">
      <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
        <p className="text-white/80 text-xs uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </Link>;
};