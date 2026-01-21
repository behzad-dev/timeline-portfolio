export type SocialLink = {
  label: string;
  href: string;
};

export type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  start?: string;
  end?: string;
  bullets: string[];
};

export type SkillCategory = {
  name:
    | 'Frontend'
    | 'Backend'
    | 'Cloud/DevOps'
    | 'Testing/Quality'
    | 'Other'
    | 'Languages';
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  role?: string;
  details?: string;
  improvements?: string[];
  tech: string[];
  links: SocialLink[];
  image?: { src: string; alt: string };
};

export type Portfolio = {
  person: {
    name: string;
    title: string;
    location?: string;
    summary: string;
  };
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    cvUrl?: string;
  };
  timeline: TimelineItem[];
  skills: SkillCategory[];
  projects: Project[];
};

export const portfolio = {
  person: {
    name: 'Behzad',
    title: 'Full-stack Developer — React / Node.js / AWS',
    location: 'Hamburg, Germany',
    summary:
      'Full-stack developer focused on shipping production-ready web apps end-to-end: React/Vue frontends, Node.js APIs, AWS serverless, CI/CD, and monitoring. I care about clean architecture, reliability, and fast feedback loops.',
  },

  links: {
    github: 'https://github.com/behzad-dev',
    linkedin: undefined,
    email: undefined,
    cvUrl: undefined,
  },

  timeline: [
    {
      id: 'early',
      title: 'Early interest in computers',
      bullets: [
        'Fascinated by computers from a young age — always curious how things work.',
        'Started experimenting with simple HTML/CSS and had a small weblog.',
        'Made my first “game” using PowerPoint and learned basic programming with QBasic.',
      ],
    },
    {
      id: 'iran',
      title: 'Iran — early career foundations',
      bullets: [
        'Started building full-stack systems and internal tools in real production environments.',
      ],
    },

    {
      id: 'education',
      title: 'B.Sc. Software Engineering',
      subtitle: 'Islamic Azad University, Tehran (Parand) — Iran',
      start: '2010',
      end: '2016',
      bullets: [
        'Built a strong base in software fundamentals and engineering practices.',
        'Worked on practical projects alongside core computer science coursework.',
      ],
    },

    {
      id: 'civil-service',
      title: 'Civil service — IT support',
      subtitle: 'Iran',
      start: '2017',
      end: '2018',
      bullets: [
        'Handled basic IT support and office workflows (PC setup, troubleshooting, documentation).',
        'Helped users solve common computer issues and kept daily operations running smoothly.',
      ],
    },

    {
      id: 'early-it',
      title: 'Early IT support / junior dev work',
      subtitle: 'Iran',
      start: '2018',
      end: '2019',
      bullets: [
        'Supported small teams with IT tasks and basic web/dev work in short-term roles.',
        'Built confidence in communication, delivery, and solving real-world problems.',
      ],
    },

    {
      id: 'melat-bank',
      title: 'Software Developer — Behsazan Melat (Melat Bank)',
      subtitle: 'Tehran, Iran',
      start: 'Jun 2019',
      end: 'Jul 2021',
      bullets: [
        'Built and maintained integration services using IBM Integration Bus (IIB), exposing REST APIs and documenting flows for maintainability.',
        'Supported internal tooling (Delphi + React) used by branch staff; implemented small SQL utilities/procedures to support operations.',
        'Completed IBM ODM + IIB training and applied decision-automation concepts to integration work.',
      ],
    },

    {
      id: 'germany',
      title: 'Moved to Germany',
      subtitle: 'Hamburg / Lindau / Munich',
      start: 'Jul 2021',
      bullets: [
        'Relocated to Germany and continued building production systems while improving language skills and local experience.',
      ],
    },

    {
      id: '21x',
      title: 'Software Developer — 21X AG (21.Finance)',
      subtitle: 'Lindau, Germany',
      start: 'Apr 2022',
      end: 'Oct 2022',
      bullets: [
        'Delivered an internal time-tracking solution with a Node.js backend on AWS (Lambda + managed services).',
        'Designed REST APIs and ensured smooth usage across desktop and mobile scenarios.',
        'Prototyped a React Native (Expo) mobile app and documented architecture for handover.',
      ],
    },

    {
      id: 'sviper',
      title: 'Software Developer — Sviper GmbH (The Sandbox)',
      subtitle: 'Hamburg, Germany',
      start: 'Dec 2022',
      end: 'Oct 2024',
      bullets: [
        'Built backend features for moderation and back-office operations (workflows, ranking/logic, and admin tooling).',
        'Improved responsiveness and stability using Redis caching and event-driven processing with Kafka.',
        'Introduced safer delivery patterns: feature flags + automated checks, reducing production risk.',
        'Containerized services and shipped via CI/CD; added observability (Datadog) to speed up debugging.',
      ],
    },

    {
      id: 'now',
      title: 'Now',
      subtitle: 'Hamburg, Germany',
      start: 'Nov 2024',
      end: 'Present',
      bullets: [
        'Building a timeline portfolio and sharpening end-to-end workflow (Next.js, AWS, CI/CD).',
        'German learning: completed Goethe intensive courses (late 2025) and continuing with self-study toward B2.',
      ],
    },
  ],

  skills: [
    {
      name: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    { name: 'Backend', items: ['Node.js', 'REST APIs', 'SQL', 'NoSQL'] },
    {
      name: 'Cloud/DevOps',
      items: [
        'AWS CDK',
        'AWS Lambda',
        'API Gateway',
        'S3',
        'CloudFront',
        'Docker',
        'CI/CD',
      ],
    },
    {
      name: 'Testing/Quality',
      items: [
        'Unit & integration testing',
        'Coverage targets (~80%)',
        'ESLint',
        'Prettier',
      ],
    },
    {
      name: 'Other',
      items: [
        'Redis',
        'Kafka',
        'Datadog',
        'SonarCloud',
        'ASP.NET (familiar)',
        'IBM IIB/ODM (familiar)',
        'Delphi (maintenance)',
      ],
    },
    {
      name: 'Languages',
      items: ['Persian (native)', 'English (C1)', 'German (B1 → B2)'],
    },
  ],

  projects: [
    {
      id: 'timeline-portfolio',
      title: 'Timeline Portfolio',
      description:
        'A premium-feeling portfolio with a scroll-drawn journey timeline, strong UI polish, and production AWS hosting + CI/CD.',
      role: 'Solo project',
      highlights: [
        'Scroll-driven timeline with Framer Motion + reduced-motion support.',
        'Static export to S3 + CloudFront + custom domain.',
        'CI/CD deploy pipeline + SEO/social metadata.',
      ],
      details:
        'Built this to refresh fundamentals and show real-world deployment: infra, caching, invalidations, and clean UI components.',
      improvements: [
        'Add case-study pages for deeper technical writeups.',
        'Add light performance checks (Lighthouse / Playwright smoke test).',
      ],
      tech: [
        'Next.js',
        'TypeScript',
        'Tailwind',
        'shadcn/ui',
        'Framer Motion',
        'AWS',
        'CDK',
      ],
      image: { src: '/projects/portfolio.png', alt: 'Screenshot of timeline portfolio' },
      links: [
        { label: 'Live', href: 'https://behzadonline.com/' },
        { label: 'GitHub', href: 'https://github.com/behzad-dev/timeline-portfolio' },
      ],
    },
    {
      id: 'emoji-game',
      title: 'EmojiGuess',
      description:
        'A small web game built for speed and clean UX: responsive layout, simple state, and deploy-ready structure.',
      role: 'Solo project',
      highlights: [
        'Clean responsive UI with TypeScript-first components.',
        'Simple, maintainable state flow.',
        'Deployed as a public demo for sharing and feedback.',
      ],
      details:
        'A fun small project to practice UI flow, feedback loops, and shipping a complete small product.',
      improvements: [
        'Add levels / difficulty modes.',
        'Add analytics to see where users drop off.',
      ],
      tech: ['React', 'TypeScript'],
      image: { src: '/projects/emojiguess.png', alt: 'Screenshot of EmojiGuess game' },
      links: [
        { label: 'Live', href: 'https://emojiguess.behzadonline.com/' },
        { label: 'GitHub', href: 'https://github.com/behzad-dev/emoji-game' },
      ],
    },
  ],
} as const satisfies Portfolio;
