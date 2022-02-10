import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const AboutUs: FC = () => (
  <Block reveal>
    <Container>
      <Typography variant="h6" sx={{ color: 'success.light', mb: 2 }}>
        ABOUT US
      </Typography>
      <Grid container>
        <Grid item lg={9}>
          <Typography variant="h2" sx={{ color: 'primary.dark' }}>
            We are on a mission to bring consumer-grade UX made for fintech applications
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Box sx={{ width: 200, height: 460, display: { xs: 'none', lg: 'block' }, bgcolor: 'black', ml: 'auto' }} />
        </Grid>
      </Grid>
      <Box sx={{ height: 20, bgcolor: 'success.light', mt: { lg: 0, xs: 6 } }} />
    </Container>
  </Block>
)

export default AboutUs
