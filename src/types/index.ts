export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description?: string;
  subtitle?: string;
  client?: string;
  services?: string;
  duration?: string;
  year?: string;
  tabs?: {
    label: string;
    heading?: string;
    description?: string;
    images?: {
      src: string;
      title?: string;
      desc?: string;
      download?: string;
    }[];
  }[];
}


export interface Skill {
  name: string;
  icon: string;
  category?: "Design" | "Video" | "Illustration" | "UI/UX";
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