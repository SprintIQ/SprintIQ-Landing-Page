/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-1': "#003710"
      },
      fontFamily:{
        "Montserrat": '"Montserrat"'
      }
    },
  },
  plugins: [],
}