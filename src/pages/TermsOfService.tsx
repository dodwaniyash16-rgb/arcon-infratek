import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">Legal</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using our services, you agree to be bound by these Terms 
                of Service. If you do not agree to these terms, please do not use our 
                services.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Arcon Infratek provides BIM and VDC services including but not limited to 
                3D modeling, coordination, shop drawings, and consulting services as 
                described on our website and in individual service agreements.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, trademarks, and intellectual property on this website are 
                owned by Arcon Infratek or its licensors. Project deliverables become 
                the property of the client upon full payment as specified in service 
                agreements.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Arcon Infratek shall not be liable for any indirect, incidental, special, 
                or consequential damages arising from the use of our services, except as 
                specified in individual service agreements.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Contact</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us at 
                legal@arconinfratek.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
