/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      blue: '#345FF6',
      gunmental: '#253347',
      dark_electric_blue: '#5E6E85',
      borders: '#D8E2E7',
      white: '#FFFFFF',
      left: 'rgba(214, 230, 254, 1)',
      right: 'rgba(214, 252, 254, 0)'
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    fontSize: {
      title: '56px',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

