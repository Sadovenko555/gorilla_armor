/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BG: '#0D0D0F', 
        FC:  '#EBEBEB', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ["Open Sans", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
