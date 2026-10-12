import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17191b",
        orange: "#ef6c20",
        warm: "#f7f4ed",
        slate: "#5c646b",
      },
      boxShadow: { lift: "0 24px 60px rgba(14,17,19,.12)" },
    },
  },
  plugins: [],
};
export default config;
