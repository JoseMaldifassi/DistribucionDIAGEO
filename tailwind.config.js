/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf9ed",
          100: "#f9edcc",
          200: "#f1d488",
          300: "#ecbf5d",
          400: "#e7a938",
          500: "#e08a20",
          600: "#c66919",
          700: "#a44a19",
          800: "#863b1a",
          900: "#6e3219",
          950: "#3f1809",
        },
      },
    },
  },
  plugins: [],
};
