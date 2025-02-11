/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 500ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['black'],
    base: false
  },
}
