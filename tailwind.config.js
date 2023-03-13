const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /*         sans: ["Inter", "sans-serif"], */
        sans: ["var(--font-inter)"],
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
      },
      colors: {
        bg: "#222",
        text: "#aaa",
        hover: "#111",
        skills: "#cdf686",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
});
