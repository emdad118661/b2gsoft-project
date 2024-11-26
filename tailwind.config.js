const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        manrope: ['Manrope', 'sans-serif']
      },
      lineHeight: {
        '130': '1.3', // Define a custom line-height of 130%
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
};
