import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const MOCK_CAPABILITIES = [
  {
    id: 0,
    title: 'Product',
    values: ['Inspiring Vision', 'User centricity', 'Reduced Friction', 'Product-market fit'],
  },
  {
    id: 1,
    title: 'User',
    values: ['Satisfied Expectations', 'Positive Emotion', 'Simplicity', 'Easy to understand'],
  },
  {
    id: 2,
    title: 'Business',
    values: [
      'Clear UX & CX Strategy',
      'Brand Digital Identity',
      'Customer loyalty and referrals',
      'Customer-centered culture',
      'Strong Digital Advantage',
    ],
  },
]

const Capabilities: FC = () => (
  <Block reveal sx={{ bgcolor: 'white' }}>
    <Container>
      <Typography variant="h6" sx={{ mb: 2 }}>
        CAPABILITIES
      </Typography>
      <Typography variant="h3" sx={{ mb: 6 }}>
        Supercharging your financial brand
      </Typography>
      <Box sx={{ maxWidth: 570, mx: 'auto', mb: 6 }}>
        <img src="/process/capabilities.png" alt="capabilities" width="100%" />
      </Box>
      <Grid container>
        {MOCK_CAPABILITIES.map((capability) => (
          <Grid key={`mc-${capability.id}`} item xs={12} sm={4} sx={{ pr: 1, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              <Box component="span">Value for</Box>
              <Box component="span" sx={{ color: 'success.light', ml: 1 }}>
                {capability.title}
              </Box>
            </Typography>
            {capability.values.map((value) => (
              <Typography key={`${value}-${capability.id}`} variant="h6" sx={{ color: 'grey.600', mb: 1 }}>
                {value}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  </Block>
)

export default Capabilities
