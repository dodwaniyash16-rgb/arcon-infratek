import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">Legal</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, including your name, 
                email address, company name, phone number, and any other information you 
                choose to provide when contacting us or using our services.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our 
                services, communicate with you about our services, and respond to your 
                inquiries and requests.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to 
                third parties without your consent, except as necessary to provide our 
                services or as required by law.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, 
                disclosure, or destruction.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@arconinfratek.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
