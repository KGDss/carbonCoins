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
  },
  plugins: [],
};
export default config;
