/**
 * Environment variables configuration with validation
 * All environment variables are validated at build time
 */

function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] || fallback;
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

/**
 * Validated environment configuration
 */
export const env = {
  // Site
  siteUrl: getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://huidkliniekabore.nl'),
  siteName: getEnvVar('NEXT_PUBLIC_SITE_NAME', 'Aboré Huidkliniek'),
  
  // Booking
  bookingUrl: getEnvVar('NEXT_PUBLIC_BOOKING_URL', 'https://abor.boekingapp.nl/'),
  
  // Contact
  phone: getEnvVar('NEXT_PUBLIC_PHONE', '31634533358'),
  email: getEnvVar('NEXT_PUBLIC_EMAIL', 'info@huidkliniekabore.nl'),
  whatsapp: getEnvVar('NEXT_PUBLIC_WHATSAPP', '31634533358'),
  
  // Address
  address: {
    street: getEnvVar('NEXT_PUBLIC_ADDRESS_STREET', 'Waldhoornplein 14'),
    city: getEnvVar('NEXT_PUBLIC_ADDRESS_CITY', 'Rijswijk'),
    postal: getEnvVar('NEXT_PUBLIC_ADDRESS_POSTAL', '2282'),
    country: getEnvVar('NEXT_PUBLIC_ADDRESS_COUNTRY', 'NL'),
  },
  
  // Social
  social: {
    instagram: getEnvVar('NEXT_PUBLIC_INSTAGRAM', 'https://instagram.com/huidkliniekabore'),
    facebook: getEnvVar('NEXT_PUBLIC_FACEBOOK', 'https://facebook.com/aborehuidkliniek'),
  },
} as const;

/**
 * Get formatted phone number for display
 */
export function getFormattedPhone(): string {
  const phone = env.phone;
  return `+${phone.slice(0, 2)} ${phone.slice(2, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 7)} ${phone.slice(7, 9)} ${phone.slice(9)}`;
}

/**
 * Get WhatsApp URL with optional prefilled message
 */
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${env.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

/**
 * Get full address as string
 */
export function getFullAddress(): string {
  return `${env.address.street}, ${env.address.postal} ${env.address.city}`;
}
