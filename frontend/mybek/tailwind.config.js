const { default: colors } = require('./config/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    colors: {
      gray: {
        100: '#FBFBFA',
        200: '#F5F4F2',
        300: '#EBE9E5',
        400: '#D7D2CB',
        500: '#A7A098',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        danger: colors.danger,
      },
      fontSize: {
        'page-title': [
          '3.5rem',
          {
            fontWeight: '700',
          },
        ],
        'card-title': [
          '1.5rem',
          {
            fontWeight: '700',
          },
        ],
        'content-title': [
          '2.5rem',
          {
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
