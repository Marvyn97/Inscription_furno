/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];

 export const theme = {
  extend: {
      animation: {
        "text-gradient": "text-gradient 1.5s linear infinite"
      },
      keyframes: {
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        }
      }
  },
};
 
export const plugins = [];
