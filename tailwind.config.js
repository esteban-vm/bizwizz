const { carouselCheck, carouselSlide } = require('./tailwind.plugins')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/(pages|components|views|app)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-120': 'linear-gradient(120deg, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: 'rgb(var(--color-pink))',
      'primary-light': 'rgb(var(--color-light-pink))',
      black: 'rgb(var(--color-black))',
      white: 'rgb(var(--color-white))',
      red: 'rgb(var(--color-red))',
      lightgrey: 'rgb(var(--color-light-grey))',
      'lightgrey-2': 'rgb(var(--color-light-grey-2))',
      darkgrey: 'rgb(var(--color-dark-grey))',
      'darkgrey-2': 'rgb(var(--color-dark-grey-2))',
      yellow: 'rgb(var(--color-yellow))',
    },
  },
  plugins: [require('tailwindcss-touch')(), carouselCheck, carouselSlide],
  future: { hoverOnlyWhenSupported: true },
}
