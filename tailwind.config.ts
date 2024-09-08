import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    screens: {
      'sm': { 'max': '480px' },
      // ... other breakpoints
    },
    fontFamily: {
      bankgothic: ['"BankGothic"', "sans-serif"],
      type82: ['"Type82"', "sans-serif"],
    },
  },
};
export default config;
