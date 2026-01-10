import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [{
      label: "BIM Modeling",
      href: "/services/bim-modeling"
    }, {
      label: "BIM Coordination",
      href: "/services/bim-coordination"
    }, {
      label: "Shop Drawings",
      href: "/services/shop-drawings"
    }, {
      label: "Estimation & QTO",
      href: "/services/estimation-qto"
    }, {
      label: "Scan to BIM",
      href: "/services/scan-to-bim"
    }, {
      label: "BIM Auditing",
      href: "/services/bim-auditing"
    }],
    company: [{
      label: "About Us",
      href: "/about"
    }, {
      label: "Portfolio",
      href: "/portfolio"
    }, {
      label: "Careers",
      href: "/careers"
    }, {
      label: "Insights",
      href: "/insights"
    }, {
      label: "Contact",
      href: "/contact"
    }],
    resources: [{
      label: "Blog",
      href: "/insights/blog"
    }, {
      label: "Brochures",
      href: "/insights/brochures"
    }, {
      label: "Testimonials",
      href: "/insights/testimonials"
    }, {
      label: "Media Kit",
      href: "/insights/media-kit"
    }],
    legal: [{
      label: "Privacy Policy",
      href: "/privacy-policy"
    }, {
      label: "Cookie Policy",
      href: "/cookie-policy"
    }]
  };
  const socialLinks = [{
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  }, {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter"
  }, {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube"
  }, {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram"
  }];
  return <footer className="bg-foreground text-background">
      {/* CTA Bar */}
      <div className="border-b border-background/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-semibold">
                Ready to start your next project?
              </h3>
              <p className="text-background/60 text-sm mt-1">
                Get in touch for a free consultation and project estimate.
              </p>
            </div>
            <Button variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:text-background" asChild>
              <Link to="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 my-0 mx-0 py-0 pb-[6px]">
            <Link to="/" className="inline-block mb-6">
              <img src={logoWhite} alt="Arcon Infratek" className="h-20 w-auto" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4 max-w-sm">
              Delivering precision BIM and VDC solutions that transform construction 
              projects. Fast, accurate, and accountable.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@arconinfratek.com" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                info@arconinfratek.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Construction Way, Building District, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Arcon Infratek. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors" aria-label={social.label}>
                  
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;