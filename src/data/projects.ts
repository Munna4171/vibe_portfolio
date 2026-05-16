/** Curated for recruiters — links open GitHub */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: 'Personal Portfolio (Astro)',
    description:
      'Minimal editorial portfolio site: Astro, Tailwind v3, static output, Cloudflare deploy story.',
    tags: ['Astro', 'Tailwind CSS', 'Cloudflare'],
    href: 'https://github.com/Munna4171/vibe_portfolio',
  },
  {
    title: 'Zepto E-Commerce SQL Analytics',
    description:
      'SQL-driven analysis of e-commerce inventory—from schema design and cleaning to warehouse, marketing, and logistics insights.',
    tags: ['SQL', 'Analytics', 'Data modeling'],
    href: 'https://github.com/Munna4171/Zepto-E-Commerce-Data-Analysis-SQL-',
  },
  {
    title: 'Customer Shopping Behaviour Analysis',
    description:
      'End-to-end analytics: Python, SQL, and interactive dashboards to surface shopping trends.',
    tags: ['Python', 'Jupyter Notebook', 'SQL'],
    href: 'https://github.com/Munna4171/Customer_Shopping_Behavior_Analysis',
  },
  {
    title: 'Zomato Market Analysis',
    description:
      'Pandas preprocessing plus Tableau-focused visualization for restaurant marketplace trends.',
    tags: ['Pandas', 'Jupyter Notebook', 'Tableau'],
    href: 'https://github.com/Munna4171/Zomato-Data-Analysis',
  },
  {
    title: 'Travel Bucket (MERN Workshop)',
    description:
      'Workshop-style JavaScript project exploring full-stack patterns with the MERN-style stack.',
    tags: ['JavaScript', 'MERN'],
    href: 'https://github.com/Munna4171/travel_bucket',
  },
  {
    title: 'SQL Learning Repo',
    description:
      'Personal SQL exercises and schema patterns—foundational querying practice documented in-repo.',
    tags: ['SQL', 'Learning'],
    href: 'https://github.com/Munna4171/sql-learning-repo',
  },
];
