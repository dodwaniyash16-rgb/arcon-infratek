import { CheckCircle, Clock, Award, Users } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: "500+",
    label: "Projects Delivered",
    description: "Across multiple sectors",
  },
  {
    icon: Clock,
    value: "98%",
    label: "On-Time Delivery",
    description: "Meeting every deadline",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Team",
    description: "Skilled professionals",
  },
];

const TrustMetricsSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4">
                <stat.icon className="h-6 w-6 icon-gradient" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetricsSection;
