/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#2c1810',
        },
        secondary: {
          50: '#f8f7f4',
          100: '#e8e6dd',
          200: '#d5d0c2',
          300: '#c0b8a3',
          400: '#ab9f85',
          500: '#998b6e',
          600: '#8c7b5f',
          700: '#756550',
          800: '#5d4e3e',
          900: '#483c30',
          950: '#2a231c',
        },
        accent: {
          50: '#fbf7f4',
          100: '#f3e5dd',
          200: '#e8ccbe',
          300: '#ddb39e',
          400: '#d29a7f',
          500: '#c78160',
          600: '#b66d4d',
          700: '#955740',
          800: '#744333',
          900: '#573226',
          950: '#2d1a13',
        }
      },
      fontFamily: {
        sans: [
          'Playfair Display, Georgia, ui-serif, serif'
        ],
        serif: [
          'Lora, Georgia, Cambria, "Times New Roman", Times, serif'
        ],
        mono: [
          'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        ]
      },
      backgroundImage: {
        'vintage-texture': "url('https://www.transparenttextures.com/patterns/paper-fibers.png')"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}