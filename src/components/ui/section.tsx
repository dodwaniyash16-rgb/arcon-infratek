import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
}

export const Section = ({ 
  children, 
  className, 
  container = true,
  id 
}: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      {container ? (
        <div className="container-custom">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center max-w-3xl mx-auto",
      className
    )}>
      {label && (
        <span className="badge-pill mb-4">{label}</span>
      )}
      <h2 
        className="font-heading text-3xl md:text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default Section;
