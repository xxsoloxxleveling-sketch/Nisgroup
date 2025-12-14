import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
  tags?: string[];
  rating?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}
