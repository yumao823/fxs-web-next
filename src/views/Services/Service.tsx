import React, { FC } from 'react'
import { Container, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const Service: FC = () => (
  <Block reveal sx={{ pb: 0 }}>
    <Container>
      <Typography variant="h6" sx={{ color: 'success.light', mb: 2 }}>
        OUR SERVICES
      </Typography>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Combining strategy, design and engineering into one unified process.
      </Typography>
      <Typography variant="h5" sx={{ color: 'grey.600' }}>
        By narrowing the gap between thinking and doing, reduce the inherent risks of delivering change in complex
        business environments.
      </Typography>
    </Container>
  </Block>
)

export default Service
