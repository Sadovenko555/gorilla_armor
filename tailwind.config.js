/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BG: '#1C1C1C', 
        FC:  '#EBEBEB',
        head:  '#2B2B2B', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ["Open Sans", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
