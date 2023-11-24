/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['Spartan MB', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}