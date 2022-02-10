import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import Button from 'src/components/Button'

const MOCK_ROLES = [
  {
    id: 0,
    image: '/home/internal-innovation.png',
    title: 'Internal Innovation',
    description:
      'Back-end infrastructure for integrating, managing, and securing data of any kind, from any source, at massive scale.',
  },
  {
    id: 1,
    image: '/home/seamless-ux.png',
    title: 'Seamless UX',
    description:
      'User interfaces that enable people to interact smoothly with data, ask better questions, and make better decisions.',
  },
  {
    id: 2,
    image: '/home/built-to-order.png',
    title: 'Built to order',
    description:
      'Custom-made for businesses according to the specific challenges and goals of the company in order to ensure accurate, quality delivery.',
  },
]

const Role: FC = () => (
  <Block reveal>
    <Container>
      <Typography variant="h6" sx={{ mb: 3 }}>
        WHAT WE DO
      </Typography>
      <Typography variant="h2">Co-creating tangible business results while sharing risks and rewards</Typography>
      <Grid container>
        {MOCK_ROLES.map((item) => (
          <Grid key={`r-${item.id}`} item sm={12} md={4} sx={{ mt: 6, mb: 3 }}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', m: 2 }}>
              <img src={item.image} alt={item.title} width={item.id === 1 ? 160 : 120} height={100} />
              <Typography variant="h4" sx={{ mt: 5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 'auto' }}>
                {item.description}
              </Typography>
              <Button label="Learn More" underline />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Block>
)

export default Role
