/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        popin: "Poppins",
      },
    },
  },
  plugins: [],
};
