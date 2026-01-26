import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Search className="h-4 w-4" />
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/services" 
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Services
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/portfolio" 
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Portfolio
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/about" 
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/contact" 
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
