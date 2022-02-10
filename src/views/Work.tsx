import { NextSeo } from 'next-seo'
import { Box, Container } from '@mui/material'
import React from 'react'
import { Block, CaseStudyGrid, LandingHeader } from '@onextech/material-ui-landing/core'
import { mockCaseStudies } from './__mocks__/OXDMocks.mocks'
import { seo } from '../app/seo'

const Work = () => {
  return (
    <Box bgcolor="white" pb={10}>
      <NextSeo {...seo.work} />

      <Block reveal>
        <Container>
          <LandingHeader
            size="xl"
            title="Showcase"
            subtitle="Discover hundreds of beautiful products hand-crafted by One X Design."
          />
        </Container>
      </Block>

      <Block spacing={{ xs: 0, md: 10 }}>
        <Container maxWidth="lg">
          <CaseStudyGrid items={mockCaseStudies} />
        </Container>
      </Block>
    </Box>
  )
}

export default Work
