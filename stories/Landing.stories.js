import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import Image from 'next/image'
import { Block, ButtonStack, LandingHeader } from '@onextech/material-ui-landing/core'
import { MOCK_LANDING_HEADER_PROPS } from './__mocks__/Landing.mocks'

export const Landing = () => {
  return (
    <div>
      <Block bg={{ src: '/images/mountains.jpg', alt: 'Mountains' }}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={7}>
              <LandingHeader size="xl" {...MOCK_LANDING_HEADER_PROPS} color="white" />
            </Grid>
          </Grid>
        </Container>
      </Block>

      <Block>
        <Container>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <LandingHeader size="lg" mb={5} {...MOCK_LANDING_HEADER_PROPS} />
              <ButtonStack direction={{ xs: 'column', md: 'row' }}>
                <Button variant="contained" color="primary" size="large">
                  Start
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Contact
                </Button>
              </ButtonStack>
            </Grid>
            <Grid item md={6}>
              <Image alt="Mountains" src="/images/mountains.jpg" width={700} height={425} />
            </Grid>
          </Grid>
        </Container>
      </Block>

      <Block bgcolor="background.default">
        <Container>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <LandingHeader size="xs" {...MOCK_LANDING_HEADER_PROPS} />
            </Grid>
            <Grid item md={4}>
              <LandingHeader size="xs" {...MOCK_LANDING_HEADER_PROPS} />
            </Grid>
            <Grid item md={4}>
              <LandingHeader size="xs" {...MOCK_LANDING_HEADER_PROPS} />
            </Grid>
          </Grid>
        </Container>
      </Block>

      <Block>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }} />
            <Grid item md={6}>
              <LandingHeader size="lg" {...MOCK_LANDING_HEADER_PROPS} />
            </Grid>
          </Grid>
        </Container>
      </Block>

      <Block bgcolor="background.default">
        <Container maxWidth="sm">
          <LandingHeader textAlign="center" size="lg" {...MOCK_LANDING_HEADER_PROPS} />
        </Container>
      </Block>

      <Block bgcolor="primary.main" />
    </div>
  )
}

export default { title: 'Landing' }
