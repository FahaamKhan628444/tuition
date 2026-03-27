import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMode: 'media',
        primary: "#4F46E5",
        secondary: "#06B6D4",
        accent: "#F59E0B",
        dark: "#0F172A",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;
