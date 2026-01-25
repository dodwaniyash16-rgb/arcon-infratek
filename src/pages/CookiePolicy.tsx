import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

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
                Last Updated: January 10, 2026
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This Cookie Policy explains how Arcon Infratek ("Arcon," "we," "us," or "our") uses cookies and similar technologies on our website. This policy should be read together with our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-muted-foreground mb-4">
                By continuing to use our website, you agree to the use of cookies as described in this policy.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. Cookies help websites function efficiently, improve user experience, and provide insights into how the website is used.
              </p>
              <p className="text-muted-foreground mb-4">
                Cookies do not typically contain information that directly identifies you.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <p className="text-muted-foreground mb-4">
                We use the following categories of cookies:
              </p>

              <h3 className="font-heading text-xl font-semibold mt-6 mb-3">a. Strictly Necessary Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are essential for the website to function properly. They enable core features such as security, page navigation, and access to protected areas. Without these cookies, the website may not function correctly.
              </p>

              <h3 className="font-heading text-xl font-semibold mt-6 mb-3">b. Performance and Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies help us understand how visitors interact with our website by collecting information such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Navigation patterns</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                The information collected is aggregated and used only to improve website performance and user experience.
              </p>

              <h3 className="font-heading text-xl font-semibold mt-6 mb-3">c. Preference Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Preference cookies allow the website to remember choices you make (such as region or language preferences) to provide a more consistent browsing experience.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Analytics and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We may use standard analytics tools to evaluate website usage and improve our services. These tools may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Browser type and device information</li>
                <li>IP address (anonymized where possible)</li>
                <li>Pages visited and referring URLs</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This data is used strictly for internal analysis and operational improvement. We do not use cookies for behavioral advertising.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                In some cases, third-party service providers may place cookies on our website to support hosting, analytics, or technical functionality. These providers are authorized to use cookies only as necessary to provide services to Arcon Infratek and are required to safeguard your information.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">6. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control or disable cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>View cookies stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Please note that disabling certain cookies may impact the functionality of the website.
              </p>
              <p className="text-muted-foreground mb-4">
                For general guidance on managing cookies, you may visit:{" "}
                <a 
                  href="https://www.allaboutcookies.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.allaboutcookies.org
                </a>
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">7. Do Not Track Signals</h2>
              <p className="text-muted-foreground mb-4">
                Some browsers include a "Do Not Track" feature. At this time, there is no uniform industry standard for responding to such signals, and our website does not respond to Do Not Track settings.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy periodically to reflect changes in legal requirements or website functionality. Any updates will be posted on this page with a revised "Last Updated" date.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">9. Related Policies</h2>
              <p className="text-muted-foreground mb-4">
                To learn more about how we collect, use, and protect personal information, please review our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>

              <h2 className="font-heading text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Cookie Policy or our use of cookies, please contact us:
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
                  <a href="tel:+14049191976" className="text-primary hover:underline">
                    +1 (404) 919-1976
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

export default CookiePolicy;
