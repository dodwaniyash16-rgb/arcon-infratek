import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Clock, Briefcase, ArrowLeft, Upload, Plus, X, Loader2, FileText } from "lucide-react";
import { toast } from "sonner";
import type { JobOpening } from "./JobDetailsDialog";
import { useReCaptcha } from "@/hooks/useReCaptcha";

interface JobApplicationDialogProps {
  job: JobOpening | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack: () => void;
}

// Zod validation schema
const applicationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  middleName: z
    .string()
    .trim()
    .max(50, "Middle name must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  gender: z
    .string()
    .min(1, "Gender is required"),
  dateOfBirth: z.string().optional().or(z.literal("")),
  experienceYears: z.string().optional().or(z.literal("")),
  experienceMonths: z.string().optional().or(z.literal("0")),
  currentSalary: z.string().optional().or(z.literal("")),
  expectedSalary: z.string().optional().or(z.literal("")),
  availableToJoin: z.string().optional().or(z.literal("")),
  currentLocation: z
    .string()
    .trim()
    .max(100, "Location must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  tenthPercentage: z
    .string()
    .trim()
    .min(1, "10th percentage/CGPA is required")
    .max(10, "Must be less than 10 characters"),
  twelfthPercentage: z
    .string()
    .trim()
    .min(1, "12th/Diploma percentage is required")
    .max(10, "Must be less than 10 characters"),
  collegeName: z
    .string()
    .trim()
    .min(1, "College/University name is required")
    .max(200, "Must be less than 200 characters"),
  additionalInfo: z
    .string()
    .trim()
    .max(1000, "Additional info must be less than 1000 characters")
    .optional()
    .or(z.literal("")),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;
type FormErrors = Partial<Record<keyof ApplicationFormData, string>>;

const initialFormData: ApplicationFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  dateOfBirth: "",
  experienceYears: "",
  experienceMonths: "0",
  currentSalary: "",
  expectedSalary: "",
  availableToJoin: "",
  currentLocation: "",
  tenthPercentage: "",
  twelfthPercentage: "",
  collegeName: "",
  additionalInfo: "",
};

const JobApplicationDialog = ({ job, open, onOpenChange, onBack }: JobApplicationDialogProps) => {
  const { verifyReCaptcha, isVerifying } = useReCaptcha();
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string>("");
  const [additionalDocs, setAdditionalDocs] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) return null;

  const validateField = (field: keyof ApplicationFormData, value: string) => {
    const partialData = { ...formData, [field]: value };
    const result = applicationSchema.safeParse(partialData);
    
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

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof ApplicationFormData, value: string) => {
    validateField(field, value);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeError("");
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setResumeError("Resume size should be smaller than 10 MB");
        return;
      }
      const allowedTypes = ['.doc', '.pdf', '.docx', '.rtf', '.odt'];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!allowedTypes.includes(ext)) {
        setResumeError("Only .doc, .pdf, .docx, .rtf, .odt files are allowed");
        return;
      }
      setResume(file);
    }
  };

  const handleAdditionalDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles = Array.from(files).filter((file) => {
        if (file.size > 10 * 1024 * 1024) {
          toast.error(`${file.name} is too large. Max size is 10 MB`);
          return false;
        }
        return true;
      });
      setAdditionalDocs((prev) => [...prev, ...validFiles]);
    }
  };

  const removeAdditionalDoc = (index: number) => {
    setAdditionalDocs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields with Zod
    const result = applicationSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ApplicationFormData;
        if (!newErrors[field]) {
          newErrors[field] = err.message;
        }
      });
      setErrors(newErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    // Validate resume
    if (!resume) {
      setResumeError("Please upload your resume");
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    // Verify reCAPTCHA before submission
    const isHuman = await verifyReCaptcha("job_application");
    if (!isHuman) {
      toast.error("Verification failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email body with application details
      const emailBody = `
Job Application for: ${job.title}

PERSONAL DETAILS
================
Name: ${formData.firstName} ${formData.middleName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Gender: ${formData.gender}
Date of Birth: ${formData.dateOfBirth || "Not provided"}
Current Location: ${formData.currentLocation || "Not provided"}

EXPERIENCE
==========
Total Experience: ${formData.experienceYears || "0"} years ${formData.experienceMonths} months
Current Salary: ${formData.currentSalary ? formData.currentSalary + " INR" : "Not provided"}
Expected Salary: ${formData.expectedSalary ? formData.expectedSalary + " INR" : "Not provided"}
Available to Join: ${formData.availableToJoin ? formData.availableToJoin + " days" : "Not provided"}

EDUCATION
=========
10th Percentage/CGPA: ${formData.tenthPercentage}
12th/Diploma Percentage/CGPA: ${formData.twelfthPercentage}
College/Board/University: ${formData.collegeName}

ADDITIONAL INFORMATION
=====================
${formData.additionalInfo || "N/A"}

---
Resume: ${resume.name}
Additional Documents: ${additionalDocs.length > 0 ? additionalDocs.map(d => d.name).join(", ") : "None"}

NOTE: Please attach your resume and documents before sending this email.
      `.trim();

      // Create mailto link with application details
      const subject = encodeURIComponent(`Job Application: ${job.title} - ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(emailBody);
      
      // Open mailto link
      window.location.href = `mailto:info@arconinfratek.com?subject=${subject}&body=${body}`;

      toast.success(
        "Your email client will open with your application details. Please attach your resume and documents before sending.",
        { duration: 8000 }
      );

      // Reset form after short delay
      setTimeout(() => {
        setFormData(initialFormData);
        setErrors({});
        setResume(null);
        setResumeError("");
        setAdditionalDocs([]);
        onOpenChange(false);
      }, 1000);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = isSubmitting || isVerifying;

  const getInputClassName = (field: keyof ApplicationFormData) => {
    return errors[field] ? "border-destructive focus-visible:ring-destructive" : "";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-accent/10 -mx-6 -mt-6 px-6 py-6 mb-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-bold text-foreground">
              {job.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {job.experience}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.type}
            </span>
          </div>
        </div>

        {/* Back link */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-accent hover:underline mb-4 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to job details
        </button>

        <h2 className="font-heading text-xl font-semibold mb-6">Apply for this job</h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Resume Upload */}
          <div className={`border-2 border-dashed rounded-lg p-6 text-center bg-secondary/30 ${resumeError ? 'border-destructive' : 'border-border'}`}>
            <input
              type="file"
              id="resume"
              accept=".doc,.pdf,.docx,.rtf,.odt"
              onChange={handleResumeChange}
              className="hidden"
            />
            <label htmlFor="resume" className="cursor-pointer">
              {resume ? (
                <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
              ) : (
                <Upload className="h-8 w-8 mx-auto mb-2 text-accent" />
              )}
              <p className="text-accent font-medium">
                Upload resume <span className="text-destructive">*</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                10MB max file size (Allowed file types: .doc, .pdf, .docx, .rtf, .odt)
              </p>
              {resume && (
                <p className="mt-2 text-sm text-foreground bg-primary/10 px-3 py-1 rounded inline-block">
                  ✓ {resume.name}
                </p>
              )}
            </label>
            {resumeError && (
              <p className="text-sm text-destructive mt-2" role="alert">
                {resumeError}
              </p>
            )}
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                onBlur={(e) => handleBlur("firstName", e.target.value)}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                className={getInputClassName("firstName")}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-xs text-destructive" role="alert">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={(e) => handleInputChange("middleName", e.target.value)}
                className={getInputClassName("middleName")}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                onBlur={(e) => handleBlur("lastName", e.target.value)}
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                className={getInputClassName("lastName")}
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-xs text-destructive" role="alert">
                  {errors.lastName}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">
                Mobile Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onBlur={(e) => handleBlur("phone", e.target.value)}
                placeholder="+91"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={getInputClassName("phone")}
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-destructive" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={getInputClassName("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="gender">
                Gender <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => {
                  handleInputChange("gender", value);
                  validateField("gender", value);
                }}
              >
                <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* Additional Documents */}
          <div>
            <Label>Additional Documents</Label>
            <div className="mt-2 space-y-2">
              {additionalDocs.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-secondary px-3 py-2 rounded"
                >
                  <span className="text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {doc.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAdditionalDoc(index)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${doc.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <label className="flex items-center gap-2 text-accent cursor-pointer hover:underline text-sm">
                <Plus className="h-4 w-4" />
                Add attachment (10MB max size)
                <input
                  type="file"
                  onChange={handleAdditionalDocsChange}
                  className="hidden"
                  multiple
                />
              </label>
            </div>
          </div>

          {/* Experience & Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label>Experience</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  min="0"
                  max="60"
                  placeholder="Years"
                  value={formData.experienceYears}
                  onChange={(e) => handleInputChange("experienceYears", e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={formData.experienceMonths}
                  onValueChange={(value) => handleInputChange("experienceMonths", value)}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Months" />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
                      <SelectItem key={m} value={m.toString()}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="currentSalary">Current Salary (INR)</Label>
              <Input
                id="currentSalary"
                type="number"
                value={formData.currentSalary}
                onChange={(e) => handleInputChange("currentSalary", e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="expectedSalary">Expected Salary (INR)</Label>
              <Input
                id="expectedSalary"
                type="number"
                value={formData.expectedSalary}
                onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="availableToJoin">Available To Join (in days)</Label>
              <Input
                id="availableToJoin"
                type="number"
                value={formData.availableToJoin}
                onChange={(e) => handleInputChange("availableToJoin", e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="currentLocation">Current Location</Label>
              <Input
                id="currentLocation"
                value={formData.currentLocation}
                onChange={(e) => handleInputChange("currentLocation", e.target.value)}
                className={getInputClassName("currentLocation")}
              />
              {errors.currentLocation && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.currentLocation}
                </p>
              )}
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Education Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="tenthPercentage">
                  10th Percentage/CGPA <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={(e) => handleInputChange("tenthPercentage", e.target.value)}
                  onBlur={(e) => handleBlur("tenthPercentage", e.target.value)}
                  aria-invalid={!!errors.tenthPercentage}
                  aria-describedby={errors.tenthPercentage ? "tenthPercentage-error" : undefined}
                  className={getInputClassName("tenthPercentage")}
                />
                {errors.tenthPercentage && (
                  <p id="tenthPercentage-error" className="text-xs text-destructive" role="alert">
                    {errors.tenthPercentage}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="twelfthPercentage">
                  12th/Diploma Percentage/CGPA <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={(e) => handleInputChange("twelfthPercentage", e.target.value)}
                  onBlur={(e) => handleBlur("twelfthPercentage", e.target.value)}
                  aria-invalid={!!errors.twelfthPercentage}
                  aria-describedby={errors.twelfthPercentage ? "twelfthPercentage-error" : undefined}
                  className={getInputClassName("twelfthPercentage")}
                />
                {errors.twelfthPercentage && (
                  <p id="twelfthPercentage-error" className="text-xs text-destructive" role="alert">
                    {errors.twelfthPercentage}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="collegeName">
                College / Board / University <span className="text-destructive">*</span>
              </Label>
              <Input
                id="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleInputChange("collegeName", e.target.value)}
                onBlur={(e) => handleBlur("collegeName", e.target.value)}
                aria-invalid={!!errors.collegeName}
                aria-describedby={errors.collegeName ? "collegeName-error" : undefined}
                className={getInputClassName("collegeName")}
              />
              {errors.collegeName && (
                <p id="collegeName-error" className="text-xs text-destructive" role="alert">
                  {errors.collegeName}
                </p>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <span className="text-xs text-muted-foreground">
                {formData.additionalInfo?.length || 0}/1000
              </span>
            </div>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Any additional information you'd like to share..."
              rows={4}
              maxLength={1000}
              className={getInputClassName("additionalInfo")}
            />
            {errors.additionalInfo && (
              <p className="text-xs text-destructive" role="alert">
                {errors.additionalInfo}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isVerifying ? "Verifying..." : "Submitting..."}
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationDialog;
