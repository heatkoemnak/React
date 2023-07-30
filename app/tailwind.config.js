/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#2d2d2d",
      },
    },
  },
  plugins: [require("flowbite/plugin", "tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
