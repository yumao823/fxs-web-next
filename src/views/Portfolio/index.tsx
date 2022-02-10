import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Container, Grid, IconButton, Button as MaterialButton, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Button from 'src/components/Button'
import { routes } from '../../app/routes'

const MOCK_STUDIES = [
  {
    id: 0,
    image: '/portfolio/julies.png',
    title: 'JULIUS BAER SINGAPORE',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
  {
    id: 1,
    image: '/portfolio/sgpay.png',
    title: 'SGPAY',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
  {
    id: 2,
    image: '/portfolio/octify.png',
    title: 'OCTIFI',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
  {
    id: 3,
    image: '/portfolio/spiking.png',
    title: 'SPIKING',
    description: 'Empowering merchants to capture additional sales with their AI-driven consumer financing platform',
  },
]

const Portfolio: FC = () => {
  const router = useRouter()

  return (
    <>
      <Block reveal bg={{ src: '/portfolio/back.png' }} sx={{ color: 'white', zIndex: -1 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                FEATURED
              </Typography>
              <Typography variant="h2" sx={{ mb: 4 }}>
                Driving more actionable customer data
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
      <IconButton
        sx={{
          width: 56,
          height: { xs: 80, sm: 160 },
          bgcolor: 'success.light',
          color: 'white',
          borderRadius: 0,
          cursor: 'pointer',
          mx: 'auto',
          mt: { xs: -5, sm: -10 },
        }}
      >
        <ArrowDownwardIcon />
      </IconButton>
      <Block reveal>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h2">Case Studies</Typography>
          <Grid container sx={{ mb: 10 }}>
            {MOCK_STUDIES.map((item) => (
              <Grid key={`cs-${item.id}`} item xs={12} sm={6} sx={{ mt: 3, p: 2 }}>
                <img src={item.image} alt={item.title} width="100%" />
                <Button label={item.title} onClick={() => router.push(`${routes.PORTFOLIO}/${item.id}`)} />
                <Typography variant="body2" sx={{ color: 'grey.400', mt: 2 }}>
                  {item.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Block>
    </>
  )
}

export default Portfolio
