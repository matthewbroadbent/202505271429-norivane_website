/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
      colors: {
        primary: {
          50: '#e6edf5',
          100: '#ccdaeb',
          200: '#99b5d7',
          300: '#6690c3',
          400: '#336baf',
          500: '#00469b',
          600: '#0b3a7c',
          700: '#0b2242', // Header color
          800: '#0a2342', // Deep Blue (primary brand color)
          900: '#091d38',
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
        },
        accent: {
          50: '#e6f9f8',
          100: '#ccf3f1',
          200: '#99e7e3',
          300: '#66dbd5',
          400: '#33cfc7',
          500: '#00B2A9', // Teal accent color
          600: '#008e87',
          700: '#006b65',
          800: '#004743',
          900: '#002422',
        },
      },
    },
  },
  plugins: [],
}
