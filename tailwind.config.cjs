/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Oxanium'],
        'subtitle': ['"Barlow Condensed"'],
        'body': ['Barlow'],
      }
    },
  },
  plugins: [],
};
