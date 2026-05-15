/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        red: '#FF1A1A',
      },
      fontFamily: {
        body: ['Switzer', 'sans-serif'],
        display: ['Khand', 'sans-serif'],
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
