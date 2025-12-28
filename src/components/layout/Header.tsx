import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBlack from "@/assets/logo-black.png";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
    children: [
      { label: "VDC & BIM Consulting", href: "/services/vdc-bim-consulting" },
      { label: "Architectural BIM", href: "/services/architectural-bim" },
      { label: "Structural BIM", href: "/services/structural-bim" },
      { label: "MEP BIM", href: "/services/mep-bim" },
      { label: "Civil & Utilities BIM", href: "/services/civil-utilities-bim" },
      { label: "As-Built BIM", href: "/services/as-built-bim" },
      { label: "BIM Project Management", href: "/services/bim-project-management" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoBlack} alt="Arcon Infratek" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "nav-active"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-background rounded-lg shadow-lg border border-border p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-gradient" asChild>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-sm font-medium ${
                      isActive(item.href)
                        ? "bg-secondary text-foreground"
                        : "text-foreground/80"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
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
