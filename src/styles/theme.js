const theme = {
  rootSize: 16,
  maxWidth: '1280px',
  spinnerSize: '100px',
  breakpoint: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  color: {
    text: '#112a42',
    background: '#f0f4f8',
    white: '#ffffff',
    primary: {
      lightest: '#e7e6fe',
      main: '#5937f1',
    },
    grey: {
      lightest: '#f0f4f8',
      darkest: '#112a42',
    }
  },
  font: {
    family: 'Nunito, Helvetica, Arial, sans-serif',
    size: {
      default: 18, 
    },
    lineHeight: 1.25,
    weight : {
      regular: 400,
      bold: 700
    }
  },
  spacing: {
    default: 16,
    xs: 8,
    sm: 16,
  }
}

export default theme;
