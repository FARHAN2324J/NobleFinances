/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["work-sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
