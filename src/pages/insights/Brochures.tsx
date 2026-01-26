import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { FileText, Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { toast } from "sonner";

interface Brochure {
  title: string;
  description: string;
  pages: number;
  size: string;
}

const brochures: Brochure[] = [
  {
    title: "Company Overview",
    description: "Learn about Arcon Infratek's services, capabilities, and global reach.",
    pages: 12,
    size: "2.4 MB",
  },
  {
    title: "MEP BIM Services",
    description: "Detailed information about our MEP modeling and coordination services.",
    pages: 8,
    size: "1.8 MB",
  },
  {
    title: "Scan to BIM Capabilities",
    description: "Overview of our point cloud processing and as-built modeling services.",
    pages: 6,
    size: "3.2 MB",
  },
  {
    title: "Case Studies Collection",
    description: "Selected project case studies showcasing our work across sectors.",
    pages: 20,
    size: "5.6 MB",
  },
  {
    title: "VDC Consulting Services",
    description: "How we help organizations implement and optimize BIM workflows.",
    pages: 10,
    size: "2.1 MB",
  },
];

const requestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  company: z.string().trim().max(100).optional().or(z.literal("")),
});

type RequestFormData = z.infer<typeof requestSchema>;

const Brochures = () => {
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<RequestFormData>({
    name: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RequestFormData, string>>>({});

  const handleRequestClick = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
    setIsDialogOpen(true);
    setIsSuccess(false);
    setFormData({ name: "", email: "", company: "" });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = requestSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof RequestFormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof RequestFormData;
        if (!newErrors[field]) {
          newErrors[field] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Create mailto link
    const subject = encodeURIComponent(`Brochure Request: ${selectedBrochure?.title}`);
    const body = encodeURIComponent(`
Hi,

I would like to request the following brochure:

Brochure: ${selectedBrochure?.title}

My Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}

Please send the brochure to my email address.

Thank you!
    `.trim());

    window.location.href = `mailto:info@arconinfratek.com?subject=${subject}&body=${body}`;

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Your email client has opened. Please send the email to complete your request.");
    }, 500);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedBrochure(null);
    setIsSuccess(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Resources</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Downloadable{" "}
              <span className="text-gradient">brochures</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Request our collection of brochures and resources to learn more 
              about our capabilities and services.
            </p>
          </div>
        </div>
      </section>

      {/* Brochures List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {brochures.map((brochure, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 icon-gradient" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {brochure.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {brochure.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{brochure.pages} pages</span>
                      <span>PDF • {brochure.size}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleRequestClick(brochure)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Request
                </Button>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-sm text-muted-foreground text-center">
              Brochures will be sent to your email within 24 hours of your request.
            </p>
          </div>
        </div>
      </section>

      {/* Request Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Brochure</DialogTitle>
            <DialogDescription>
              {selectedBrochure?.title}
            </DialogDescription>
          </DialogHeader>

          {isSuccess ? (
            <div className="py-8 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">
                Request Initiated!
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Please send the email that opened in your email client to complete your request.
              </p>
              <Button onClick={handleCloseDialog} variant="outline">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="request-name">Name *</Label>
                <Input
                  id="request-name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="request-email">Email *</Label>
                <Input
                  id="request-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="request-company">Company</Label>
                <Input
                  id="request-company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company (optional)"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Request Brochure
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Brochures;
