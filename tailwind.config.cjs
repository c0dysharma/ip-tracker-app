/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "600px",
      lg: "900px",
      xl: "1000px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
