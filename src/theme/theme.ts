import merge from 'lodash/merge'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { lightPalette } from './palette'
import { typography } from './typography'
import { themeConfig } from './themeConfig'

const baseTheme = {
  palette: lightPalette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 720 + 48,
      md: 1000 + 48,
      lg: 1280 + 48,
      xl: 1440 + 48,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
        sizeLarge: { fontSize: '1rem', minWidth: 200, minHeight: 50 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'md' },
    },
    MuiToolbar: {
      defaultProps: { disableGutters: true, variant: 'dense' },
    },
  },
}

const setTheme = () => {
  const nextTheme = createTheme(merge({}, baseTheme as any, themeConfig[0]))
  return responsiveFontSizes(nextTheme)
}

export const theme = setTheme()
