import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const mobileServices = [
  {
    category: "BIM Services",
    items: [
      { label: "BIM Modeling", href: "/services/bim-modeling" },
      { label: "BIM Coordination", href: "/services/bim-coordination" },
      { label: "BIM Project Management", href: "/services/bim-project-management" },
      { label: "VDC & BIM Consulting", href: "/services/vdc-bim-consulting" },
      { label: "Shop Drawings", href: "/services/shop-drawings" },
      { label: "Estimation & QTO", href: "/services/estimation-qto" },
    ],
  },
  {
    category: "Design & Documentation",
    items: [
      { label: "Scan to BIM", href: "/services/scan-to-bim" },
      { label: "BIM Auditing", href: "/services/bim-auditing" },
      { label: "CAD Drafting", href: "/services/cad-drafting" },
      { label: "BIM Content Creation", href: "/services/bim-content-creation" },
      { label: "MEP BIM Services", href: "/services/mep-bim" },
      { label: "Structural BIM", href: "/services/structural-bim" },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 text-destructive">
      <div className="container-custom">
        <nav
          className={`flex items-center justify-between px-6 py-2 transition-all duration-300 ${
            isScrolled
              ? "bg-white shadow-lg rounded-full border border-border/30"
              : "bg-white/95 backdrop-blur-sm rounded-full border border-border/30"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="Arcon Infratek"
              src="/lovable-uploads/71dfcd54-f963-4eb1-9e1e-e24aa40f5fd0.png"
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors rounded-full ${
                    isActive(item.href)
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 font-normal"
                  }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mega Menu - Desktop */}
        <div 
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-background rounded-2xl border border-border shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasMegaMenu ? (
                    <>
                      {/* Services with accordion */}
                      <button
                        onClick={() =>
                          setExpandedMobileCategory(
                            expandedMobileCategory === "services" ? null : "services"
                          )
                        }
                        className={`w-full flex items-center justify-between px-6 py-3 text-sm ${
                          isActive(item.href)
                            ? "bg-secondary text-foreground font-medium"
                            : "text-muted-foreground font-normal"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedMobileCategory === "services" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMobileCategory === "services" && (
                        <div className="bg-secondary/30 py-2">
                          {mobileServices.map((category) => (
                            <div key={category.category} className="px-6 py-2">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                {category.category}
                              </p>
                              {category.items.map((service) => (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className="flex items-center gap-2 py-2 text-sm text-foreground hover:text-accent"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <ChevronRight className="h-3 w-3" />
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <div className="px-6 py-2">
                            <Link
                              to="/services"
                              className="text-sm font-medium text-accent"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-6 py-3 text-sm ${
                        isActive(item.href)
                          ? "bg-secondary text-foreground font-medium"
                          : "text-muted-foreground font-normal"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-6 pt-4">
                <Button className="w-full" asChild>
                  <Link to="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
