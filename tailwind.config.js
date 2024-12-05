/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily:{
      "lilita":["Lilita One", "sans-serif"],
      "lobster":["Lobster", "serif"],
      "jost":["Jost", "serif"]
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    animation:{
      slideIn:'slideIn 1s ease-in-out',
    }
    },
  },
  plugins: [],
}

