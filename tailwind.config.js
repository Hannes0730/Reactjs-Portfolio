/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Marck Script", "cursive"],
      "normal-text": ["Roboto", "sans-serif"],
      "paragraph-text": ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
