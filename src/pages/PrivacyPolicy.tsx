import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

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
                Last Updated: January 10, 2026
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Arcon Infratek ("Arcon," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, communicate with us, or engage our Building Information Modeling (BIM) and Virtual Design & Construction (VDC) services.
              </p>
              <p className="text-muted-foreground mb-4">
                By accessing or using our website, you agree to the practices described in this Privacy Policy.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following categories of information:
              </p>
              
              <h3 className="font-heading text-xl font-semibold mt-6 mb-3">a. Information You Provide Voluntarily</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Name, job title, company name</li>
                <li>Email address and phone number</li>
                <li>Project details, inquiries, and messages submitted through contact forms or email</li>
                <li>Files, drawings, models, point-cloud data, or documents shared for evaluation or project discussions</li>
              </ul>

              <h3 className="font-heading text-xl font-semibold mt-6 mb-3">b. Information Collected Automatically</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>IP address and approximate location</li>
                <li>Browser type, device type, and operating system</li>
                <li>Pages viewed, referring URLs, and time spent on the site</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This data is collected using standard analytics tools and cookies to improve website performance and user experience. For more information, see our{" "}
                <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Respond to inquiries and communicate with you</li>
                <li>Prepare proposals, scopes, and service discussions</li>
                <li>Deliver BIM and VDC services</li>
                <li>Improve our website, services, and internal processes</li>
                <li>Maintain website security and prevent misuse</li>
                <li>Comply with legal, contractual, and regulatory obligations</li>
              </ul>
              <p className="text-muted-foreground mb-4 font-semibold">
                We do not sell, rent, or trade your personal information.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing (Where Applicable)</h2>
              <p className="text-muted-foreground mb-4">
                For users located in jurisdictions that require a legal basis for processing personal data, we process your information based on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Your consent</li>
                <li>Performance of a contract or pre-contractual steps</li>
                <li>Our legitimate business interests</li>
                <li>Compliance with legal obligations</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Sharing of Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share information only in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>With trusted service providers who assist in website hosting, analytics, or business operations</li>
                <li>With professional advisors or legal authorities when required by law</li>
                <li>As part of a business restructuring, merger, or asset transfer</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                All third parties are required to maintain confidentiality and data security standards consistent with this policy.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Fulfill the purposes outlined in this policy</li>
                <li>Meet contractual and legal requirements</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Project-related data retention is governed by individual service agreements.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">7. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement reasonable administrative, technical, and organizational safeguards to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Arcon Infratek works with clients globally. Your information may be processed or stored in countries outside your own. We take appropriate measures to ensure that international data transfers comply with applicable data protection laws.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">9. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise your rights, please contact us using the details below.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">11. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies independently.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised "Last Updated" date. Continued use of our website after updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact:
              </p>
              <div className="text-muted-foreground mb-4">
                <p className="font-semibold">Arcon Infratek</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@arconinfratek.com" className="text-primary hover:underline">
                    info@arconinfratek.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
