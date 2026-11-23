/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#202020',
          dark: '#141414',
          light: '#2d2d2d',
          surface: '#1c1c1c'
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#D8BC88',
          dark: '#A88750',
          accent: '#E6CF9B'
        },
        cream: {
          DEFAULT: '#F6F2EA',
          light: '#FAF7F2',
          dark: '#EBE4D5'
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'luxury-hover': '0 20px 40px -15px rgba(197, 164, 109, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'gold-glow': '0 0 25px -5px rgba(197, 164, 109, 0.4)',
      }
    },
  },
  plugins: [],
}
