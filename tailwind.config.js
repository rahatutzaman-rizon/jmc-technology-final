/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dashPrimary: "#2E2E2E", // Solid background
        customGradient1: "linear-gradient(0deg, #E11D48, #E11D48)", // Gradient
        customGradient2:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)", // Gradient
        dashActive: "#BCF0DA", // Custom green
        dashHighlight: "#E6F1FE", // Light blue
        dashAshText: "#9CA3AF", // Custom gray
        dashCaviarTitleText: "#424242", // Text color
        dashSideNavText: "#52525B", // Text color
        careerRed: "#FF5857",
        contactBlue: "#1A60B0",
        contactBlueHover: "#19395e",
      },
    },
  },
  plugins: [],
}