import { Theme, TypographyStyle } from '@mui/material/styles';
import { AdditionalPaletteOptions } from '../palette'

/**
 * Add custom properties to MUITheme
 * @link https://material-ui.com/guides/typescript/#customization-of-theme
 */

declare module '@mui/material/styles/createMuiTheme' {
  interface Theme {}

  // allow configuration using `createMuiTheme`
  interface DeprecatedThemeOptions {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends AdditionalPaletteOptions {
    input?: {
      border?: string
    }
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    myFancyTypography?: TypographyStyle
  }
}
