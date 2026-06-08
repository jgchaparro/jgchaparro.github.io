import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tsakonian Digital Theme — deep blue accent (light mode)
        brand: {
          DEFAULT: '#003366', // blue-900 equivalent, primary accent
          50: '#e6edf5',
          100: '#cddaeb',
          200: '#9bb6d6',
          300: '#6991c2',
          400: '#376dad',
          500: '#054899',
          600: '#003d80',
          700: '#003366',
          800: '#00264d',
          900: '#001a33',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [typography],
};
