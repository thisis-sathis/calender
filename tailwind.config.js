/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tenon: ['Tenon', 'sans-serif'],
      },
      colors: {
        customGreen: '#4A9CA6',
        liteGrey: "#757575",
        liteGreen: "#f0fffc"
      },
    },
  },
  plugins: [],
}

