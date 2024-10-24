/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Noto Serif Oriya", "serif"],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}