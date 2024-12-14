/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./Img/bg-9.jpg')",
        profilebg: "url('./Img/headphone.jpg')",
      },
      keyframes: {
        "border-rotate": {
          "0%": { "background-position": "0% 50%" },

          "100%": { "background-position": "50% 100%" },
        },
      },
      animation: {
        "border-rotate": "border-rotate 5s linear infinite",
      },
      backgroundSize: {
        "gradient-border": "200% 200%",
      },
      fontFamily:{
        "bgfont":"Exo2"
      }
    },
  },
  plugins: [],
};
