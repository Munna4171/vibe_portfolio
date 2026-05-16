/**
 * Portfolio identity — edit education entries below when you want degrees listed on-page.
 * Projects live in src/data/projects.ts (linked to GitHub).
 */

export const person = {
  fullName: 'Bhagath Pranav',
  /** One-line hook for recruiters */
  tagline:
    'Data analytics & SQL-focused developer building portfolio apps with Astro and shipping notebooks that turn messy retail data into decisions.',
  metaDescription:
    'Bhagath Pranav — portfolio: analytics projects (SQL, Python, Jupyter, Tableau), Astro sites, and JavaScript. Links to GitHub repos.',
  githubUsername: 'Munna4171',
  githubUrl: 'https://github.com/Munna4171',
  avatarUrl: 'https://avatars.githubusercontent.com/u/122788329?v=4',
  /** Used when avatar fails */
  avatarAlt: 'Bhagath Pranav portrait',
};

/** Appears on About — concise paragraphs recruiters skim first */
export const bio = {
  headline:
    'I specialize in SQL-driven analytics, Python notebooks, and dashboards—plus modern static sites when I want ideas on the web fast.',
  paragraphs: [
    'Public GitHub work spans end-to-end analytics (inventory & behaviour datasets), exploratory analysis with Pandas and Tableau, and hands-on MERN workshop builds. I care about clean queries, reproducible notebooks, and narratives recruiters can verify by clicking through repos.',
    'This site is built with Astro and deployed on Cloudflare—same stack as the vibe_portfolio repo—so technical reviewers see both craft and analytics depth.',
  ],
};

/** Numbered “What I Do” — tweak wording anytime */
export const whatIDo = [
  'Design SQL schemas and analytical queries for inventory, basket behaviour, and funnel-style problems.',
  'Prototype insights in Jupyter—Python data prep, exploratory charts, and paths toward dashboards.',
  'Story-find with visualization tools (e.g. Tableau-style workflows on restaurant marketplace data).',
  'Ship lightweight front ends (Astro, Tailwind) and workshop-style JavaScript apps when product UX matters.',
];

/**
 * Education timeline — edit rows in `education` below.
 */
export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Vardhaman College of Engineering',
    period: '2023–2027',
    highlights: [
      'Core coursework (IT): database systems & SQL, data structures, probability & statistics, web technologies, software engineering.',
      'Portfolio-aligned domains: analytical SQL & relational modeling (e‑commerce / logistics analytics); Python & Jupyter for exploratory analysis; visualization & dashboards; JavaScript & MERN workshop patterns; static sites with Astro.',
      'Keywords: SQL · Python · Pandas · Jupyter Notebook · data analytics · data visualization · Tableau · Git/GitHub · JavaScript · MERN · Astro · Tailwind CSS · Cloudflare.',
    ],
  },
];

/** Optional contact lines — fill to show mailto / LinkedIn */
export const contact = {
  email: '' as string,
  linkedinUrl: '' as string,
};
