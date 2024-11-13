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
      'sm-bunker': {
        '50': '#f2f6fd',
        '100': '#e4ecfa',
        '200': '#c3d7f4',
        '300': '#8fb7ea',
        '400': '#5392dd',
        '500': '#2d74ca',
        '600': '#1d59ac',
        '700': '#19488b',
        '800': '#193f73',
        '900': '#1a3560',
        '950': '#04080f',
    },
    
    
      'sm-ebony-clay': {
        '50': '#f5f6fa',
        '100': '#eaedf4',
        '200': '#d1d8e6',
        '300': '#a8b7d1',
        '400': '#7990b7',
        '500': '#58729f',
        '600': '#445a85',
        '700': '#38496c',
        '800': '#313e5b',
        '900': '#2d374d',
        '950': '#1f2535',
    },
    
      
      },
    },
  },
  plugins: [],
};
export default config;
