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
        // Blues (kept for compatibility)
        'blue-light': '#eff6ff',
        'blue-medium': '#3b82f6',
        'blue-dark': '#1e40af',
        // Grays (refined for light-first design)
        'gray-light': '#f9fafb',
        'gray-medium': '#6b7280',
        'gray-dark': '#111827',
        // Whites
        'white': '#ffffff',
        'off-white': '#f8fafc',
        // SYINQ brand accent
        'syinq-indigo': '#4f46e5',
        'syinq-indigo-light': '#eef2ff',
        // Neutral slate
        'slate-50': '#f8fafc',
        'slate-100': '#f1f5f9',
        'slate-200': '#e2e8f0',
        'slate-600': '#475569',
        'slate-800': '#1e293b',
        'slate-900': '#0f172a',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        shimmer: 'shimmer 2s infinite',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.07)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        'syinq': '0 4px 24px -4px rgba(79,70,229,0.18)',
      },
    },
  },
  plugins: [],
}
