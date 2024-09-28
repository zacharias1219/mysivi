import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f8f8",
        white: "#fff",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f0f0f0",
          "300": "#eaeaea",
        },
        "blue-1": "#8062ef",
        crimson: "#f4002c",
        "blue-2": "#195ee4",
        silver: "#b9b7b7",
        black: "#000",
        red: "#db0004",
        "pri-10": "#ccd6e0",
        "pri-50": "#386da2",
        "pri-base": "#003366",
        "success-g50": "#e7f3f1",
        "success-g300": "#0c866f",
        "pri-90": "#001122",
        "pri-100": "#000a14",
        linen: "#fff1e6",
        "pri-60": "#002b55",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.26)",
          "300": "rgba(217, 217, 217, 0.12)",
          "400": "rgba(217, 217, 217, 0.08)",
        },
        dimgray: {
          "100": "#67757a",
          "200": "#585858",
        },
        green: "#34a100",
        "primary-6": "#f79824",
        "dark-1": "#31393c",
        "secondary-5": "#535a5d",
        white1: "#eee",
        gray: "#404040",
        "secondary-1": "#d6d7d8",
        lightgray: "rgba(214, 215, 216, 0.08)",
      },
      spacing: {},
      fontFamily: {
        satoshi: "Satoshi",
        "product-sans": "'Product Sans'",
        "product-sans-medium": "'Product Sans Medium'",
        "linotte-heavy": "Linotte-Heavy",
        nunito: "Nunito",
        "linotte-bold": "Linotte-Bold",
      },
      
    },
    
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
