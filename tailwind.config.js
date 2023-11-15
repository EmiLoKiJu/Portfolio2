/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '16px',
      xl: '24px',
      '2xl': '1.563rem',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '56px',
    },
    extend: {
      fontFamily: {
        'crete': ['Crete Round', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'grey2': '#3c3a39',
        'orange2': '#ff6b00',
        'black2': '#1c1a19',
        'white2': '#fff5e1',
      },
    },
  },
  plugins: [],
}

