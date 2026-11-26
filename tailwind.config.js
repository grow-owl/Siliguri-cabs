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
          DEFAULT: '#0F1F18', // Deep Himalayan Pine Forest
          dark: '#091410',    // Deepest Forest Night
          light: '#1E352B',   // Muted Pine Slate (for secondary text/elements)
          surface: '#14261E'  // Elevated Forest Surface
        },
        gold: {
          DEFAULT: '#059669', // Royal Emerald primary
          light: '#10B981',   // Vibrant Emerald Green
          dark: '#047857',    // Deep Forest Emerald
          accent: '#34D399'   // Glowing Mint Emerald
        },
        cream: {
          DEFAULT: '#F0F7F3', // Soft Misty Sage
          light: '#F7FBF9',   // Crisp Nature White-Mint
          dark: '#DCEBE2'     // Subtle Sage Border/Surface
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'luxury-hover': '0 20px 40px -15px rgba(5, 150, 105, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
        'gold-glow': '0 0 25px -5px rgba(16, 185, 129, 0.45)',
      }
    },
  },
  plugins: [],
}
