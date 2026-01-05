/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['"PT Mono"', 'monospace'],
      },

      keyframes: {
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(0,197,200,0.6)',
          },
          '50%': {
            textShadow: '0 0 25px rgba(0,197,200,1)',
          },
        },
      },


      keyframes: {
        slideInLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        fadeLeft: 'fadeLeft 0.9s ease-out forwards',
        fadeRight: 'fadeRight 0.9s ease-out forwards',
        glow: 'glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
