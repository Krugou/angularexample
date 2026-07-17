/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 8px 30px rgb(15 23 42 / 0.08)',
      },
    },
  },
  plugins: [],
};
