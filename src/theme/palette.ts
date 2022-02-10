import { lighten } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

export interface AdditionalPaletteOptions {
  custom: {
    [key: string]: string
  }
}

export const lightPalette = {
  type: 'light',
  action: {
    active: colors.blueGrey[600],
  },
  background: {
    default: lighten(colors.blueGrey[50], 0.5),
    paper: colors.common.white,
  },
  primary: {
    light: colors.common.black,
    main: colors.common.black,
    dark: '#042F05',
  },
  secondary: {
    light: colors.grey['A100'],
    main: colors.grey[50],
    dark: colors.grey[300],
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[600],
  },
}

export const darkPalette = {
  mode: 'dark',
  action: {
    active: 'rgba(255, 255, 255, 0.54)',
    hover: 'rgba(255, 255, 255, 0.04)',
    selected: 'rgba(255, 255, 255, 0.08)',
    disabled: 'rgba(255, 255, 255, 0.26)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    default: '#1c2025',
    paper: '#282C34',
  },
  primary: {
    light: colors.deepOrange[400],
    main: colors.deepOrange[600],
    dark: colors.deepOrange[800],
  },
  secondary: {
    light: colors.deepOrange[500],
    main: colors.deepOrange[600],
    dark: colors.deepOrange[900],
  },
  text: {
    primary: '#e6e5e8',
    secondary: '#adb0bb',
  },
  divider: colors.grey[900],
}
