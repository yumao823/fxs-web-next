import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Button from 'src/components/Button'

const Hero: FC = () => (
  <>
    <Container sx={{ mb: 10 }}>
      <Grid container>
        <Grid item md={9}>
          <Typography variant="h5" sx={{ color: 'success.light', mb: 3 }}>
            FINTECH DESIGN PROFESSIONALS WHO
          </Typography>
          <Typography variant="h2">
            <Box component="span" sx={{ color: 'primary.dark' }}>
              Turn
            </Box>
            <Box component="span" sx={{ color: 'success.light', mx: 2 }}>
              FI product
            </Box>
            <Box component="span" sx={{ color: 'primary.dark' }}>
              your brand's competitive advantage
            </Box>
          </Typography>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button label="View Our Work" underline />
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ mt: 4, px: { lg: 3, xs: 2 }, mb: '-30%' }}>
      <img src="/home/hero.png" alt="hero" width="100%" />
    </Box>
    <Box sx={{ bgcolor: 'black', pt: '40%', pb: { xs: 6, sm: 10, lg: 20 } }}>
      <Container>
        <Typography variant="h3" sx={{ color: 'white' }}>
          <Box component="span">We are a</Box>
          <Box component="span" sx={{ color: 'success.light', mx: 2 }}>
            global strategy, UI/UX design and software development agency
          </Box>
          <Box component="span">crafting powerful yet practical digital.</Box>
        </Typography>
      </Container>
    </Box>
  </>
)

export default Hero
