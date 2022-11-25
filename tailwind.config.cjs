/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': 2,
        '5': 5,
        '7': 5
      }
    },
  },
  plugins: [],
}
