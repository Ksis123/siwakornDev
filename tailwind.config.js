/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        animate2: {
          "0%": {transform: "rotate(0deg)"},
          "to": {transform: "rotate(360deg)"},
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .2s infinite",
        bordering: "animate2 4s linear infinite",
      },
      screens: {
        "3xl": "1680px",
      },
      colors: {
        green: "c5ff95",
        black: "#171513",
        dark: {
          primary: "#e68a5d",
          secondary: "#ff8264",
          background: "#171513",
          text: "#fefefe",
          text1: "#fed8c6",
          text2: "#FFBB70",
          text3: "#ED9455",
          text4: "#481E14",
        },
        light: {
          primary: "#e68a5d",
          secondary: "#ff8264",
          background: "#fefefe",
          text: "#171513",
          text1: "#fed8c6",
          text2: "#FFBB70",
          text3: "#ED9455",
          text4: "#481E14",
        },
      },
    },
  },
  plugins: [],
};
