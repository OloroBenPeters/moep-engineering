export type PageId = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  disciplines: string[];
  deliverables: string[];
  standards: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'civil' | 'commercial' | 'industrial' | 'energy' | 'infrastructure';
  categoryLabel: string;
  location: string;
  client: string;
  year: string;
  scale: string;
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  image: string;
  status: 'Completed' | 'In Progress';
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experience: string;
  bio: string;
  image: string;
}

export interface CertificationItem {
  code: string;
  name: string;
  body: string;
  description: string;
}
