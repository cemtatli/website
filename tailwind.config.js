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
        "--black": "#111111",
        "--gray": "#888888",
        "--green": "#8AFF61",
        "--purple": "#E84FBD",
        "--blue": "#3EC9C9",
        "--yellow": "#edff50d5",
        "--yellow2": "#edff50d5",
      },
      fontSize: {
        "--contact": ["50px", "60px"],
      },
    },
  },
  plugins: [],
};
