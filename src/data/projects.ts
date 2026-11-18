export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  number: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Enterprise Application',
    description:
      'A modern analytics platform with interactive data visualization, advanced filtering, and reusable dashboard components.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Charts'],
    year: '2026',
    number: '01',
    featured: true,
  },
  {
    slug: 'commerce-platform',
    title: 'Commerce Platform',
    category: 'E-commerce',
    description:
      'A responsive shopping experience featuring product discovery, filtering, cart management, and an intuitive checkout flow.',
    technologies: ['React', 'TypeScript', 'REST API', 'CSS'],
    year: '2026',
    number: '02',
    featured: true,
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    category: 'Productivity',
    description:
      'A collaborative workspace for managing tasks, organizing projects, and tracking progress through interactive Kanban boards.',
    technologies: ['Next.js', 'TypeScript', 'Motion', 'Tailwind CSS'],
    year: '2026',
    number: '03',
    featured: true,
  },
];
