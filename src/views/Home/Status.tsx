import React, { FC } from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const MOCK_STATUSES = [
  {
    id: 0,
    state: '$5b+',
    title: 'Equity Value',
    description: 'More than $5b USD in equity value created',
  },
  {
    id: 1,
    state: '57%',
    title: 'Tech Platform',
    description:
      'According to Deloitte, 57% of Millennials would change their bank relationship for a better technology platform ',
  },
  {
    id: 2,
    state: '70%',
    title: 'Features',
    description: 'The average finance system offers many features, but up tp 70% of its users use only a few of them',
  },
  {
    id: 3,
    state: '75%',
    title: 'Memorable UX',
    description:
      'of companies with strong, positive, memoranble UX outperformed all others in stock performance, during the worst downturns',
  },
]

const Status: FC = () => (
  <Block reveal sx={{ bgcolor: 'black', color: 'white' }}>
    <Container>
      <Grid container>
        {MOCK_STATUSES.map((item) => (
          <Grid key={`st-${item.id}`} item sm={6} md={3} sx={{ p: 2, pt: 10 }}>
            <Typography variant="h1">{item.state}</Typography>
            <Divider sx={{ bgcolor: 'grey.800', my: 4 }} />
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mt: 2 }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Block>
)

export default Status
