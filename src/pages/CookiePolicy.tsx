import Layout from "@/components/layout/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">Legal</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your device when you visit 
                our website. They help us provide you with a better experience by 
                remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Essential Cookies:</strong> Required for the website to function 
                properly. These cannot be disabled.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Analytics Cookies:</strong> Help us understand how visitors 
                interact with our website so we can improve it.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Preference Cookies:</strong> Remember your settings and preferences 
                for future visits.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. 
                You can set your browser to refuse cookies or delete certain cookies. 
                Please note that disabling cookies may affect the functionality of our 
                website.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Contact</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our Cookie Policy, please contact us at 
                privacy@arconinfratek.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
