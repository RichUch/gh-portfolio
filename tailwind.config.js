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
        darkdark: "#222",
        light: "#f0f0f0",
        lightdark: "#d8d8d8"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  daisyui: {
    themes: []
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-rtl'),
    require("tailwind-scrollbar"),
  ],
};
