/* eslint-disable no-undef */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers", "cursive"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      animation: {
        "bounce-once": "transform",
        enteranceLeft: "enteranceLeft 0.5s ease-in-out",
        enteranceRight: "enteranceRight 0.5s ease-in-out",
        spin: "spin 1s linear once",
      },
      keyframes: {
        enteranceLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        enteranceRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
