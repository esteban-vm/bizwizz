const plugin = require('tailwindcss/plugin')

const carouselCheck = plugin(({ addVariant }) => {
  addVariant(
    'carousel-check',
    [...Array(3)].map((_, _index) => {
      const index = _index + 1
      return `&:checked:nth-of-type(${index}) ~ div label:nth-of-type(${index})`
    })
  )
})

const carouselSlide = plugin(({ matchVariant }) => {
  matchVariant(
    'carousel-slide',
    (value) => {
      return `&:checked:nth-of-type(${value}) ~ div:nth-of-type(2)`
    },
    { values: { 2: '2', 3: '3' } }
  )
})

module.exports = { carouselCheck, carouselSlide }
