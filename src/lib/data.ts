export interface ContactInfo {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo?: string;
  companyUrl?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
  github?: string;
  image?: string;
  report?: string;
  youtube?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
  schoolUrl?: string;
}

export const contactInfo: ContactInfo = {
  name: 'Luca Sfragara',
  email: 'lsfragar@mit.edu',
  github: 'https://github.com/LucaSfragara',
  linkedin: 'https://linkedin.com/in/lucasfragara',
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Graduate Research Assistant',
    company: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    startDate: 'Aug 2025',
    endDate: 'Aug 2026',
    description: 'Operations Research Center. Research in causal inference and reinforcement learning with applications to healthcare and retail.',
    logo: '/logos/MIT_logo.svg.png',
    companyUrl: 'https://www.mit.edu',
    highlights: [
      'Designed a structural causal model to simulate longitudinal cancer progression and gene impact (Python, SQL)',
      'Developed an MDP to analyse the impact of weather on sales in collaboration with the world\'s largest fashion retailer',
      'Presented results in weekly meetings with senior technical and business stakeholders from the client',
    ],
  },
  {
    id: '2',
    title: 'Consulting Intern',
    company: 'Boston Consulting Group (BCG)',
    location: 'Milan, Italy',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    description: 'Consulted for a leading client in the luxury goods sector on customer segmentation and targeted marketing strategies.',
    logo: '/logos/bcg_logo.svg.png',
    companyUrl: 'https://www.bcg.com',
    highlights: [
      'Worked on a digitalization project for a leading Fashion & Luxury player',
      'Analysed and clustered the entire customer base (5M+ rows) on Databricks, presenting insights to C-suite executive',
      'Organized project activities, prepared and delivered presentations working directly with the client\'s management',
    ],
  },
  {
    id: '3',
    title: 'President | Head of Sales',
    company: 'JEME Bocconi Studenti',
    location: 'Milan, Italy',
    startDate: 'Feb 2023',
    endDate: 'May 2025',
    description: 'Managing origination and business development for a student-run consulting firm. Leading a team of 25 bringing in more than 200k/year revenue. Eventually managed the entire association.',
    logo: '/logos/JEME_logo.svg.png',
    companyUrl: 'https://jeme.it',
    highlights: [
      'Student-run strategy-consulting firm with <5% acceptance rate, >200k € turnover (~20hrs/week of work)',
      'As the youngest-ever President in JEME\'s history, managed 70 students, achieved 20% YoY revenue growth',
      'As Head of Sales, managed 20 sales accounts, bringing >200k € turnover from consulting projects',
      'Ideated, launched, and scaled JEME Capital, the first-ever student-investment fund in Italy, now managing >€10k portfolio',
    ],
  },
  {
    id: '4',
    title: 'Machine Learning Summer Intern',
    company: 'Deutsche Bank',
    location: 'London, UK',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description: "Part of Bank's Core AI&ML team. Deployed LLM systems for internal use cases and built production ML pipelines for various business units.",
    logo: '/logos/DB_logo.svg.png',
    companyUrl: 'https://www.db.com',
    highlights: [
      'Part of the Core Machine Learning team in the bank\'s risk division',
      'Worked on applications of Large Language Models to knowledge graphs',
      'Developed as-a-service RAG pipelines (LangChain, Elastic Search, Python, GCP, PyTorch)',
      'Proposed a novel way to monitor GPU usage within the bank\'s infrastructure, impacting 3000+ people',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master in Data Science, Business Analytics',
    school: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    startDate: 'Sep 2025',
    endDate: 'Aug 2026',
    description: 'Operations Research Center. Focus on Data Science and Machine Learning.',
    logo: '/logos/MIT_logo.svg.png',
    schoolUrl: 'https://www.mit.edu',
  },
  {
    id: '2',
    degree: 'BSc in Economics and Computer Science',
    school: 'Bocconi University',
    location: 'Milan, Italy',
    startDate: 'Sep 2021',
    endDate: 'Jun 2024',
    logo: '/logos/Bocconi_University_Logo.svg.png',
    schoolUrl: 'https://www.unibocconi.it',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'SfraLM',
    description: 'Custom built LLM - ongoing project. Code for pretraining, mid-training and post training an LLM (SFT & RL) on a HPC cluster. Implements experimenting, logging and evals.',
    tags: ['Python', 'PyTorch', 'LLM', 'HPC'],
    status: 'in-progress',
    github: 'https://github.com/LucaSfragara/SfraLM',
  },
  {
    id: '2',
    title: 'SfraTorch',
    description: 'Implements key PyTorch functionalities from scratch with the philosophy "What I cannot build, I cannot understand". Includes autograd, neural network layers, transformers, and ASR models.',
    tags: ['Python', 'Deep Learning', 'From Scratch'],
    status: 'completed',
    github: 'https://github.com/LucaSfragara/SfraTorch',
  },
  {
    id: '3',
    title: 'StableSFTData',
    description: 'Sample-efficient LLM fine-tuning for math reasoning: training on hard examples outperforms random selection under fixed compute budgets.',
    tags: ['Python', 'LLM', 'Fine-tuning', 'LoRA'],
    status: 'completed',
    github: 'https://github.com/LucaSfragara/StableSFTData',
    report: 'https://github.com/LucaSfragara/StableSFTData/blob/main/Report.pdf',
  },
  {
    id: '4',
    title: 'The Hidden Grammar',
    description: 'BSc thesis exploring how transformers learn syntax. Training GPT-2 on formal grammars and probing hidden representations to uncover where hierarchical structure emerges.',
    tags: ['Python', 'PyTorch', 'Transformers', 'NLP'],
    status: 'completed',
    github: 'https://github.com/LucaSfragara/Thesis',
    report: 'https://github.com/LucaSfragara/Thesis/blob/master/Thesis%20%20Final.pdf',
  },
  {
    id: '5',
    title: 'xAI Hackathon Project',
    description: 'AI-powered news-to-podcast converter. Curate articles and generate personalized audio briefings in ~30 seconds with morning news mode and debate mode using Grok Voice API.',
    tags: ['TypeScript', 'React', 'Electron', 'Grok API'],
    status: 'completed',
    github: 'https://github.com/LucaSfragara/xAI-hackathon-public',
    youtube: 'https://www.youtube.com/watch?v=fPvt2M6E7nA',
  },
  {
    id: '6',
    title: 'Social Bias in SSMs',
    description: 'Examines social biases in State Space Models (Mamba) versus transformers across multiple demographics (race, gender, profession, religion), applying debiasing techniques with LoRA.',
    tags: ['Python', 'Mamba', 'Bias Analysis', 'LoRA'],
    status: 'completed',
    github: 'https://github.com/LucaSfragara/social-bias-SSMs',
    report: 'https://github.com/LucaSfragara/social-bias-SSMs/blob/main/Final_Report.pdf',
  },
];

export const skills = [
  // Languages
  'Python',
  'TypeScript',
  'SQL',
  // ML/DL Frameworks
  'PyTorch',
  'Transformers',
  'LangChain',
  // ML Techniques
  'LLMs',
  'Fine-tuning (LoRA/SFT)',
  'RAG Pipelines',
  'Causal Inference',
  'Reinforcement Learning',
  // Data & Cloud
  'Databricks',
  'GCP',
  'Elastic Search',
  'HPC Clusters',
  // Web
  'React',
  'Next.js',
  'Electron',
  // Tools
  'Git',
  'W&B',
];
