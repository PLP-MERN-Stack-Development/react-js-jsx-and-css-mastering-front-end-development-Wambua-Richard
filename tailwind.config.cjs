/** @type {import('tailwindcss').Config} */

export default {
    darkMode: "class", // Enable dark mode via class strategy
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          bounceIn: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-5%)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          bounceIn: "bounceIn 1s infinite",
        },
      },
    },
    plugins: [],
  };
  
  
  