/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Blues
        'blue-light': '#f0f9ff',
        'blue-medium': '#60a5fa',
        'blue-dark': '#0a4970',
        // Grays
        'gray-light': '#f6f6f6',
        'gray-medium': '#9ca3af',
        'gray-dark': '#292929',
        // Whites
        'white': '#ffffff',
        'off-white': '#fafafa',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 