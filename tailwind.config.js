/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/*.{html,js}", "./components/**/*.{html,js}", "./pages/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'boilermaker-gold': '#cfb991',
      'aged-gold': '#8e6f3e',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    },
  },
  plugins: [],
}

