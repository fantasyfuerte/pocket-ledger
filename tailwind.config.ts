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
        backgroundPrimary: "#f1f2ce",
        backgroundSecondary: "#d1b4a2",
        cta: "#92394b",
        middleColor: "#a9767a",
      },
      backgroundImage: {
        "gradient-principal":
          "linear-gradient(to bottom, #f1f2ce 50%, #a9767a)",
      },
    },
  },
  plugins: [],
} satisfies Config;
