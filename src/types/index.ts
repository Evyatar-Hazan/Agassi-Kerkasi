/**
 * Global TypeScript Type Definitions
 * All shared types for the Agassi Kerkasi landing page
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  label: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  instagram: string;
  tiktok: string;
}
