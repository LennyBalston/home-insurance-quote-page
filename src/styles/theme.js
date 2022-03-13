const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: {
    lighter: 'rgba(129, 212, 223, 0.41)',
    light: '#81d0df',
    main: '#087592',
  },
  grey: {
    lightest: '#F1F6FC',
    darkest: '#112a42',
  }
}

const sizes = {
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  34: '2.125rem',
  42: '2.625rem',
  64: '4rem',
}

const theme = {
  maxWidth: '1280px',
  spinnerSize: '100px',
  breakpoint: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  background: colors.grey.lightest,
  default: colors.grey.darkest,
  primary: colors.primary.main,
  colors: colors,
  colorOLD: {
    text: '#112a42',
    background: '#f0f4f8',
    white: '#ffffff',
    primary: {
      lightest: '#e7e6fe',
      main: '#5937f1',
    },
    grey: {
      lightest: '#f0f4f8',
      darkest: 'black'
    }
  },
  font: {
    family: 'Nunito, Helvetica, Arial, sans-serif',
    size: {
      default: 18, ...sizes
    },
    lineHeight: 1.25,
    weight : {
      normal: 400,
      bold: 700
    },
    heading1: {
      size: sizes[42],
      color: colors.primary.main,
    },
    heading2: {
      size: sizes[34],
      color: colors.grey.darkest,
    },
    paragraph: {
      size: sizes[18],
      color: colors.grey.darkest,
    },
  },
  spacing: {
    default: 16,
    xs: 8,
    sm: 16,
  },
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
}

export default theme;
