import React, { FC } from 'react'
import { Container, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const Approach: FC = () => (
  <Block reveal sx={{ pb: 0 }}>
    <Container sx={{ px: { xs: 2, md: 10 }, pb: 0 }}>
      <Typography variant="h6" sx={{ color: 'success.light', mb: 2 }}>
        NAVIGATING FINTECH
      </Typography>
      <Typography variant="h2" sx={{ color: 'primary.dark', mb: 6 }}>
        Our Approach
      </Typography>
      <Typography variant="h4" sx={{ mb: 10 }}>
        With financial systems, the main challenge is to convert complex multi-feature solution into user-friendly and
        intuitive interfaces. At Fin X, we believe that the best way to achieve this is to consider usage patterns and
        habits, usability research, cognitive psychology heuristics and trending UX approaches.
      </Typography>
      <img src="/process/approach.png" alt="Process" width="100%" />
    </Container>
  </Block>
)

export default Approach
