module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
