/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors: {
        // Restaurant Brand Colors
        brand: {
          50: '#fef7ed',
          100: '#fdefd0',
          200: '#fbd99f',
          300: '#f8c06e',
          400: '#f5a23a',
          500: '#f38917', // Primary orange
          600: '#e4730c',
          700: '#bd5a0c',
          800: '#964712',
          900: '#7a3b12',
        },
        // South Indian Colors
        spice: {
          turmeric: '#f4d03f',
          saffron: '#ff8c42',
          cardamom: '#8fbc8f',
          cinnamon: '#d2691e',
          chili: '#dc143c',
          curry: '#cc9900',
        },
        // UI Colors
        warm: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cfc7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      backgroundImage: {
        'spice-gradient': 'linear-gradient(135deg, #f4d03f, #ff8c42, #dc143c)',
        'warm-gradient': 'linear-gradient(135deg, #fdf8f6, #f2e8e5)',
        'brand-gradient': 'linear-gradient(135deg, #f38917, #e4730c)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'sizzle': 'sizzle 0.8s ease-in-out infinite',
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
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        sizzle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.05) rotate(-1deg)' },
          '75%': { transform: 'scale(0.95) rotate(1deg)' },
        },
      },
      boxShadow: {
        'food': '0 4px 20px rgba(243, 137, 23, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'spice': '0 0 30px rgba(244, 208, 63, 0.3)',
      },
    },
  },
  plugins: [],
}