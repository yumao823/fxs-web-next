import React, { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const Design: FC = () => (
  <Block reveal>
    <Container>
      <img src="/services/design.png" alt="Service" width="100%" />
      <Typography variant="h4" sx={{ my: 4 }}>
        Design & CX
      </Typography>
      <Grid container>
        <Grid item sm={12} md={8}>
          <Typography variant="h6" sx={{ mb: 4 }}>
            In the age of social media, people are more exposed to visual content than ever before. So it needs to be
            compelling. If whatever they see on their screens doesn’t catch their attention in the first couple of
            seconds, they will scroll down and forget about it the next second. So the visuals are important.
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h6" sx={{ color: 'grey.600', mb: 4, pl: { xs: 0, md: 6 } }}>
            In the age of social media, people are more exposed to visual content than ever before. So it needs to be
            compelling.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Block>
)

export default Design
