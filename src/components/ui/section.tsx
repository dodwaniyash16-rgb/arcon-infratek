import { cn } from "@/lib/utils";
import React from "react";
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
  return <section id={id} className={cn("section-padding", className)}>
      {container ? <div className="container-custom">{children}</div> : children}
    </section>;
};
interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}
export const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
  className
}: SectionHeaderProps) => {
  const isStringTitle = typeof title === 'string';
  return <div className={cn("mb-12", centered && "text-center max-w-3xl mx-auto", className)}>
      {label && <span className="badge-pill mb-4 text-muted-foreground font-sans text-center font-semibold my-[15px] text-sm">
          {label}
        </span>}
      {isStringTitle ? <h2 dangerouslySetInnerHTML={{
      __html: title as string
    }} className="font-heading text-3xl md:text-4xl font-bold mb-4 px-[50px]" /> : <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 px-[50px]">
          {title}
        </h2>}
      {description && <p className="leading-relaxed text-base text-slate-500">
          {description}
        </p>}
    </div>;
};
export default Section;