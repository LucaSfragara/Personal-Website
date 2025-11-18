export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Graduate Research Assistant',
    company: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    startDate: 'Sep 2025',
    endDate: 'Present',
    description: 'Operations Research Center. Research in causal inference and weather modelling.',
  },
  {
    id: '2',
    title: 'Consulting Intern',
    company: 'Boston Consulting Group (BCG)',
    location: 'Milan, Italy',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    description: 'Digitalization project with leading luxury player. Cross-staffed with BCG X.',
  },
  {
    id: '3',
    title: 'President | Head of Sales',
    company: 'JEME Bocconi Studenti',
    location: 'Milan, Italy',
    startDate: 'Feb 2023',
    endDate: 'May 2025',
    description: 'Managing origination and business development for a student-run consulting firm. Leading a team of 25 bringing in more than 200k/year revenue. Eventually managed the entire association.',
  },
  {
    id: '4',
    title: 'Machine Learning Summer Intern',
    company: 'Deutsche Bank',
    location: 'London, UK',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description: 'Core AI&ML in Risk, Finance & Treasury. Working on LLMs & Graph Models.',
  },
  {
    id: '5',
    title: 'Valuation Intern',
    company: 'Pirola Corporate Finance S.p.A.',
    location: 'Milan, Italy',
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
    description: 'Valuation & Financial Analysis team.',
  },
  {
    id: '6',
    title: 'Academic Tutor',
    company: 'Omni Tutoring (UK) Ltd',
    location: 'Remote',
    startDate: 'Oct 2022',
    endDate: 'Jul 2023',
    description: 'SAT & IB Tutor.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A full-stack application that solves a real-world problem. Built with modern technologies and best practices for scalability and maintainability.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    link: 'https://project-alpha.com',
    github: 'https://github.com/username/project-alpha',
  },
  {
    id: '2',
    title: 'Developer Tool',
    description: 'An open-source CLI tool that automates repetitive development tasks. Used by hundreds of developers daily.',
    tags: ['TypeScript', 'CLI', 'Open Source'],
    github: 'https://github.com/username/dev-tool',
  },
  {
    id: '3',
    title: 'Mobile App',
    description: 'A cross-platform mobile application with offline-first architecture and real-time synchronization capabilities.',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: 'https://app-store-link.com',
  },
  {
    id: '4',
    title: 'AI Experiment',
    description: 'An exploration of machine learning techniques applied to a creative problem. Combines technical depth with artistic expression.',
    tags: ['Python', 'TensorFlow', 'Computer Vision'],
    github: 'https://github.com/username/ai-experiment',
  },
];

export const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Git',
];
