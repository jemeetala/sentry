module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_400: "#bcbfc2",
        gray_301: "#e0e0e0",
        gray_302: "#dce0e2",
        gray_300: "#e4e6e7",
        gray_50: "#f9fcff",
        gray_100: "#f2f5f6",
        bluegray_900: "#12344d",
        bluegray_700: "#424c5d",
        bluegray_500: "#73828c",
        bluegray_401: "#74839d",
        black_900: "#000000",
        bluegray_400: "#75839d",
        teal_900: "#003059",
        black_901: "#0e1012",
        white_A700: "#ffffff",
        gray_700_11: "#55555511",
      },
      borderRadius: {
        radius4: "4px",
        radius16: "16px",
        radius20: "20px",
        radius50: "50%",
      },
      fontFamily: {
        gilroy: "Gilroy",
        segoeui: "Segoe UI",
        sourcesanspro: "Source Sans Pro",
      },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
