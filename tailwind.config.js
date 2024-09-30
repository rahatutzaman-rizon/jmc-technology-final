/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#988efb',
        
        },
        secondary: {
          DEFAULT: '#5ccff1',
         
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}