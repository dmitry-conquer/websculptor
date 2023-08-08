module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#455a64",
          DEFAULT: "#263238",
          dark: "#1b2327",
        },
        secondary: {
          light: "#455a64",
          DEFAULT: "#ff725e",
          dark: "#b35042",
        },
      },
      spacing: {
        "section-xl": "8rem",
        "section-lg": "6rem",
        "section-sm": "3rem",
        "section-gap": "4rem",
      },
      screens: {
        // xsm: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
