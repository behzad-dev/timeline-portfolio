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
      id: 'iran',
      title: 'Iran — early career foundations',
      bullets: [
        'Started building full-stack systems and internal tools in real production environments.',
      ],
    },
    {
      id: 'education',
      title: 'B.Sc. Software Engineering',
      subtitle: 'Islamic Azad University, Tehran (Branch) — Iran',
      start: '2010',
      end: '2016',
      bullets: [
        'Built a strong base in software fundamentals and engineering practices.',
        'Worked on practical projects alongside core computer science coursework.',
      ],
    },
    {
      id: 'melat-bank',
      title: 'Software Developer — Melat Bank',
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
        'Containerized services and shipped via CI/CD; added observability (logs/metrics) to speed up debugging (Datadog).',
      ],
    },
    {
      id: 'now',
      title: 'Now',
      subtitle: 'Hamburg, Germany',
      start: 'Nov 2024',
      end: 'Present',
      bullets: [
        'Building a timeline portfolio and sharpening end-to-end production workflow (Next.js, AWS, CI/CD, monitoring).',
        'Continuing German learning (completed A2.2; working toward B1).',
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
        'Scroll-driven timeline with reduced-motion support.',
        'Static export hosted on S3 + CloudFront + custom domain.',
        'GitHub Actions deploy pipeline + SEO/social metadata.',
      ],
      details:
        'Built this as a “production-minded” static portfolio: fast CDN delivery, real IaC, and a clean component system. Focus was polish, performance, and a credible end-to-end workflow.',
      improvements: [
        'Add a contact form using SES (avoid email spam).',
        'Add lightweight analytics (privacy-friendly).',
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
        'Simple, maintainable state flow for fast iteration.',
        'Deployed as a public demo for sharing and feedback.',
      ],
      details:
        'Built as a frontend exercise: tight UI, quick feedback loop, and a clear “demo-able” experience. Kept the architecture simple and readable.',
      improvements: ['Add tests for core game logic.'],
      tech: ['React', 'TypeScript'],
      image: { src: '/projects/emojiguess.png', alt: 'Screenshot of EmojiGuess game' },
      links: [
        { label: 'Live', href: 'https://emojiguess.behzadonline.com/' },
        { label: 'GitHub', href: 'https://github.com/behzad-dev/emoji-game' },
      ],
    },
  ],
} as const satisfies Portfolio;
