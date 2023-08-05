module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: { 
    container:{
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          light: '#455a64',
          DEFAULT: '#263238',
          dark: '#1b2327',
        },
        secondary: {
          light: '#455a64',
          DEFAULT: '#ff725e',
          dark: '#b35042',
        },
      }
    } 
  },
};
