/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: 
    {
      grayscale: {
      25: '25%',
      50: '50%',
      75: '75%',
    },
  },
  },
  plugins: [],
}

