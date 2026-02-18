export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'green' | 'blue' | 'gray' | 'yellow';
  image: string;
  primaryAction: string;
  secondaryAction?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote?: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  affiliations: string[];
  image: string;
}

export interface Article {
  id: string;
  title: string;
  readTime: string;
  image: string;
}
