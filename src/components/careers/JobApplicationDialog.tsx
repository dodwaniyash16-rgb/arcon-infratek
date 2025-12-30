import { useState } from "react";
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
import { MapPin, Clock, Briefcase, ArrowLeft, Upload, Plus, X } from "lucide-react";
import { toast } from "sonner";
import type { JobOpening } from "./JobDetailsDialog";

interface JobApplicationDialogProps {
  job: JobOpening | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack: () => void;
}

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  experienceYears: string;
  experienceMonths: string;
  currentSalary: string;
  expectedSalary: string;
  availableToJoin: string;
  currentLocation: string;
  tenthPercentage: string;
  twelfthPercentage: string;
  collegeName: string;
  additionalInfo: string;
}

const JobApplicationDialog = ({ job, open, onOpenChange, onBack }: JobApplicationDialogProps) => {
  const [formData, setFormData] = useState<FormData>({
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
  });

  const [resume, setResume] = useState<File | null>(null);
  const [additionalDocs, setAdditionalDocs] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) return null;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Resume size should be smaller than 10 MB");
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

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.gender) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.tenthPercentage || !formData.twelfthPercentage || !formData.collegeName) {
      toast.error("Please fill in all education details");
      return;
    }

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

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
Date of Birth: ${formData.dateOfBirth}
Current Location: ${formData.currentLocation}

EXPERIENCE
==========
Total Experience: ${formData.experienceYears} years ${formData.experienceMonths} months
Current Salary: ${formData.currentSalary} INR
Expected Salary: ${formData.expectedSalary} INR
Available to Join: ${formData.availableToJoin} days

EDUCATION
=========
10th Percentage/CGPA: ${formData.tenthPercentage}
12th/Diploma Percentage/CGPA: ${formData.twelfthPercentage}
College/Board/University: ${formData.collegeName}

ADDITIONAL INFORMATION
=====================
${formData.additionalInfo || "N/A"}

Resume: ${resume.name}
Additional Documents: ${additionalDocs.length > 0 ? additionalDocs.map(d => d.name).join(", ") : "None"}
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
        setFormData({
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
        });
        setResume(null);
        setAdditionalDocs([]);
        onOpenChange(false);
      }, 1000);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume Upload */}
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-secondary/30">
            <input
              type="file"
              id="resume"
              accept=".doc,.pdf,.docx,.rtf,.odt"
              onChange={handleResumeChange}
              className="hidden"
            />
            <label htmlFor="resume" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-accent font-medium">
                Upload resume <span className="text-destructive">*</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                10MB max file size (Allowed file types: .doc, .pdf, .docx, .rtf, .odt)
              </p>
              {resume && (
                <p className="mt-2 text-sm text-foreground bg-secondary px-3 py-1 rounded inline-block">
                  {resume.name}
                </p>
              )}
            </label>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={(e) => handleInputChange("middleName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="lastName">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">
                Mobile Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">
                Gender <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
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
                  <span className="text-sm">{doc.name}</span>
                  <button
                    type="button"
                    onClick={() => removeAdditionalDoc(index)}
                    className="text-muted-foreground hover:text-destructive"
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
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div>
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
            <div>
              <Label htmlFor="currentSalary">Current Salary (INR)</Label>
              <Input
                id="currentSalary"
                type="number"
                value={formData.currentSalary}
                onChange={(e) => handleInputChange("currentSalary", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="expectedSalary">Expected Salary (INR)</Label>
              <Input
                id="expectedSalary"
                type="number"
                value={formData.expectedSalary}
                onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="availableToJoin">Available To Join (in days)</Label>
              <Input
                id="availableToJoin"
                type="number"
                value={formData.availableToJoin}
                onChange={(e) => handleInputChange("availableToJoin", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="currentLocation">Current Location</Label>
              <Input
                id="currentLocation"
                value={formData.currentLocation}
                onChange={(e) => handleInputChange("currentLocation", e.target.value)}
              />
            </div>
          </div>

          {/* Education Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Education Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tenthPercentage">
                  10th Percentage/CGPA <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={(e) => handleInputChange("tenthPercentage", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="twelfthPercentage">
                  12th/Diploma Percentage/CGPA <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={(e) => handleInputChange("twelfthPercentage", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="collegeName">
                College / Board / University <span className="text-destructive">*</span>
              </Label>
              <Input
                id="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleInputChange("collegeName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Any additional information you'd like to share..."
              rows={4}
            />
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-muted-foreground">
            By applying, you hereby accept that your information will be processed as part of this
            job application and sent to Arcon Infratek for review.
          </p>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationDialog;
