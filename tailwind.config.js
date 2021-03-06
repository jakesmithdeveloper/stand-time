module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-sea": "#279AF1",
        brown: "#A7754D",
        "dark-font": "#2B303A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
