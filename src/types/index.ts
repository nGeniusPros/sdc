export interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface TestimonialType {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface ServiceType {
  title: string;
  description: string;
  image: string;
}

export interface FAQType {
  question: string;
  answer: string;
}

export interface SiteDataType {
  name: string;
  tagline: string;
  secondaryTagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  reviewPlatform?: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    yelp: string;
  };
}

export interface EducationalTopicType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  keyPoints: string[];
  relatedCondition?: string;
  ctaText: string;
}
