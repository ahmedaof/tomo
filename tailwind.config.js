/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text
        primary: "#29384E",
        secondary: "#172327",
        active: "#D02049",
        login: "#2E2E2E",
        // Backgrounds
        "dark-gray": "#2E2E2E",
        "light-gray": "#F4F5F7",
        // Form
        form: "#797979",
        "form-light": "#FAFAFA",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
