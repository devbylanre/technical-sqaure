/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Satoshi, sans-serif',
      },
      colors: {
        'brand-100': '#f1f6e0',
        'brand-200': '#d4e3a0',
        'brand-300': '#bed671',
        'brand-400': '#a4c639',
        'brand-500': '#353f12',
      },
    },
  },
  plugins: [],
};
