/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'main':'1fr 0.2fr 1fr 1fr'
      }
    },
    screens:{
      'xs':{'max':'640px'},
      'sm': '640px',
      'md': '768px',
      'lg':'1024px'
    }
  },
  plugins: [],
}
