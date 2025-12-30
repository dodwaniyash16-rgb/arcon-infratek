import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";
import type { JobOpening } from "./JobDetailsDialog";

interface JobListingsProps {
  jobs: JobOpening[];
  departments: string[];
  onJobClick: (job: JobOpening) => void;
}

const JobListings = ({ jobs, departments, onJobClick }: JobListingsProps) => {
  // Group jobs by department
  const jobsByDepartment = departments.reduce((acc, dept) => {
    const deptJobs = jobs.filter((job) => job.department === dept);
    if (deptJobs.length > 0) {
      acc[dept] = deptJobs;
    }
    return acc;
  }, {} as Record<string, JobOpening[]>);

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No job openings match your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(jobsByDepartment).map(([department, deptJobs]) => (
        <div key={department}>
          {/* Department Header */}
          <div className="flex items-baseline gap-3 mb-4">
            <h3 className="font-heading font-bold text-lg">{department}</h3>
            <span className="text-sm text-muted-foreground">
              {deptJobs.length} {deptJobs.length === 1 ? "job" : "jobs"}
            </span>
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {deptJobs.map((job) => (
              <button
                key={job.id}
                onClick={() => onJobClick(job)}
                className="bg-card p-5 rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all text-left group relative"
              >
                <h4 className="font-heading font-semibold text-accent group-hover:underline mb-2 pr-8">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {job.type}
                  </span>
                </div>
                <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
