/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        foreground: '#ffffff',
        accent: '#f46c38',
        muted: '#8e8e8e',
        borderline: 'rgba(182, 180, 189, 0.2)',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        display: '-0.02em',
      },
    },
  },
  plugins: [],
};
