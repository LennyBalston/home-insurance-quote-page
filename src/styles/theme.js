const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: {
    lighter: '#81D4Df',
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
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  40: '2.5rem',
  42: '2.625rem',
  64: '4rem',
  80: '5rem',
}

const spacing = {
  4: '0.25rem',
  8: '0.5rem',
  16: '1rem',
  24: '1.5rem',
  32: '2rem',
  42: '2.625rem',
  64: '4rem',
  80: '5rem',
}

const theme = {
  fixedWidth: '1376px',  
  breakpoint: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
  },
  background: colors.grey.lightest,
  foreground: colors.grey.darkest,
  primary: colors.primary.main,
  secondary: colors.primary.light,
  tertiary: colors.primary.lighter,
  black: colors.black,
  white: colors.white,
  color: colors,
  font: {
    family: 'Nunito, Helvetica, Arial, sans-serif',
    size: {
      default: 18, ...sizes
    },
    lineHeight: 1.25,
    weight: {
      normal: 400,
      bold: 700,
    },
    heading1: {
      size: sizes[42],
      color: colors.primary.main,
    },
    heading2: {
      size: sizes[32],
      color: colors.grey.darkest,
      fontWeight: "normal",
      letterSpacing: "-0.02em",
    },
    paragraph: {
      size: sizes[18],
      color: colors.grey.darkest,
    },
  },
  spacing: {
    default: spacing[16],
    ...spacing
  },
  button: {
    paddingX: spacing[16],
    paddingY: spacing[8],
    border: {
      width: '1px',
      rounded: '25px',
    },
    fontSize: sizes[18],
    cursor: 'pointer',
    primary: {
      default: {
        border: colors.primary.main,
        background: colors.primary.main,
        color: colors.white,
      },
      hover: {
        border: colors.primary.light,
        background: colors.primary.light,
        color: colors.white,
      }
    },
    secondary: {
      default: {
        border: colors.primary.light,
        background: colors.primary.light,
        color: colors.grey.darkest,
      },
      hover: {
        border: colors.primary.light,
        background: colors.grey.lightest,
        color: colors.grey.darkest,
      }
    },
    tertiary: {
      default: {
        border: colors.primary.light,
        background: colors.grey.lightest,
        color: colors.grey.darkest,
      },
      hover: {
        border: colors.primary.light,
        background: colors.primary.light,
        color: colors.grey.darkest,
      }
    },
  },
  container: {
    limitWidth: '200px',
    border: {
      width: '2px',
      rounded: '25px'
    }
  }
}

export default theme;
