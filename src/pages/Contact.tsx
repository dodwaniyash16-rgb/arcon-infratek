import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useReCaptcha } from "@/hooks/useReCaptcha";

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-+()]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Project details are required")
    .min(20, "Please provide at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (404) 919-1976",
    href: "tel:+14049191976",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@arconinfratek.com",
    href: "mailto:info@arconinfratek.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global Operations",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { verifyReCaptcha, isVerifying } = useReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const validateField = (field: keyof ContactFormData, value: string) => {
    const partialData = { ...formData, [field]: value };
    const result = contactSchema.safeParse(partialData);
    
    if (!result.success) {
      const fieldError = result.error.errors.find(e => e.path[0] === field);
      if (fieldError) {
        setErrors(prev => ({ ...prev, [field]: fieldError.message }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactFormData;
        if (!newErrors[field]) {
          newErrors[field] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Verify reCAPTCHA before submission
    const isHuman = await verifyReCaptcha("contact_form");
    if (!isHuman) {
      toast({
        title: "Verification Failed",
        description: "Please try again. If the problem persists, refresh the page.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service Interest: ${formData.service || "General inquiry"}

Project Details:
${formData.message}
    `.trim());

    window.location.href = `mailto:info@arconinfratek.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened!",
      description: "Please send the email to complete your inquiry. We'll respond within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof ContactFormData, value);
  };

  const isLoading = isSubmitting || isVerifying;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Contact Us</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's discuss your{" "}
              <span className="text-gradient">BIM needs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your construction workflow? Get in touch with our 
              team for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 icon-gradient" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-destructive" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Company Name"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        className={errors.company ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-sm text-destructive" role="alert">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+1 (234) 567-890"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-sm text-destructive" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="VDC & BIM Consulting">VDC & BIM Consulting</option>
                      <option value="Architectural BIM">Architectural BIM</option>
                      <option value="Structural BIM">Structural BIM</option>
                      <option value="MEP BIM">MEP BIM</option>
                      <option value="Civil & Utilities BIM">Civil & Utilities BIM</option>
                      <option value="As-Built BIM">As-Built BIM</option>
                      <option value="BIM Project Management">BIM Project Management</option>
                      <option value="BIM Coordination">BIM Coordination</option>
                      <option value="Shop Drawings">Shop Drawings</option>
                      <option value="Scan to BIM">Scan to BIM</option>
                      <option value="Estimation & QTO">Estimation & QTO</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="message">Project Details *</Label>
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/2000
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your project, timeline, and specific requirements..."
                      rows={5}
                      maxLength={2000}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isVerifying ? "Verifying..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
