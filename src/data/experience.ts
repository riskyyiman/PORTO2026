export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  current: boolean;
}

export const experienceData: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    companyUrl: 'https://example.com',
    period: 'Jan 2023 — Present',
    description: 'Leading frontend development initiatives, architecting scalable solutions, and mentoring junior developers in modern web technologies.',
    current: true,
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Digital Agency',
    companyUrl: 'https://example.com',
    period: 'Mar 2021 — Dec 2022',
    description: 'Built and maintained multiple client projects using React, Node.js, and cloud technologies. Improved application performance by 40%.',
    current: false,
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    period: 'Jun 2020 — Feb 2021',
    description: 'Developed responsive web applications and collaborated with design team to implement pixel-perfect user interfaces.',
    current: false,
  },
];
