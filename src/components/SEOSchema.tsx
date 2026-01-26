import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOSchemaProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: "service" | "article" | "page";
  serviceName?: string;
  serviceDescription?: string;
  faqs?: FAQItem[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

/**
 * SEO Schema Component
 * Injects JSON-LD structured data and updates document meta tags
 * for better search engine visibility and AI platform optimization.
 */
const SEOSchema = ({
  title,
  description,
  canonicalUrl,
  type = "page",
  serviceName,
  serviceDescription,
  faqs,
  breadcrumbs,
  image,
  datePublished,
  dateModified,
}: SEOSchemaProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", description);

    // Build structured data array
    const structuredData: object[] = [];

    // Service Schema
    if (type === "service" && serviceName) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription || description,
        "provider": {
          "@type": "Organization",
          "name": "Arcon Infratek",
          "url": "https://infra-precision-forge.lovable.app"
        },
        "areaServed": "Worldwide",
        "serviceType": serviceName
      });
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    // Article Schema (for blog posts)
    if (type === "article") {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image || "https://infra-precision-forge.lovable.app/lovable-uploads/71dfcd54-f963-4eb1-9e1e-e24aa40f5fd0.png",
        "author": {
          "@type": "Organization",
          "name": "Arcon Infratek"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Arcon Infratek",
          "logo": {
            "@type": "ImageObject",
            "url": "https://infra-precision-forge.lovable.app/lovable-uploads/71dfcd54-f963-4eb1-9e1e-e24aa40f5fd0.png"
          }
        },
        "datePublished": datePublished || new Date().toISOString(),
        "dateModified": dateModified || new Date().toISOString()
      });
    }

    // Inject structured data
    const existingScripts = document.querySelectorAll('script[data-seo-schema]');
    existingScripts.forEach(script => script.remove());

    if (structuredData.length > 0) {
      structuredData.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', `schema-${index}`);
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[data-seo-schema]');
      scripts.forEach(script => script.remove());
    };
  }, [title, description, type, serviceName, serviceDescription, faqs, breadcrumbs, image, datePublished, dateModified]);

  // This component doesn't render anything visible
  return null;
};

export default SEOSchema;
