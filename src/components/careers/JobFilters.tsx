import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface JobFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  departments: string[];
  selectedDepartments: string[];
  onDepartmentChange: (department: string, checked: boolean) => void;
  onClearFilters: () => void;
}

const JobFilters = ({
  searchQuery,
  onSearchChange,
  departments,
  selectedDepartments,
  onDepartmentChange,
  onClearFilters,
}: JobFiltersProps) => {
  const hasActiveFilters = searchQuery || selectedDepartments.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            title="Clear filters"
          >
            <Filter className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Department Filter */}
      <div className="mb-6">
        <h3 className="font-heading font-semibold text-sm mb-4 flex items-center justify-between">
          Department
          <span className="text-muted-foreground font-normal">▲</span>
        </h3>
        <div className="space-y-3">
          {departments.map((department) => (
            <label
              key={department}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedDepartments.includes(department)}
                onCheckedChange={(checked) =>
                  onDepartmentChange(department, checked as boolean)
                }
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {department}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <h3 className="font-heading font-semibold text-sm mb-4 flex items-center justify-between">
          Location
          <span className="text-muted-foreground font-normal">▲</span>
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox checked disabled />
            <span className="text-sm text-muted-foreground">Indore</span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="flex items-center gap-2 text-accent hover:underline mt-6 text-sm"
        >
          <X className="h-4 w-4" />
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default JobFilters;
