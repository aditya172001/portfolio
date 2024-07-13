import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      clipPath: {
        circle: "circle(50%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".clip-circle": {
          "clip-path": "circle(1% at 96.2% 5.3%)",
        },
        ".clip-circle-expand": {
          "clip-path": "circle(140% at 96.2% 5.3%)",
        },
        ".clip-path-transition": {
          transition: "clip-path 1s",
        },
      });
    },
  ],
};

export default config;
