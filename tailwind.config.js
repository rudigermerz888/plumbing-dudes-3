/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Diesel Dudes Brand Colors
        'primary-orange': '#E55722',
        'secondary-blue': '#2D5AA0', 
        'teal-accent': '#4ECDC4',
        'dark-gray': '#2C2C2C',
        'light-gray': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'h1': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
        'button': ['0.875rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '0.05em' }],
        'nav': ['0.9rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'pill': '50px',
      },
      boxShadow: {
        'card': '0 5px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
        'button': '0 8px 25px rgba(229, 87, 34, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
