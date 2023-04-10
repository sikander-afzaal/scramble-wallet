const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#94febf",
        dark: "#000403",
        darkPrimary: "#0e1f17",
        greenText: "#44f1a6",
        text: "#eee",
        lightGray: "#393939",
      },
      backgroundImage: {
        body: "url('bg.png')",
      },
    },
  },
  plugins: [],
};
