/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}" 
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af", 
          secondary: "#9333ea", 
          accent: "#facc15", 
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["Fira Code", "monospace"],
        },
        spacing: {
          "128": "32rem",
          "144": "36rem",
        },
        borderRadius: {
          xl: "1rem",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), 
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"), 
    ],
  };
  