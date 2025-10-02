export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  category: string;
  image: string;
  link?: string;
  tags?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
  icon: string;
}

export interface ProjectInfo {
  services: string[];
  client: string;
  duration: string;
  year: string;
}

export interface LogoVariation {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  size: 'small' | 'medium' | 'large';
}