/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB22C",
        secondary: "#854836",
        dark: "#333",
        light: "#F7F7F7",
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
  ],
};