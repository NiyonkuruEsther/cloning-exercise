/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#f2efed",
        blue: "#0077b3",
        red: "#cc4100",
        green: "#008053",
        darkBlue: "#3b2171",
      },
      spacing: {
        30: "30px",
      },
      screens: {
        larg: "2363px",
      },
    },
  },
  plugins: [],
};
