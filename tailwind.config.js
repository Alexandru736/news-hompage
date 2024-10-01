/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
    colors: {
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
    },
    
    extend: {
      screens: {
        'sm': '320px',
        'md': '500px',
      }, 
      fontSize: {
        'base': '1rem',
      },
      gridTemplateRows: {
        'layout': '300px auto'
      },
    },
  },
  plugins: [],
}