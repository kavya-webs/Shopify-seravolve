/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          glacial: '#F4F8FB',
          'aqua-mist': '#E8F2F8',
          aqua: '#7BB8D4',
          'aqua-deep': '#4A96B8',
          'aqua-light': '#B8D9E8',
          slate: '#2C3E50',
          'slate-light': '#5D7A8C',
          marble: '#D1D5DB',
          gold: '#C5A55A',
          'gold-light': '#D4B978',
          frost: '#FFFFFF',
          charcoal: '#1A2332',
          champagne: '#F4F8FB',
          brown: '#2C3E50',
          stone: '#5D7A8C',
          mocha: '#5D7A8C',
          mint: '#B8D9E8',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--marquee-duration, 30s) linear infinite',
        'marquee-vertical-reverse': 'marquee-vertical-reverse var(--marquee-duration, 30s) linear infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-100% - var(--marquee-gap, 1rem)))' }
        },
        'marquee-reverse': {
          'from': { transform: 'translateX(calc(-100% - var(--marquee-gap, 1rem)))' },
          'to': { transform: 'translateX(0)' }
        },
        'marquee-vertical': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(calc(-100% - var(--marquee-gap, 1rem)))' }
        },
        'marquee-vertical-reverse': {
          'from': { transform: 'translateY(calc(-100% - var(--marquee-gap, 1rem)))' },
          'to': { transform: 'translateY(0)' }
        },
        'pulse-border': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(123, 184, 212, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(123, 184, 212, 0)' }
        }
      }
    },
  },
  plugins: [],
}
