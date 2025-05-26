/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111',
        accent: '#333333',
        muted: '#666666',
        'rn-dark': '#121212',
        'rn-darker': '#0a0a0a',
        'rn-gray': '#1e1e1e',
        'rn-light-gray': '#2d2d2d',
        'rn-red': '#e83a3a',
        'rn-accent': '#e83a3a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1' }],
        'display': ['2.5rem', { lineHeight: '1.2' }]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'screen-xl': '1280px'
      }
    }
  },
  plugins: []
};
