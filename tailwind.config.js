/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgba(113, 78, 255, 1)",
        tealBlue: "rgba(220, 227, 246, 0.5)",
      },
    },
  },
  plugins: [],
};
