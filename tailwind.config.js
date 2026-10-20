/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tn: {
          navy: '#0b2545',
          darkBlue: '#133c55',
          blue: '#134074',
          lightBlue: '#8da9c4',
          paleBlue: '#eef4f8',
          saffron: '#e65c00',
          orange: '#f26419',
          green: '#1e7b4d',
          darkGreen: '#145934',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Noto Sans Tamil', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
