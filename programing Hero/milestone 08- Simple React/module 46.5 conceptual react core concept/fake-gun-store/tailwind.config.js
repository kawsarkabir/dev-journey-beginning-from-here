/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#db5f00",

          secondary: "#ff93c0",

          accent: "#4d0b7f",

          neutral: "#1D1B2D",

          "base-100": "#2F2B40",

          info: "#2B68EE",

          success: "#0F7544",

          warning: "#C67306",

          error: "#E82653",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
