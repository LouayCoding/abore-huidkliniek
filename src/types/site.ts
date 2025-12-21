/**
 * Site configuration and content types
 * CMS Ready: These types can be used with any headless CMS
 */

/**
 * Contact information
 */
export interface ContactInfo {
  /** Phone number (without formatting) */
  phone: string;
  /** Email address */
  email: string;
  /** WhatsApp number */
  whatsapp: string;
}

/**
 * Physical address
 */
export interface Address {
  /** Street name and number */
  street: string;
  /** City name */
  city: string;
  /** Postal code */
  postal: string;
  /** Country code (e.g., "NL") */
  country: string;
}

/**
 * Social media links
 */
export interface SocialLinks {
  /** Instagram URL */
  instagram?: string;
  /** Facebook URL */
  facebook?: string;
  /** LinkedIn URL */
  linkedin?: string;
  /** TikTok URL */
  tiktok?: string;
}

/**
 * Opening hours for a specific day
 */
export interface OpeningHours {
  /** Days of the week */
  days: string[];
  /** Opening time (e.g., "09:00") */
  opens: string;
  /** Closing time (e.g., "18:00") */
  closes: string;
}

/**
 * Site configuration
 */
export interface SiteConfig {
  /** Site/business name */
  name: string;
  /** Site tagline/slogan */
  tagline?: string;
  /** Site description for SEO */
  description: string;
  /** Site URL */
  url: string;
  /** Contact information */
  contact: ContactInfo;
  /** Physical address */
  address: Address;
  /** Social media links */
  social: SocialLinks;
  /** Opening hours */
  openingHours: OpeningHours[];
  /** Booking URL */
  bookingUrl: string;
}

/**
 * Navigation item
 */
export interface NavItem {
  /** Display label */
  label: string;
  /** URL path */
  href: string;
  /** Whether link opens in new tab */
  external?: boolean;
  /** Child navigation items */
  children?: NavItem[];
}

/**
 * Blog/Article post
 */
export interface BlogPost {
  /** Unique identifier/slug */
  slug: string;
  /** Post title */
  title: string;
  /** Post excerpt */
  excerpt: string;
  /** Full content (can be HTML/MDX) */
  content: string;
  /** Featured image */
  image: string;
  /** Publication date (ISO format) */
  publishedAt: string;
  /** Last update date (ISO format) */
  updatedAt?: string;
  /** Author name */
  author?: string;
  /** Tags/categories */
  tags?: string[];
  /** Related treatment IDs */
  relatedTreatments?: string[];
}

/**
 * Gallery image
 */
export interface GalleryImage {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional caption */
  caption?: string;
  /** Category for filtering */
  category?: string;
  /** Order for sorting */
  order?: number;
}

/**
 * USP (Unique Selling Point) item
 */
export interface USPItem {
  /** Icon name or component */
  icon: string;
  /** Title */
  title: string;
  /** Description */
  description: string;
}

/**
 * Stat item for displaying numbers
 */
export interface StatItem {
  /** Value to display (e.g., "10+", "5000+") */
  value: string;
  /** Label (e.g., "Jaar ervaring") */
  label: string;
}
