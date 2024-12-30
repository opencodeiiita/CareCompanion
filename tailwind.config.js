/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        pink: "#d4295c",
        white: "#fff",
        lightpink: "#ffc0cb"
      }
    }, 
    fontFamily :{ 
      Lobster:[ "Lobster", "sans-serif"],
      Jost:["Jost", "sans-serif"],
      PTSans:["PT Sans", "sans-serif"],
      Playfair:["Playfair Display", "serif"]
    },
  },

  plugins: [],
};
