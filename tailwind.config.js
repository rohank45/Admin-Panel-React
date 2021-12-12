module.exports = {
  pupurge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "500px" },
        tablet: { min: "501px", max: "1000px" },
        laptop: { min: "1001px", max: "1400px " },
        pc: { min: "1401px" },
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [require("daisyui")],
};
