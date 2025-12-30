import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export interface ServiceScope {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

interface ServiceScopeTabsProps {
  title?: string;
  subtitle?: string;
  scopes: ServiceScope[];
}

const ServiceScopeTabs = ({ 
  title = "Service Scope", 
  subtitle = "Comprehensive solutions tailored to your project requirements.",
  scopes 
}: ServiceScopeTabsProps) => {
  const [activeTab, setActiveTab] = useState(scopes[0]?.id || "");

  return (
    <section className="py-20 section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-4">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab List - Scrollable on mobile */}
          <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4">
            <TabsList className="inline-flex w-auto min-w-full sm:min-w-0 h-auto p-1 bg-secondary/50 rounded-full">
              {scopes.map((scope) => (
                <TabsTrigger 
                  key={scope.id} 
                  value={scope.id}
                  className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  {scope.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Tab Content */}
          {scopes.map((scope) => (
            <TabsContent 
              key={scope.id} 
              value={scope.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {scope.title}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {scope.description}
                  </p>
                  <div className="space-y-3">
                    {scope.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                  {scope.image ? (
                    <img 
                      src={scope.image} 
                      alt={scope.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-muted-foreground/30 text-lg font-medium">
                      {scope.title} Preview
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceScopeTabs;
