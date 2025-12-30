import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

interface JobDetailsDialogProps {
  job: JobOpening | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (job: JobOpening) => void;
}

const JobDetailsDialog = ({ job, open, onOpenChange, onApply }: JobDetailsDialogProps) => {
  if (!job) return null;

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

        {/* Description */}
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-3">Roles and Responsibilities</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-4 border-t border-border">
            <Button size="lg" onClick={() => onApply(job)} className="w-full sm:w-auto">
              Apply for this job
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;
