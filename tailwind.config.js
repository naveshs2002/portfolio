/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#111827',
        primary: '#38bdf8',
        secondary: '#8b5cf6',
        accent: '#14b8a6',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.18), transparent 35%), radial-gradient(circle at 50% 100%, rgba(20,184,166,0.15), transparent 40%)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-25px) translateX(15px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(30px) rotate(15deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 12s ease infinite',
        float: 'float 8s ease-in-out infinite',
        floatSlow: 'floatSlow 14s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56,189,248,0.35)',
        glowPurple: '0 0 30px rgba(139,92,246,0.35)',
        glowTeal: '0 0 30px rgba(20,184,166,0.35)',
      },
    },
  },
  plugins: [],
}
