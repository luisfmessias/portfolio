// Global Types
export interface MousePosition {
  x: number;
  y: number;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}
