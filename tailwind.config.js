const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors,
    fontFamily: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
    },

    extend: {},
  },
  plugins: [],
};
