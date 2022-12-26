/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        "pale-blue": "#e0e8ff",
        "bright-blue": "#3829e0",
        "very-pale-blue": "#f5f7ff",
        "desaturated-blue": "#7280a7",
        "dark-blue": "#1f2f56",
      },
    },
  },
  plugins: [],
};
