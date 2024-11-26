module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Make sure this matches the path to your React files
  ],
  theme: {
    extend: {
      backdropBlur: {
        'custom': '40.14px', // Custom blur value
      },
      fontFamily: {
        dharma: ['"Dharma Gothic C"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
