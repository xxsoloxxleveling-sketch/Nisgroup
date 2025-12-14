import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailData {
    [key: string]: unknown;
}

interface UseEmailReturn {
    sendEmail: (data: EmailData, templateId?: string) => Promise<boolean>;
    loading: boolean;
    error: string | null;
    success: boolean;
}

// NOTE: In a real app, these should be in .env vars
// For this demo, we'll use prompts or placeholders if the user doesn't have keys
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // User should replace this
const SERVICE_ID = 'service_nis_main'; // Placeholder
const TEMPLATE_ID = 'template_inquiry'; // Placeholder

export const useEmail = (): UseEmailReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (data: EmailData, templateId: string = TEMPLATE_ID) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // We are simulating the "success" for demo purposes if keys aren't real
            // But we will attempt the call so it logs if keys ARE present
            if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                console.warn("EmailJS Keys missing. Simulating success delay...");
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSuccess(true);
                return true;
            }

            await emailjs.send(SERVICE_ID, templateId, data as any, PUBLIC_KEY);
            setSuccess(true);
            return true;
        } catch (err: any) {
            console.error('EmailJS Error:', err);
            // For demo, if it failed merely due to auth, we might still want to show UI success?
            // No, let's show error to teach user to fix keys.
            setError(err.text || 'Failed to send email. Please try again.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success };
};
