/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "seagreen-low": "rgba(76, 140, 74, 0.05)",
        silver: "rgba(201, 200, 200, 0.1)",
        "violet-600": "#7c3aed",
        success: "#4c8c4a",
        mediumseagreen: "#66a663",
        seagreen: "#337630",
        "default-white": "#fff",
        "default-alert": "#da1e28",
        white: "#fff",
        "blue-gray-900": "#0f172a",
        "dark-100": "#272523",
        "blue-gray-600": "#475569",
        "purple-100": "#f3e8ff",
        "purple-800": "#6b21a8",
        "dark-50": "#939291",
        "dark-25": "#c9c8c8",
        "blue-gray-300": "#cbd5e1",
        whitesmoke: "#ebebeb",
        "fuchsia-600": "#c026d3",
        "blue-600": "#2563eb",
        "dark-75": "#5d5c5a",
        darksalmon: "#ca8a68",
        "green-100": "#dcfce7",
        "green-800": "#166534",
        darkgray: "#969494",
        gray: {
          100: "#7a7878",
          200: "#252430",
        },
        darkorange: "#f97316",
        blanchedalmond: {
          100: "#f8e2c9",
          200: "rgba(248, 226, 201, 0.5)",
        },
        peachpuff: "rgba(222, 201, 176, 0.5)",
        lavender: "#e6e9f5",
      },
      spacing: {
        boundvariablesdata: "16px",
        borderRadius: {
          "31xl": "50px",
          mini: "15px",
          "mini-1": "14.1px",
          "8xs": "5px",
          "3xs": "10px",
          "6xl": "25px",
          sm: "14px",
          "81xl": "100px",
          "7xl": "26px",
        },
      },
      fontFamily: {
        body: "Questrial",
        "button-m": "Roboto",
        "body-xs": "Roboto",
        "info-text": "Questrial",
        "body-s": "Roboto",
        "open-sans": "'Open Sans'",
        montserrat: "Montserrat",
        "sub-title": "Montserrat",
        inter: "Inter",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    fontSize: {
      "4xs-4": "8.4px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      lgi: "19px",
      xl: "20px",
      "4xl": "23px",
      "5xl": "24px",
      "6xl": "25px",
      "9xl": "28px",
      "11xl": "30px",
      "15xl": "34px",
      "17xl": "36px",
      "18xl": "37px",
      "19xl": "38px",
      "23xl": "42px",
      "24xl": "43px",
      "27xl": "46px",
      "29xl": "48px",
      "39xl": "58px",
      "41xl": "60px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
