import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          900: "#172554"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(37, 99, 235, 0.22)"
      },
      backgroundImage: {
        "blue-grid": "linear-gradient(rgba(37,99,235,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
