/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  hoverOnlyWhenSupported: true,
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#222',
        primary: '#9F0086',
        secondary: '#9A9A9A',
      },
    },
  },
  plugins: [],
};
