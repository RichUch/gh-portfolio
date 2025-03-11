/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FFB22C",
        secondary: "#854836",
        dark: "#333",
        light: "#f0f0f0",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  daisyui: {
    themes: [
      // {
      //   light: "light",
      //   dark: "dark",
      // }
    ]
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-rtl'),
  ],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {

// };