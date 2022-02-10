import { darkPalette, lightPalette } from './palette'
import { softShadows } from './shadows'

export const THEME_LIGHT = 'THEME_LIGHT'
export const THEME_DARK = 'THEME_DARK'
export const THEME_LANDING_LIGHT = 'THEME_LANDING_LIGHT'
export const DEFAULT_THEME = THEME_LANDING_LIGHT

export const themeConfig = [
  {
    name: THEME_LANDING_LIGHT,
    palette: lightPalette,
    shadows: softShadows,
  },
  {
    name: THEME_LIGHT,
    palette: lightPalette,
    shadows: softShadows,
  },
  {
    name: THEME_DARK,
    palette: darkPalette,
  },
]
