export interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
}

export interface Hero {
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  cta: string;
  properties: Property[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  social: SocialLinks;
}

export interface HomestayData {
  hero: Hero;
  features: Feature[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  pricing: PricingPlan[];
  contact: Contact;
}