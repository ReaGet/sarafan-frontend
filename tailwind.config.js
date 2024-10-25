import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'green': {
          DEFAULT: 'var(--green)'
        },
        'black': {
          DEFAULT: 'var(--black)'
        },
        'gray': {
          DEFAULT: 'var(--gray)'
        },
        'gray-dark': {
          DEFAULT: 'var(--gray-dark)'
        },
      },
      borderRadius: {
        DEFAULT: '0.4rem',
        lg: '0.8rem',
      }
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        'html': { fontSize: '10px' },
      })
    }),
  ],
}

