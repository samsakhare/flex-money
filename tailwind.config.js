module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      1: "100px",
      2: "200px",
      3: "300px",
      4: "400px",
      5: "500px",
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover", "focus"],
    },
  },
  plugins: [],
};
