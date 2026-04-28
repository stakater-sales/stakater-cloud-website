/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          DEFAULT: '#FF5623',
          dark: '#CC451C',
          light: '#FF8C6E',
        },
        purple: {
          DEFAULT: '#1A0D32',
          dark: '#0A0614',
          light: '#2D1A55',
        },
        bg: {
          main: '#F5F5F5',
          alt: '#E8E8E8',
          card: '#D1CFD6',
        },
        border: '#D9D9D9',
        muted: '#5a5668',
      },
      spacing: {
        section: '144px',
        'section-mobile': '72px',
      },
      fontSize: {
        'h1': ['56px', { lineHeight: 'auto', fontWeight: '700', letterSpacing: '-1.5px' }],
        'h2': ['48px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-1px' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.5px' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'p1': ['24px', { lineHeight: '1.5' }],
        'p2': ['18px', { lineHeight: '1.5' }],
        'p3': ['16px', { lineHeight: '1.5' }],
        'p4': ['14px', { lineHeight: '1.5' }],
      },
      maxWidth: {
        container: '1200px',
      },
      padding: {
        container: '120px',
        'container-tablet': '40px',
        'container-mobile': '16px',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-dot': 'pulseDot 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
