import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { LandingHeader } from '@onextech/material-ui-landing/core'
import StyleGuideComponent from '../src/components/StyleGuide/StyleGuide'
import { MOCK_LANDING_HEADER_PROPS } from './__mocks__/Landing.mocks'

const LandingHeaderProps = {
  py: 3,
  ...MOCK_LANDING_HEADER_PROPS,
}

export const StyleGuide = () => {
  return (
    <>
      <Container>
        <Box mb={5}>
          <LandingHeader size="xl" ContainerProps={{ maxWidth: 'md' }} {...LandingHeaderProps} />
          <LandingHeader size="lg" {...LandingHeaderProps} />
          <LandingHeader size="md" {...LandingHeaderProps} />
          <LandingHeader size="sm" ContainerProps={{ maxWidth: 'xs' }} {...LandingHeaderProps} />
          <Grid container spacing={3}>
            <Grid item sm>
              <LandingHeader size="xs" ContainerProps={{ maxWidth: 'xs' }} {...LandingHeaderProps} />
            </Grid>
            <Grid item sm>
              <LandingHeader size="xs" ContainerProps={{ maxWidth: 'xs' }} {...LandingHeaderProps} />
            </Grid>
            <Grid item sm>
              <LandingHeader size="xs" ContainerProps={{ maxWidth: 'xs' }} {...LandingHeaderProps} />
            </Grid>
          </Grid>
        </Box>

        <StyleGuideComponent />
      </Container>
    </>
  )
}

export default { title: 'Style Guide' }
