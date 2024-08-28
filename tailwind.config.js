/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.tsx",
    "./node_modules/@natsuneko-laboratory/ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
