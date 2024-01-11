/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      keyframes:{
        devurandomkey: {
          '0%, 100%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(1vmin,0)' },
        }
      },           
      animation:{
        devurandom: "devurandomkey ease-in-out infinite 4s  "

        
      },
   }, 
  },
  plugins: [],
}

