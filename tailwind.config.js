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
        bluegray_900: "#12344d",
        gray_400: "#bcbfc2",
        gray_301: "#dce0e2",
        bluegray_500: "#73828c",
        black_900: "#000000",
        teal_900: "#003059",
        black_901: "#0e1012",
        gray_101: "#f2f5f6",
        white_A700: "#ffffff",
        gray_300: "#e4e6e7",
        gray_700_11: "#55555511",
        gray_100: "#f5f7f8",
      },
      borderRadius: { radius4: "4px", radius20: "20px", radius50: "50%" },
      fontFamily: { sourcesanspro: "Source Sans Pro", segoeui: "Segoe UI" },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
