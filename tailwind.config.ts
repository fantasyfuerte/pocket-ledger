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
        primary: "#352640",
        backgroundPrimary: "#f0f1dd",
        backgroundSecondary: "#d2beb1",
        cta: "#92394b",
        middleColor: "#a9767a",
      },
      backgroundImage: {
        "gradient-principal":
          "linear-gradient(to bottom, #f0f1dd 60%, #a9767a)",
        "gradient-page": "linear-gradient(to bottom,#a9767a 70%,transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
