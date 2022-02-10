import React, { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const MOCK_INSIGHTS = [
  {
    id: 0,
    image: '/home/designing.png',
    title: 'The Practical Guide to Designing Great Fintech Apps',
    description: 'UI/UX, CX, Banking',
  },
  {
    id: 1,
    image: '/home/impacting.png',
    title: 'Impacting Childrens’ Financial Futures through Gamification',
    description: 'UI/UX, Case Study, Psychology',
  },
  {
    id: 2,
    image: '/home/banking.png',
    title: 'UX Design as an Innovation Driver for Future Banking',
    description: 'UI/UX, Psychology',
  },
]

const Insights: FC = () => (
  <Block reveal>
    <Container>
      <Typography variant="h4">Insights</Typography>
      <Grid container>
        {MOCK_INSIGHTS.map((item) => (
          <Grid key={`is-${item.id}`} item xs={12} sm={4} sx={{ mt: 3, p: 1 }}>
            <img src={item.image} alt={item.title} width="100%" />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mt: 2 }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Block>
)

export default Insights
