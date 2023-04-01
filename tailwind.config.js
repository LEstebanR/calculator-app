/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
  },
  theme: {
    fontFamily: {
      'sans': ['"League Spartan"', 'sans-serif'],
    },
    colors: {
      'background-main': 'hsl(222, 26%, 31%)',
      'background-toggle': 'hsl(223, 31%, 20%))',
      'background-screen': 'hsl(224, 36%, 15%)',
      'white': '#ffff'
    },
    extend: {
      spacing: {
        '1': '1rem',
        '2': '2rem',
        '4': '4rem',
        '8': '8rem',
      },
    },
  },
  plugins: [],
}