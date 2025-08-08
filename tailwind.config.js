/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Example primary color
        secondary: "#151312", 
        light: {
          100: "#D6C6ff", // Example light color
          200: "#A8B5DB",
          300: "#9CA4AB", // Example light color
        },
        dark: {
          100: "#221F3D", // Example dark color
          200: "#0F0D23",
        },
        accent: "#AB8BFF", // Example secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example font family
      },
    },
  },
  plugins: [],
}