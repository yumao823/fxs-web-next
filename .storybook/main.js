module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-material-ui'],
  // Fix MUI v5 custom theme not working within Storybook: https://github.com/mui-org/material-ui/issues/24282#issuecomment-830696771
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": require.resolve('@emotion/react'),
          "emotion-theming": require.resolve('@emotion/react'),
          "@emotion/styled": require.resolve('@emotion/styled'),
        },
      },
    }
  },
  typescript: {
    // Fixes: https://github.com/styleguidist/react-docgen-typescript/issues/356
    reactDocgen: false,
  }
}
