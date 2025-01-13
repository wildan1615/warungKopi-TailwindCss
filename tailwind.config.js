/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gold": "#c17e1f",
        "semigold": "#d38c22",
        "primary": "#1b1f22",
        "secondary": "#676c6f",
        "secondary-light": "#bdc0c2",
        "tumbas": "#4A4A4A"
      },
      fontFamily: {
        "lato": "Lato, sans-serif"
      },
      zIndex: {
        "tooltip": 10,
        "fixed": 100
      }
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  plugins: [],
}

