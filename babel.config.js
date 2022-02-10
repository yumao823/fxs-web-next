/* eslint-disable no-template-curly-in-string */

module.exports = {
  presets: [['next/babel']],
  plugins: [
    [
      'babel-plugin-transform-imports',
      {
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
        '@mui/material': {
          transform: '@mui/material/${member}',
          preventFullImport: true,
        },
        '@mui/styles': {
          transform: '@mui/styles/${member}',
          preventFullImport: true,
        },
        '@mui/system': {
          transform: '@mui/system/${member}',
          preventFullImport: true,
        },
        '@mui/lab': {
          transform: '@mui/lab/${member}',
          preventFullImport: true,
        },
        '@mui/icons': {
          transform: '@mui/icons-material/${member}',
          preventFullImport: true,
        },
        '@onextech/gvs-kit/core': {
          transform: '@onextech/gvs-kit/core/${member}',
          preventFullImport: true,
        },
        '@onextech/gvs-kit/utils': {
          transform: '@onextech/gvs-kit/utils/${member}',
          preventFullImport: true,
        },
        '@onextech/gvs-kit/hooks': {
          transform: '@onextech/gvs-kit/hooks/${member}',
          preventFullImport: true,
        },
        '@onextech/material-ui-landing/core': {
          transform: '@onextech/material-ui-landing/core/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
}
