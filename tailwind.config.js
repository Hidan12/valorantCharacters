/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveup:{
          '0%, 100%': {bottom: '-1.5rem'},
          '100%': {bottom: '1.5rem'}
        }
      },
      animation: {
        moveup:'moveup 1s forwards ease' 
      }
    },
  },
  plugins: [],
}
