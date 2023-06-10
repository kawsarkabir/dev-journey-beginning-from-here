/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e2c076",
        
"secondary": "#85d86a",
        
"accent": "#d9a5ef",
        
"neutral": "#1c1721",
        
"base-100": "#31214a",
        
"info": "#77a2df",
        
"success": "#5ceb9a",
        
"warning": "#f0b942",
        
"error": "#f8687e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
