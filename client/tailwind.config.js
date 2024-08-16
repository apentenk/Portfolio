import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '0rem',
      margin: '0rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fde68a",

          "secondary": "#f3e8ff",

          "accent": "rgb(2 6 23)",

          "neutral": "#292524",

          "base-100": "rgb(15 15 23)"
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}