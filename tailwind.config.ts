import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        primary: "#050d61",
      },
      keyframes: {
        spinOpacity: {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "50%": { transform: "rotate(180deg)", opacity: "0" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
        gradientChange: {
          "0%": {
            background: "linear-gradient(to right, #734BEF, #3b82f6)",
            opacity: "1",
          }, // dark blue to light blue
          "50%": {
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            opacity: "0.5",
          }, // light blue to purple
          "100%": {
            background: "linear-gradient(to right, #6F5EEE, #734BEF)",
            opacity: "0.5",
          }, // purple to dark blue
        },
        slideIn: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        spinOpacity: "spinOpacity 5s linear infinite",
        gradientChange: "gradientChange 5s infinite",
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
