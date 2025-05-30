/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaef',
          100: '#ccd5df',
          200: '#99abBF',
          300: '#66819F',
          400: '#33577F',
          500: '#0A2342', // Deep Blue (main brand color)
          600: '#091c36',
          700: '#07152a',
          800: '#050e1d',
          900: '#020711',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#e6f8f7',
          100: '#ccf1ef',
          200: '#99e3df',
          300: '#66d5cf',
          400: '#33c7bf',
          500: '#00B2A9', // Sharp Teal (accent color)
          600: '#008e87',
          700: '#006b65',
          800: '#004743',
          900: '#002422',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'], // Changed to Montserrat
      },
      boxShadow: {
        'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 20px 40px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
