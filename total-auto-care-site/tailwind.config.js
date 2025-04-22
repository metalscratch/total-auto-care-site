/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // blue from logo
        secondary: '#d1d5db', // light gray
      },
    },
  },
  plugins: [],
}
