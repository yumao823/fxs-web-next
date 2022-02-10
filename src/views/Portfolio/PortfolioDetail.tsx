import React, { FC } from 'react'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import { MOCK_IMPACTS, MOCK_PORTFOLIO } from './constant'

const PortfolioItem: FC = () => (
  <>
    <Block reveal>
      <Container>
        <Typography variant="h6" sx={{ color: 'success.light', mb: 3 }}>
          CASE STYDY
        </Typography>
        <Typography variant="h2" sx={{ color: 'primary.dark', mb: 3 }}>
          {MOCK_PORTFOLIO.title}
        </Typography>
        <Typography variant="h4" sx={{ mb: 6 }}>
          {MOCK_PORTFOLIO.overview}
        </Typography>
        <img src={MOCK_PORTFOLIO.image} alt={MOCK_PORTFOLIO.title} width="100%" />
      </Container>
    </Block>
    <Block reveal>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5} sx={{ pr: { xs: 0, sm: 6 }, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ISSUE
            </Typography>
            <Typography variant="h5" sx={{ color: 'grey.600' }}>
              {MOCK_PORTFOLIO.issue}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              OUT SOLUTION
            </Typography>
            <Typography variant="h5" sx={{ color: 'grey.600' }}>
              {MOCK_PORTFOLIO.solution}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Block>
    <Block reveal>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 6 }}>
          “Fin X delivers stunning work with a quick turnaround. Their blend of tech and creativity make innovation feel
          frictionless.”
        </Typography>
        <Typography variant="h4" sx={{ color: 'grey.400' }}>
          Myer Jensens, Business Director, OctiFi
        </Typography>
      </Container>
    </Block>
    <Block reveal>
      <Container sx={{ bgcolor: 'grey.200', p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Impact Made
        </Typography>
        <Divider />
        <Grid container sx={{ pt: 6 }}>
          {MOCK_IMPACTS.map((item) => (
            <Grid key={`mi-${item.id}`} item xs={12} sm={4} sx={{ mb: 3 }}>
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="h6">{item.label}</Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: 'primary.dark',
            borderColor: 'primary.dark',
            borderRadius: 30,
          }}
        >
          View our other case studies
        </Button>
      </Box>
    </Block>
  </>
)

export default PortfolioItem
