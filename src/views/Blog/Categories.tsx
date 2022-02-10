import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import Button from 'src/components/Button'
import Blogs from './Blogs'
import { routes } from '../../app/routes'

const MOCK_CATEGORIES = ['All Categories', 'UI/UX', 'Web Design', 'Web Development']

const Categories: FC = () => {
  const router = useRouter()

  return (
    <Block reveal sx={{ bgcolor: 'white' }}>
      <Container>
        <Box
          sx={{
            color: 'grey.400',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {MOCK_CATEGORIES.map((item) => (
            <Typography key={`mc-${item}`} variant="h5" sx={{ mr: 3, mb: 3 }}>
              {item}
            </Typography>
          ))}
        </Box>
        <Divider />
        <Grid container sx={{ py: 6 }}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
            <img src="/blog/fintech.png" alt="Fintech" width="100%" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ color: 'success.light', mb: 2 }}>
              FEATURED
            </Typography>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Designing for Fintech: Five Tips for UI/UX Development
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.600', mb: 3 }}>
              Explore our checklist of what things to do and avoid, as well as brand case studies and other best
              practices
            </Typography>
            <Button label="Read More" underline onClick={() => router.push(`${routes.BLOG}/1`)} />
          </Grid>
        </Grid>
        <Blogs />
      </Container>
    </Block>
  )
}

export default Categories
