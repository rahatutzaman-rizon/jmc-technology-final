/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
    },
  },
  plugins: [],
};
