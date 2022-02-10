import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const MOCK_FINANCIALS = [
  {
    id: 0,
    image: '/blog/lifecycle.png',
    title: 'Product Life Cycle & Product Development Cycle: Revisited',
    SpeechRecognitionAlternative: 'Product Development',
  },
  {
    id: 1,
    image: '/blog/execute.png',
    title: 'The complete guide to executing a great design to development handoff',
    role: 'UI/UX, Product Development',
  },
  {
    id: 2,
    image: '/blog/shape.png',
    title: 'How UX shapes custom software development',
    role: 'UI/UX, Product Development',
  },
  {
    id: 3,
    image: '/blog/conduct.png',
    title: 'Conducting User Interviews for UX Research and Product Development',
    role: 'UI/UX, Reserch, Product Development',
  },
  {
    id: 4,
    image: '/blog/goal.png',
    title: 'Personal development goals every designer should set',
    role: 'UI/UX, Self-Improvement',
  },
  {
    id: 5,
    image: '/blog/practice.png',
    title: 'Best Practices for Minimalistic Design',
    role: 'UI/UX, Psychology',
  },
]

const Financial: FC = () => (
  <>
    <Block reveal sx={{ bgcolor: 'white' }}>
      <img src="/blog/financial.png" alt="financial" width="100%" />
      <Box
        sx={{
          maxWidth: 'sm',
          bgcolor: 'white',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
          mt: { xs: 0, sm: -10 },
          mb: 6,
          mx: 'auto',
          px: { xs: 3, md: 10 },
          py: 3,
        }}
      >
        <Typography variant="h6" sx={{ color: 'success.light', mb: 2 }}>
          FEATURED
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          4 Key Ways to Build a Financial Service's Most Valuable Product: Trust
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          UI/UX, CX, Banking
        </Typography>
      </Box>
      <Container>
        <Grid container>
          {MOCK_FINANCIALS.map((item) => (
            <Grid key={`is-${item.id}`} item xs={12} sm={6} md={4} sx={{ mt: 3, p: 1 }}>
              <img src={item.image} alt={item.title} width="100%" />
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'grey.400', mt: 2 }}>
                {item.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Block>
  </>
)

export default Financial
