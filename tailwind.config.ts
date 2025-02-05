import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a2848",
        backgroundPrimary: "#f0f1dd",
        backgroundSecondary: "#d2beb1",
        cta: "#a23b4f",
        middleColor: "#b6777c",
      },
      backgroundImage: {
        "gradient-principal":
          "linear-gradient(to bottom, #f0f1dd 60%, #b6777c)",
        "gradient-page": "linear-gradient(to bottom,#b6777c 70%,transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
