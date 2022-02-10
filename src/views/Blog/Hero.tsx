import React, { FC } from 'react'
import { Container, Grid, Button as MaterialButton, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { MOCK_POST } from './constant'

const Hero: FC = () => (
  <>
    <Block reveal bg={{ src: '/blog/back.png' }} sx={{ color: 'white' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {MOCK_POST.title}
            </Typography>
            <Typography variant="h2" sx={{ mb: 4 }}>
              {MOCK_POST.overview}
            </Typography>
            <MaterialButton
              sx={{
                borderBottom: '3px solid white',
                borderRadius: 0,
                width: 'fit-content',
                color: 'white',
                mb: 6,
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Learn More
              </Typography>
              <ArrowForwardIcon />
            </MaterialButton>
          </Grid>
        </Grid>
      </Container>
    </Block>
  </>
)

export default Hero
