import type { SiteConfig, NavItem, StatItem, USPItem, GalleryImage } from '@/types';
import { env } from '@/lib/env';

/**
 * Main site configuration
 * CMS Ready: Can be replaced with API calls or CMS config
 */
export const siteConfig: SiteConfig = {
  name: "Aboré Huidkliniek",
  tagline: "Luxe laserzorg met precisie en persoonlijke aandacht",
  description: "Luxe huidkliniek in Rijswijk gespecialiseerd in laserontharing, acne behandeling, pigmentbehandeling en huidverjonging.",
  url: env.siteUrl,
  bookingUrl: env.bookingUrl,
  contact: {
    phone: env.phone,
    email: env.email,
    whatsapp: env.whatsapp,
  },
  address: {
    street: env.address.street,
    city: env.address.city,
    postal: env.address.postal,
    country: env.address.country,
  },
  social: {
    instagram: env.social.instagram,
    facebook: env.social.facebook,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      days: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

/**
 * Navigation items
 */
export const mainNavigation: NavItem[] = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Behandelingen", href: "/behandelingen" },
  { label: "Galerij", href: "/galerij" },
  { label: "Contact", href: "/contact" },
];

/**
 * Footer navigation
 */
export const footerNavigation = {
  main: mainNavigation,
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" },
    { label: "Disclaimer", href: "/disclaimer" },
  ] as NavItem[],
};

/**
 * Stats for "Over Ons" section
 */
export const stats: StatItem[] = [
  { value: "6+", label: "Jaar ervaring" },
  { value: "3000+", label: "Tevreden cliënten" },
  { value: "4.9", label: "Beoordeling" },
];

/**
 * Extended stats with icons
 */
export const extendedStats: StatItem[] = [
  { value: "6+", label: "Behandelcategorieën" },
  { value: "3000+", label: "Behandelingen per jaar" },
  ...stats,
];

/**
 * USP items for highlights section
 */
export const uspItems: USPItem[] = [
  {
    icon: "shield",
    title: "CE-Gecertificeerde Apparatuur",
    description: "Al onze lasers en apparaten voldoen aan de strengste Europese veiligheidsnormen.",
  },
  {
    icon: "user",
    title: "Gediplomeerde Specialisten",
    description: "Ons team bestaat uit ervaren huidtherapeuten met medische achtergrond.",
  },
  {
    icon: "sparkle",
    title: "Persoonlijke Aanpak",
    description: "Elk behandelplan wordt op maat gemaakt voor jouw unieke huid en wensen.",
  },
  {
    icon: "clock",
    title: "Flexibele Tijden",
    description: "Ook op zaterdag geopend, zodat je altijd een moment kunt vinden.",
  },
];

/**
 * Gallery images
 */
export const galleryImages: GalleryImage[] = [
  { src: "/hero/1.jpg", alt: "Aboré Huidkliniek ontvangst", category: "kliniek" },
  { src: "/hero/2.jpg", alt: "Behandelkamer", category: "kliniek" },
  { src: "/hero/5.jpg", alt: "Laserontharing behandeling", category: "behandeling" },
  { src: "/hero/6.jpg", alt: "Pigmentbehandeling", category: "behandeling" },
  { src: "/hero/11.jpg", alt: "Huidverjonging", category: "behandeling" },
  { src: "/hero/13.jpg", alt: "Lichaamsbehandeling", category: "behandeling" },
  { src: "/hero/14.jpg", alt: "Consult ruimte", category: "kliniek" },
];

/**
 * Hero slides
 */
export const heroSlides = [
  {
    image: "/hero/1.jpg",
    title: "Aboré Laser- & Huidkliniek",
    subtitle: "Luxe huidbehandelingen in het hart van Rijswijk",
    cta: "Plan gratis consult"
  },
  {
    image: "/hero/14.jpg",
    title: "Premium Laser Apparatuur",
    subtitle: "CE-gecertificeerde systemen voor veilige en effectieve behandelingen",
    cta: "Ontdek onze behandelingen"
  },
  {
    image: "/hero/11.jpg",
    title: "Persoonlijke Zorg & Aandacht",
    subtitle: "Elk behandelplan op maat gemaakt voor jouw unieke huid",
    cta: "Bekijk resultaten"
  },
];

/**
 * WhatsApp configuration
 */
export const whatsappConfig = {
  phoneNumber: env.whatsapp,
  defaultMessage: "Hallo! Ik heb een vraag over jullie behandelingen bij Aboré Huidkliniek.",
};
