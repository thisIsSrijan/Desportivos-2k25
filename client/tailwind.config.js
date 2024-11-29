// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',  // Make sure this matches the path to your React files
//   ],
//   theme: {
//     extend: {
//       backdropBlur: {
//         'custom': '40.14px', // Custom blur value
//       },
//       screens: {
//         'custom': {'min': '640px', 'max': '767.5px'},
//       },
//       fontFamily: {
//         dharma: ['"Dharma Gothic C"', 'sans-serif'], 
//       },
//       fontSize: {
//         'xxs': '0.625rem', // 10px
//       screens: {
//         "xsm": "200px",
//         "sm": "576px", // Small devices (phones, ≥ 576px)
//         "md": "768px", // Medium devices (tablets, ≥ 768px)
//         "lg": "992px", // Large devices (desktops, ≥ 992px)
//         "xl": "1200px", // Extra large devices (large desktops, ≥ 1200px)
//         "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px)
//         'customBreakpoint': '400px',
//         "uxl": "1500px"
  
//       },
//     },
//   },
//   plugins: [],
// }
// }


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
      screens: {
        "xsm": "200px",
        "sm": "576px", // Small devices (phones, ≥ 576px)
        "md": "768px", // Medium devices (tablets, ≥ 768px)
        "lg": "992px", // Large devices (desktops, ≥ 992px)
        "xl": "1200px", // Extra large devices (large desktops, ≥ 1200px)
        "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px)
        'customBreakpoint': '400px',
        "uxl": "1500px",
        "custom": {'min': '576px', 'max': '767.5px'}
  
      },
    },
  },
  plugins: [],
};
