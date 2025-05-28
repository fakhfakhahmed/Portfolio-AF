/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        pulse: 'pulse 2s infinite',
        'flip-180': 'flip 0.6s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'spin-once': 'spinOnce 0.5s ease-in-out'
      },
      perspective: {
        '500': '500px'
      },
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
  plugins: [],
  variants: {
    extend: {
      scale: ['hover', 'active'],
      transform: ['hover', 'active']
    }
  }
};
