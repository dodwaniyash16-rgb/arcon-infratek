import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useState } from "react";

interface UseReCaptchaReturn {
  verifyReCaptcha: (action: string) => Promise<boolean>;
  isVerifying: boolean;
  error: string | null;
}

export const useReCaptcha = (): UseReCaptchaReturn => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyReCaptcha = useCallback(
    async (action: string): Promise<boolean> => {
      setError(null);
      setIsVerifying(true);

      try {
        // If reCAPTCHA is not available (not configured), allow the action
        if (!executeRecaptcha) {
          console.warn("reCAPTCHA not available, skipping verification");
          return true;
        }

        const token = await executeRecaptcha(action);
        
        if (!token) {
          setError("Failed to get reCAPTCHA token");
          return false;
        }

        // For client-side only validation, we accept the token
        // For full security, you would verify this token server-side
        // using a Supabase Edge Function with the Secret Key
        console.log("reCAPTCHA token obtained for action:", action);
        return true;
      } catch (err) {
        console.error("reCAPTCHA error:", err);
        setError("reCAPTCHA verification failed");
        return false;
      } finally {
        setIsVerifying(false);
      }
    },
    [executeRecaptcha]
  );

  return { verifyReCaptcha, isVerifying, error };
};
