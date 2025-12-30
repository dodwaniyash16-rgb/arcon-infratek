import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/portfolio/ProjectDetail";
import Insights from "./pages/Insights";

// Service Pages
import VDCBIMConsulting from "./pages/services/VDCBIMConsulting";
import ArchitecturalBIM from "./pages/services/ArchitecturalBIM";
import StructuralBIM from "./pages/services/StructuralBIM";
import MEPBIM from "./pages/services/MEPBIM";
import CivilUtilitiesBIM from "./pages/services/CivilUtilitiesBIM";
import AsBuiltBIM from "./pages/services/AsBuiltBIM";
import BIMProjectManagement from "./pages/services/BIMProjectManagement";
import BIMModeling from "./pages/services/BIMModeling";
import BIMCoordination from "./pages/services/BIMCoordination";
import ShopDrawings from "./pages/services/ShopDrawings";
import EstimationQTO from "./pages/services/EstimationQTO";
import ScanToBIM from "./pages/services/ScanToBIM";
import BIMAuditing from "./pages/services/BIMAuditing";
import CADDrafting from "./pages/services/CADDrafting";
import BIMContentCreation from "./pages/services/BIMContentCreation";

// Insights Pages
import Blog from "./pages/insights/Blog";
import BlogPost from "./pages/insights/BlogPost";
import Brochures from "./pages/insights/Brochures";
import Testimonials from "./pages/insights/Testimonials";
import Media from "./pages/insights/Media";
import MediaKit from "./pages/insights/MediaKit";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/vdc-bim-consulting" element={<VDCBIMConsulting />} />
          <Route path="/services/architectural-bim" element={<ArchitecturalBIM />} />
          <Route path="/services/structural-bim" element={<StructuralBIM />} />
          <Route path="/services/mep-bim" element={<MEPBIM />} />
          <Route path="/services/civil-utilities-bim" element={<CivilUtilitiesBIM />} />
          <Route path="/services/as-built-bim" element={<AsBuiltBIM />} />
          <Route path="/services/bim-project-management" element={<BIMProjectManagement />} />
          <Route path="/services/bim-modeling" element={<BIMModeling />} />
          <Route path="/services/bim-coordination" element={<BIMCoordination />} />
          <Route path="/services/shop-drawings" element={<ShopDrawings />} />
          <Route path="/services/estimation-qto" element={<EstimationQTO />} />
          <Route path="/services/scan-to-bim" element={<ScanToBIM />} />
          <Route path="/services/bim-auditing" element={<BIMAuditing />} />
          <Route path="/services/cad-drafting" element={<CADDrafting />} />
          <Route path="/services/bim-content-creation" element={<BIMContentCreation />} />
          
          {/* Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          {/* Insights */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/insights/blog/:slug" element={<BlogPost />} />
          <Route path="/insights/brochures" element={<Brochures />} />
          <Route path="/insights/testimonials" element={<Testimonials />} />
          <Route path="/insights/media" element={<Media />} />
          <Route path="/insights/media-kit" element={<MediaKit />} />
          <Route path="/insights/media-kit" element={<MediaKit />} />
          
          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
