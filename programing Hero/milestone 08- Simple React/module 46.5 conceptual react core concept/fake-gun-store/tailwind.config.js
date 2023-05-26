/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2cff02",
        
"secondary": "#9643bc",
        
"accent": "#18a050",
        
"neutral": "#221A23",
        
"base-100": "#2F2B4A",
        
"info": "#9CB6E3",
        
"success": "#1FBD7B",
        
"warning": "#B16110",
        
"error": "#E42134",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

