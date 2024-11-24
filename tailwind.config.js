/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': {
          DEFAULT: 'hsl(207, 26%, 17%)',
          light: 'hsl(200, 15%, 8%)',
        },
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
