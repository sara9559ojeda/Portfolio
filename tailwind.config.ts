import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sm-D-blue': {
          '50': '#f1f9fe',
          '100': '#e2f3fc',
          '200': '#bfe6f8',
          '300': '#86d4f3',
          '400': '#46beea',
          '500': '#1ea6d9',
          '600': '#1085b9',
          '700': '#0e6b96',
          '800': '#105a7c',
          '900': '#124761',
          '950': '#0d3044',
      },
      
      },
    },
  },
  plugins: [],
};
export default config;
