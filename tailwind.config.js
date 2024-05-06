/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,}'],
  theme: {
    fontSize: {
      '2xl': [
        '5.6rem',
        {
          lineHeight: '5.8rem',
          letterSpacing: '0.2rem',
          fontWeight: '700',
        },
      ],
      xl: [
        '4rem',
        {
          lineHeight: '4.4rem',
          letterSpacing: '0.15rem',
          fontWeight: '700',
        },
      ],
      lg: [
        '3.2rem',
        {
          lineHeight: '3.6rem',
          letterSpacing: '0.115rem',
          fontWeight: '700',
        },
      ],
      med: [
        '2.8rem',
        {
          lineHeight: '3.8rem',
          letterSpacing: '0.2rem',
          fontWeight: '700',
        },
      ],
      reg: [
        '2.4rem',
        {
          lineHeight: '3.3rem',
          letterSpacing: '0.17rem',
          fontWeight: '700',
        },
      ],
      small: [
        '1.8rem',
        {
          lineHeight: '2.4rem',
          letterSpacing: '0.13rem',
          fontWeight: '700',
        },
      ],
      overline: [
        '1.4rem',
        {
          lineHeight: '1.9rem',
          letterSpacing: '1rem',
          fontWeight: '500',
        },
      ],
      'sub-title': [
        '1.3rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.1rem',
          fontWeight: '700',
        },
      ],
      body: [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '500',
        },
      ],
      'product-title': [
        '2.8rem',
        {
          letterSpacing: '0.1rem',
          fontWeight: '700',
        },
      ],
      'product-price': [
        '1.8rem',
        {
          letterSpacing: '0.129rem',
          fontWeight: '700',
        },
      ],
      'section-heading': [
        '2.4rem',
        {
          letterSpacing: '0.086rem',
          lineHeight: '3.6rem',
          fontWeight: '700',
        },
      ],
    },
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
