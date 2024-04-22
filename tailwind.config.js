/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,}'],
  theme: {
    extend: {},
    colors: {
      caramel: '#D87D4A',
      'atomic-tangerine': '#FBAF85',
      black: '#191919',
      night: '#101010',
      'border-gray': 'rgb(40,40,40)',
      white: '#FFF',
      'sea-salt': '#FAFAFA',
      'anti-flash-white': '#F1F1F1',
      'border-default': '#CFCFCF',
      transparent: 'rgba(0,0,0,0)',
      error: '#CD2C2C',
      gray: '#8C8C8C',
      'light-gray': '#B5B5B5',
      silver: '#C6C6C6',
      'med-gray': '#7D7D7D',
    },
    screens: {
      tablet: '481px',
      desktop: '769px',
    },
  },
  plugins: [],
}
