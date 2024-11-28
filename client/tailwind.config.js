module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Make sure this matches the path to your React files
  ],
  theme: {
    extend: {
      backdropBlur: {
        'custom': '40.14px', // Custom blur value
      },
      screens: {
        'custom': {'min': '640px', 'max': '767.5px'},
      },
      fontFamily: {
        dharma: ['"Dharma Gothic C"', 'sans-serif'], 
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
    },
  },
  plugins: [],
};
