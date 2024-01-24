/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    
],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#BA9BC3',
          200: '#B69DD4',
        },
        'beige': {
          100: '#F6E8B1',
        },
        'tBlue': {
          100: '#1B4965',
        },
        
      },
      textUnderlineOffset: {
        6: '6px',
      }
    },
    
  },
  plugins: [],
}

