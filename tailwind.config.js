/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        "Light-Pink": "hsl(321, 100%, 78%)",
        "Light-Red": "hsl(0, 100%, 63%)",
        "Very-Dark-Cyan": "hsl(192, 100%, 9%)",
        "Very-Pale-Blue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": "open-sans",
      },
    },
  },
  plugins: [],
};
