import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

interface ReCaptchaProviderProps {
  children: ReactNode;
}

// Replace with your actual reCAPTCHA v3 Site Key from https://www.google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY";

const ReCaptchaProvider = ({ children }: ReCaptchaProviderProps) => {
  // Skip reCAPTCHA if no site key is configured
  if (RECAPTCHA_SITE_KEY === "YOUR_RECAPTCHA_SITE_KEY") {
    console.warn("reCAPTCHA is not configured. Add your site key to ReCaptchaProvider.tsx");
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;
