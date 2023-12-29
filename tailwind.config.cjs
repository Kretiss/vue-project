/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['RedHatDisplay Regular'],
        medium: ['RedHatDisplay Medium'],
        semibold: ['RedHatDisplay SemiBold'],
        bold: ['RedHatDisplay Bold']
      },
      screens: {
        '2xs': '360px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [(require('@headlessui/tailwindcss'))({ prefix: 'ui' })]
}
