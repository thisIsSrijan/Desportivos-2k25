import flowbite from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches the path to your React files
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      despobackground: "#c76904",
    },
    extend: {
      animation: {
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        despobackground: "#c76904",
      },
      spacing: {
        60: "15rem",
        59: "14.75rem",
        58: "14.5rem",
        57: "14.25rem",
        55: "13.75rem",
        54: "13.5rem",
        53: "13.25rem",
        52: "13rem",
        51: "12.75rem",
        50: "12.5rem",
        49: "12.25rem",
        47: "11.75rem",
        164: "41rem",
      },
      backdropBlur: {
        custom: "40.14px", // Custom blur value
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      fontFamily: {
        dharma: ['"Dharma Gothic C"', "sans-serif"],
        squid: ['"Game Of Squids"', "sans-serif"],
      },
      screens: {
        xsm: "200px",
        xs: "331px",
        "xs2-xs1": { min: "369px", max: "439px" },
        "xs1-sm": { min: "440px", max: "575px" },
        sm: "576px", // Small devices (phones, ≥ 576px)
        md: "768px", // Medium devices (tablets, ≥ 768px)
        md2: "836px",
        lg: "992px", // Large devices (desktops, ≥ 992px)
        xl: "1200px", // Extra large devices (large desktops, ≥ 1200px)
        lg2: "1264",
        xxl: "1400px", // Extra extra large devices (larger desktops, ≥ 1400px)
        customBreakpoint: "400px",
        uxl: "1500px",
        custom: { min: "576px", max: "767.5px" },
        
      },
    },
  },
  plugins: [flowbite],
};
