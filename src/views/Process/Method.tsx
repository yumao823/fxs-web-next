import React, { FC } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const MOCK_METHODS = [
  {
    id: 0,
    image: 'process/product.png',
    title1: 'We maximise',
    title2: 'product magnetism',
    content:
      'In the digital age, only a product that’s 100% focused on user needs can conquer the rising competition. We drive demand by solving user problems and delivering what they desire in the best possible way.',
  },
  {
    id: 1,
    image: 'process/happy.png',
    title1: 'We make users',
    title2: 'happy',
    content:
      'Design is not just about pretty packaging. Design is what creates the core of your brand. We over-deliver on customer expectations with amazing digital experiences that make people fall in love with and recommend your brand.',
  },
  {
    id: 2,
    image: 'process/empower.png',
    title1: 'We',
    title2: 'empower',
    title3: 'brand advantage',
    content:
      'An experience-centered brand is a successful business. Working with us becomes a business-transforming breakthrough for our clients. The inner culture and business approach shifts dramatically, ensuring a path to long-term advantage, demand and profitability.',
  },
]

const Method: FC = () => (
  <Block reveal sx={{ bgcolor: 'black', color: 'white' }}>
    <Container>
      <Typography variant="h3" sx={{ mb: 6 }}>
        How we work with you
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold', b: 6 }}>
        Back-end infrastructure for integrating, managing, and securing data of any kind, from any source, at massive
        scale.
      </Typography>
      {MOCK_METHODS.map((item) => (
        <Grid key={`mm-${item.id}`} container sx={{ my: 3 }}>
          <Grid item xs={12} sm={4}>
            <img src={item.image} alt={item.title1} width="100%" />
          </Grid>
          <Grid item xs={12} sm={8} sx={{ pl: { xs: 0, sm: 6 }, py: 2 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
              <Box component="span" sx={{ mr: 1 }}>
                {item.title1}
              </Box>
              <Box component="span" sx={{ color: 'success.light', mr: 1 }}>
                {item.title2}
              </Box>
              <Box component="span">{item?.title3}</Box>
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              {item.content}
            </Typography>
            <Button
              sx={{
                borderBottom: '3px solid white',
                borderRadius: 0,
                width: 'fit-content',
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ mr: 1 }}>
                Learn More
              </Typography>
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      ))}
    </Container>
  </Block>
)

export default Method
