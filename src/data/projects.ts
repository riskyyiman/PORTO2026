export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: '2',
    title: 'AI-Powered Dashboard',
    description: 'Modern analytics dashboard with AI-driven insights, real-time data visualization, and predictive analytics for business intelligence.',
    tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time synchronization, team collaboration features, and productivity analytics.',
    tags: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: false,
  },
  {
    id: '4',
    title: 'Social Media Platform',
    description: 'Feature-rich social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
    tags: ['React', 'Node.js', 'GraphQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Portfolio CMS',
    description: 'Custom content management system for creative professionals with drag-and-drop interface and multi-language support.',
    tags: ['Next.js', 'Sanity', 'TypeScript', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    githubUrl: 'https://github.com/username/project',
    featured: false,
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application with workout planning, progress tracking, and nutrition logging features.',
    tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    liveUrl: 'https://example.com',
    featured: false,
  },
];
