const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme:  {
    extend: {
      colors: {
        "luis": "#f1f1f1",
        "luis-green": {
          50: "#DFFDEE",
          100: "#C5FBE1",
          200: "#90F7C5",
          300: "#5CF3AA",
          400: "#28EF8F",
          500: "#10DE7B",
          600: "#0EB866",
          700: "#0B9251",
          800: "#086C3C",
          900: "#054627",
        },
      },
    },
  },
}
