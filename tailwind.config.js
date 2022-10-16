/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage:{
      'Computer': "url('../src/images/Screen.png')",
    },
    objectImage:{
      
    },
    extend: {
      colors: {
        'navy-blue': '#003366',
      }
    },
  },
  plugins: [],
}