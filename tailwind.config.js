module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "logo-large": "75px",
        "logo-small": "50px",
      },
      colors: {
        "blue-sea": "#F1FEC6",
        brown: "#1D7874",
        "dark-font": "#2B303A",
        "light-font": "#667761",
        "royal-purple": "#735290",
        "jungle-green": "#000F08",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
