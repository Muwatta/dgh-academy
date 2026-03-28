import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["var(--font-amiri)", "serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        school: {
          primary: "#6B3A2A",
          "primary-light": "#8B4E38",
          "primary-dark": "#4A2419",
          accent: "#C4955A",
          cream: "#F5ECD7",
          "cream-dark": "#EDD9B5",
        },
        madrasa: {
          primary: "#1A4A4A",
          "primary-light": "#235E5E",
          "primary-dark": "#0F2D2D",
          accent: "#C9A84C",
          ivory: "#F8F4EC",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
