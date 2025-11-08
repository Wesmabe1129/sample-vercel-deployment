/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React components
  ],
  theme: {
    extend: {
      keyframes: {
        typeErase: {
          "0%": { width: "0ch" },          // start typing
          "40%": { width: "14ch" },        // full text typed
          "60%": { width: "14ch" },        // pause before erasing
          "100%": { width: "0ch" }         // erase completely
        },
        blink: {
          "50%": { borderColor: "transparent" }
        }
      },
      animation: {
        typeErase: "typeErase 5s steps(13, end) infinite",
        blink: "blink .5s step-end infinite"
      }
    },
  },
  plugins: [],
};
