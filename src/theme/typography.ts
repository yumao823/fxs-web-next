const SPACER = 8

export const typography = {
  h1: {
    fontSize: '4.5rem',
    fontWeight: 500,
    lineHeight: 1.05,
    '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1.5 },
  },
  h2: {
    fontWeight: 500,
    lineHeight: 1.06,
    '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1.25 },
  },
  h3: {
    fontWeight: 500,
    '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1 },
  },
  h4: {
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '1.75rem',
    lineHeight: 1.48,
    letterSpacing: '0.0075em',
  },
  subtitle2: {
    fontSize: '1.5rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    fontWeight: 400,
  },
  body1: {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  body2: {
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  button: {
    textTransform: 'none',
  },
}
