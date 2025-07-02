import emailjs from '@emailjs/browser';
import { ContactFormData } from '@/types/contact';

const SERVICE_ID = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_ID!;

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: '山田哲也',
    };

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return result.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};