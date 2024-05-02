interface TextStyle {
  [key: string]: React.CSSProperties | undefined
}

const textStyles: TextStyle = {
  h1: {
    fontSize: '5.6rem',
    lineHeight: '5.8rem',
    letterSpacing: '0.2rem',
    fontWeight: 500,
  },
  h2Mobile: {
    fontSize: '3.6rem',
    lineHeight: '4rem',
    letterSpacing: '0.129rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '4rem',
    lineHeight: '4.4rem',
    letterSpacing: '0.15rem',
    fontWeight: 500,
  },
  h3: {
    fontSize: '3.2rem',
    lineHeight: '3.6rem',
    letterSpacing: '0.115rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '2.8rem',
    lineHeight: '3.8rem',
    letterSpacing: '0.2rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '2.4rem',
    lineHeight: '3.3rem',
    letterSpacing: '0.17rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1.8rem',
    lineHeight: '2.4rem',
    letterSpacing: '0.13rem',
    fontWeight: 500,
  },
  overline: {
    fontSize: '1.4rem',
    lineHeight: '1.9rem',
    letterSpacing: '1rem',
    fontWeight: 200,
    color: '#D87D4A',
  },
  link: {
    fontSize: '1.3rem',
    lineHeight: '2.5rem',
    letterSpacing: '0.2rem',
    fontWeight: 700,
    color: '#FFF',
  },
  'sub-title': {
    fontSize: '1.3rem',
    lineHeight: '2.5rem',
    letterSpacing: '0.1rem',
    fontWeight: 500,
    color: '#D87D4A',
  },
  body: {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    fontWeight: 500,
    textTransform: 'none',
    color: '#fff',
  },
}

export default textStyles
