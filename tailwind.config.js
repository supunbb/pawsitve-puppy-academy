/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.3)',
        'primary' : '#450247',
        'secondary' : '#FCBD16',
      },
      backgroundImage: {
        'hero-background': "url('./src/assets/hero bg.png')",
      }
    },
  },
  plugins: [],
}