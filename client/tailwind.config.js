/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensure all relevant file types are included
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
