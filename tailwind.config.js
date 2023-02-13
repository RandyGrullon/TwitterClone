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
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        warning:{
          "500": "#DB9D47[500]",
        },
        // base
        light: "#F7F5F6",
        dark: {
          500: "#3A3042",
        },
        // gray
        gray: {
          300: "#F7F5F6",
          400: "#E3E3E3",
          500: "#D9D9D9",
          600: "#475569",
          700: "#3D3D3D",
        },
        // blue
        blue: {
          300: "#CCE9F2",
          400: "#85CFEE",
          500: "#3C83CA",
          700: "#3774AF",
          900: "#23395B"
        },
        // orange
        orange: { 500: "#DB9D47" },
        // yellow
        yellow: { 
          300: "#FFE19C",
          400: "#DB9D47" },
        // red
        red: {
          300: "#FFE4EB",
          400: "#FFE4EB",
          500: "#FF4E43",
        },
        // green
        green: {
          300: "#EDFFD9",
          400: "#D1FAE5",
          500: "#10B981",
          700: "#059669",
        },
      },
    },
  },
  plugins: [],
}
