/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neural: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cyber: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        matrix: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      animation: {
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
        'data-flow': 'dataFlow 2s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'morph': 'morph 6s ease-in-out infinite',
        'particle': 'particle 8s linear infinite',
      },
      keyframes: {
        neuralPulse: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: 0 },
        },
        hologram: {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'rotateY(5deg) rotateX(2deg)' },
          '50%': { transform: 'rotateY(0deg) rotateX(5deg)' },
          '75%': { transform: 'rotateY(-5deg) rotateX(-2deg)' },
        },
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '20px' },
          '25%': { borderRadius: '50px 20px 20px 50px' },
          '50%': { borderRadius: '20px 50px 50px 20px' },
          '75%': { borderRadius: '50px 20px 50px 20px' },
        },
        particle: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translate(200px, -200px) rotate(360deg)', opacity: 0 },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'neural': ['Exo 2', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

