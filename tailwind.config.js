/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        36: '9.31rem'
      },
      colors: {
        primary: '#7A8DFD',
        secondary: '#DDE2FF',
        background: '#F8F9FF',
        grey: '#BBBDD0'
      },
      maxWidth: {
        '1/2': '50%'
      }
    }
  },
  plugins: []
}
