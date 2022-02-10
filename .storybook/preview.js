import { muiTheme } from 'storybook-addon-material-ui'
import { createTheme, DEFAULT_THEME } from "../src/theme/createTheme"

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  layout: 'fullscreen',
  controls: { disabled: true },
  options: {
    storySort: {
      order: ['Style Guide', 'Landing'],
    },
  },
}

export const decorators = [muiTheme(createTheme({ theme: DEFAULT_THEME }))]
