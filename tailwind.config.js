/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        30: "7.5rem",
        1200: "75rem",
      },
      colors: {
        "--black": "#141414",
        "--gray": "#5B7887",
        "--green": "#0db3a5",
        "--purple": "#E84FBD",
        "--blue": "#23c3f3",
      },
      fontSize: {
        "--contact": ["54px", "60px"],
      },
    },
  },
  plugins: [require("daisyui")],
};
