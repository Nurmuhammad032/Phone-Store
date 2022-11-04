/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      blue: "#3D639D",
      blueLight: "#A2AEDB",
      purpleLight: "#F39DBD",
      orange: "#FF6422",
      gray: "#BBC2D0",
      orangeLight: "#FFBD95",
      primary: "#00C48C",
      purple: "#E83274",
      redLight: "#FF647C",
      blackLight: "#262728",
    },
  },
  plugins: [require("tailwind-accent-color")()],
};
