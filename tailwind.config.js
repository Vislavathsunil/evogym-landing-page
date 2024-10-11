/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd0d7",
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwave: "url('./assets/AbstractWaves.png')",
        sparkle: "url('./assets/Sparkles.png')",
      },
    },
  },
  plugins: [],
};
