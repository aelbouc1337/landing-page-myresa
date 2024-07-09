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
        lightGradientChange: {
          "0%": {
            background: "linear-gradient(to bottom right, #734BEF, #3b82f6)",
            opacity: "1",
          },
          "20%": {
            background: "linear-gradient(to bottom right, #3b82f6, #6b8ef6)",
            opacity: "0.85",
          },
          "40%": {
            background: "linear-gradient(to bottom right, #6b8ef6, #8b5cf6)",
            opacity: "0.75",
          },
          "60%": {
            background: "linear-gradient(to bottom right, #8b5cf6, #9b72f6)",
            opacity: "0.85",
          },
          "80%": {
            background: "linear-gradient(to bottom right, #9b72f6, #6F5EEE)",
            opacity: "0.95",
          },
          "100%": {
            background: "linear-gradient(to bottom right, #6F5EEE, #734BEF)",
            opacity: "1",
          },
        },

        dollarGradientChange: {
          "0%": {
            background: "linear-gradient(to bottom right, #FF7F50, #FFB6C1)",
            opacity: "1",
          },
          "20%": {
            background: "linear-gradient(to bottom right, #FF8C00, #FF69B4)",
            opacity: "0.85",
          },
          "40%": {
            background: "linear-gradient(to bottom right, #FFA07A, #FF6347)",
            opacity: "0.75",
          },
          "60%": {
            background: "linear-gradient(to bottom right, #FF4500, #FF1493)",
            opacity: "0.85",
          },
          "80%": {
            background: "linear-gradient(to bottom right, #FF69B4, #FF4500)",
            opacity: "0.95",
          },
          "100%": {
            background: "linear-gradient(to bottom right, #FF7F50, #FFB6C1)",
            opacity: "1",
          },
        },
        flagGradientChange: {
          "0%": {
            background: "linear-gradient(to bottom right, #34D399, #3b82f6)",
            opacity: "1",
          },
          "20%": {
            background: "linear-gradient(to bottom right, #3b82f6, #60A5FA)",
            opacity: "0.85",
          },
          "40%": {
            background: "linear-gradient(to bottom right, #60A5FA, #10B981)",
            opacity: "0.75",
          },
          "60%": {
            background: "linear-gradient(to bottom right, #10B981, #3b82f6)",
            opacity: "0.85",
          },
          "80%": {
            background: "linear-gradient(to bottom right, #3b82f6, #34D399)",
            opacity: "0.95",
          },
          "100%": {
            background: "linear-gradient(to bottom right, #34D399, #3b82f6)",
            opacity: "1",
          },
        },
        userGradientChange: {
          "0%": {
            background: "linear-gradient(to bottom right, #3b82f6, #60A5FA)",
            opacity: "1",
          },
          "25%": {
            background: "linear-gradient(to bottom right, #60A5FA, #7F9CF5)",
            opacity: "0.75",
          },
          "50%": {
            background: "linear-gradient(to bottom right, #7F9CF5, #3b82f6)",
            opacity: "0.75",
          },
          "75%": {
            background: "linear-gradient(to bottom right, #3b82f6, #60A5FA)",
            opacity: "0.75",
          },
          "100%": {
            background: "linear-gradient(to bottom right, #60A5FA, #3b82f6)",
            opacity: "1",
          },
        },

        slideIn: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        spinOpacity: "spinOpacity 5s linear infinite",
        lightGradientChange: "lightGradientChange 10s infinite",
        dollarGradientChange: "dollarGradientChange 10s infinite",
        flagGradientChange: "flagGradientChange 10s infinite",
        userGradientChange: "userGradientChange 10s infinite",
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
