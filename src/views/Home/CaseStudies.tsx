import React, { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import Button from 'src/components/Button'

const MOCK_STUDIES = [
  {
    id: 0,
    image: '/home/octify.png',
    title: 'OCTIFI',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
  {
    id: 1,
    image: '/home/sgpay.png',
    title: 'SGPAY',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
]

const CaseStudies: FC = () => (
  <Block reveal>
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 10 }}>
      <Typography variant="h2">Case Studies</Typography>
      <Grid container sx={{ mb: 10 }}>
        {MOCK_STUDIES.map((item) => (
          <Grid key={`cs-${item.id}`} item xs={12} sm={6} sx={{ mt: 3, p: 2 }}>
            <img src={item.image} alt={item.title} width="100%" />
            <Button label={item.title} />
            <Typography variant="body2" sx={{ color: 'grey.400', mt: 2 }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button label="View All Case Studies" underline />
    </Container>
  </Block>
)

export default CaseStudies
