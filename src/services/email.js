import emailjs from '@emailjs/browser'

// Replace these with your own EmailJS credentials.
// Create a free account at https://www.emailjs.com/
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

/**
 * Send a contact form message via EmailJS.
 * @param {{ name: string, email: string, message: string }} formData
 */
export async function sendContactMessage(formData) {
  if (
    SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID' ||
    TEMPLATE_ID === 'YOUR_EMAILJS_TEMPLATE_ID' ||
    PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY'
  ) {
    // EmailJS not configured yet — simulate success so the UI can be tested.
    console.warn('EmailJS is not configured. Update src/services/email.js with your credentials.')
    return new Promise((resolve) => setTimeout(() => resolve({ status: 200, simulated: true }), 800))
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    PUBLIC_KEY
  )
}
