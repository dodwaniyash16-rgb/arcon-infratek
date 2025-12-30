import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { TrendingUp, Clock, Users, Heart } from "lucide-react";
import JobFilters from "@/components/careers/JobFilters";
import JobListings from "@/components/careers/JobListings";
import JobDetailsDialog, { type JobOpening } from "@/components/careers/JobDetailsDialog";
import JobApplicationDialog from "@/components/careers/JobApplicationDialog";
import { jobOpenings, departments } from "@/data/jobOpenings";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning in cutting-edge BIM technologies.",
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Supportive environment with flexible schedules to support work-life balance.",
  },
  {
    icon: Users,
    title: "Global Projects",
    description: "Work on diverse international projects with talented professionals.",
  },
  {
    icon: Heart,
    title: "Great Benefits",
    description: "Competitive compensation, health benefits, and professional development budget.",
  },
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showApplication, setShowApplication] = useState(false);

  // Filter jobs based on search and department filters
  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDepartment =
        selectedDepartments.length === 0 || selectedDepartments.includes(job.department);

      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartments]);

  // Get departments that have jobs after filtering
  const activeDepartments = useMemo(() => {
    return departments.filter((dept) =>
      filteredJobs.some((job) => job.department === dept)
    );
  }, [filteredJobs]);

  const handleDepartmentChange = (department: string, checked: boolean) => {
    setSelectedDepartments((prev) =>
      checked ? [...prev, department] : prev.filter((d) => d !== department)
    );
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDepartments([]);
  };

  const handleJobClick = (job: JobOpening) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    setShowDetails(false);
    setShowApplication(true);
  };

  const handleBackToDetails = () => {
    setShowApplication(false);
    setShowDetails(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Careers</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Build your career with{" "}
              <span className="text-gradient">Arcon Infratek</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our team of BIM professionals and work on exciting projects with
              industry-leading clients. Your journey begins here!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label mb-4">Why Join Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              A place to grow and <span className="text-gradient">thrive</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 icon-gradient" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Make a Difference - Job Listings */}
      <section id="apply-now" className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground">Apply through the listings below!</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <JobFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                departments={departments}
                selectedDepartments={selectedDepartments}
                onDepartmentChange={handleDepartmentChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <JobListings
                jobs={filteredJobs}
                departments={activeDepartments}
                onJobClick={handleJobClick}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Dialog */}
      <JobDetailsDialog
        job={selectedJob}
        open={showDetails}
        onOpenChange={setShowDetails}
        onApply={handleApply}
      />

      {/* Job Application Dialog */}
      <JobApplicationDialog
        job={selectedJob}
        open={showApplication}
        onOpenChange={setShowApplication}
        onBack={handleBackToDetails}
      />
    </Layout>
  );
};

export default Careers;
