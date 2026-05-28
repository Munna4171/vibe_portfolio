/** Curated for recruiters — links open GitHub */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  live?: string;
  image?: string;
  mainTech?: string;
};

export const projects: Project[] = [
  {
    title: 'AI-chart',
    description: 'Personal AI chatbot clone powered by FreeLLMAPI + Llama 3.3',
    tags: ['TypeScript'],
    href: 'https://github.com/BhagathPranav/AI-chart',
    image: '/images/ai_chart_preview.png',
    mainTech: 'TypeScript',
  },
  {
    title: 'Customer Shopping Behavior Analysis',
    description: 'End-to-end data analytics uncovering customer shopping trends using Python',
    tags: ['Python', 'Data Analytics', 'Pandas'],
    href: 'https://github.com/BhagathPranav/Customer_Shopping_Behavior_Analysis',
    image: '/images/customer_shopping_preview.png',
    mainTech: 'Python',
  },
  {
    title: 'Movie Data Analysis',
    description: 'Data exploration and insight generation on a movie dataset using Python',
    tags: ['Python', 'Jupyter Notebook'],
    href: 'https://github.com/BhagathPranav/movie-data-analysis',
    image: '/images/movie_data_preview.png',
    mainTech: 'Python',
  },
  {
    title: 'Pinventory',
    description: 'Inventory management app with live deployment',
    tags: ['TypeScript'],
    href: 'https://github.com/BhagathPranav/Pinventory',
    live: 'https://pinventory-rho.vercel.app',
    image: '/images/pinventory_preview.png',
    mainTech: 'TypeScript',
  },
  {
    title: 'Zepto E-Commerce Data Analysis',
    description: 'Comprehensive SQL-driven analytics for Zepto e-commerce platform',
    tags: ['SQL', 'Data Analytics'],
    href: 'https://github.com/BhagathPranav/Zepto-E-Commerce-Data-Analysis-SQL-',
    image: '/images/zepto_preview.png',
    mainTech: 'SQL',
  },
  {
    title: 'Zomato Data Analysis',
    description: 'Data analytics project exploring Zomato dataset using Python and Tableau',
    tags: ['Python', 'Tableau', 'Data Analytics'],
    href: 'https://github.com/BhagathPranav/Zomato-Data-Analysis',
    image: '/images/zomato_preview.png',
    mainTech: 'Python',
  },
  {
    title: 'Travel Bucket',
    description: 'MERN stack workshop application for managing travel itineraries',
    tags: ['MERN', 'JavaScript'],
    href: 'https://github.com/BhagathPranav/travel_bucket',
    image: '/images/travel_bucket_preview.png',
    mainTech: 'JavaScript',
  },
  {
    title: 'SQL Learning Repo',
    description: 'Repository containing SQL scripts and learning exercises',
    tags: ['SQL', 'Learning'],
    href: 'https://github.com/BhagathPranav/sql-learning-repo',
    image: '/images/sql_learning_preview.png',
    mainTech: 'SQL',
  },
  {
    title: 'Vibe Portfolio',
    description: 'Personal portfolio site built with Astro',
    tags: ['Astro'],
    href: 'https://github.com/BhagathPranav/vibe_portfolio',
    live: 'https://bhagathpranav.vercel.app',
    image: '/images/vibe_portfolio_preview.png',
    mainTech: 'Astro',
  },
];
