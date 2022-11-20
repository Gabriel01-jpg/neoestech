const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFF',
      "white-100": '#EFF5F9',
      'black': '#000',
      'purple-800': '#54399E',
      'purple-700': '#7a319d',
      'orange-800': '#e16630',
      gray: {
        50: '#f9fafb',
        100: '#e2e8f0',
        400: '#9ca3af',
        600: '#475569',
        700: '#334155'
      }
    },
    fontFamily: {
      serif: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      sans: ['Roboto', 'serif']
    },
    borderWidth: {
      "border-1": '1px'
    }
  },
  plugins: [],
}
