import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-green": "#112012",
        "hover-green": "#98C454",
        "mid-green": "#43795D",
        "text-gray": "#4E4B4B",
        "alert-red": "#FF4040",
      },
      padding: {
        "84": "21rem",
      },
      margin: {
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "96": "24rem",
        "100": "25rem",
        "104": "26rem",
        "108": "27rem",
        "124": "31rem",
        "136": "34rem",
        "168": "42rem",
        "160": "40rem",
        "188": "47rem",
      },
      width: {
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "96": "24rem",
        "100": "25rem",
        "104": "26rem",
        "108": "27rem",
        "124": "31rem",
        "136": "34rem",
        "168": "42rem",
        "160": "40rem",
        "188": "47rem",
      },
      fontSize: {
        "2xs": [
          "0.55rem",
          {
            lineHeight: "1rem",
          },
        ],
        "3xs": "0.45rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    borderRadius: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "4xl": "82px",
    },
  },
  plugins: [],
};
export default config;
