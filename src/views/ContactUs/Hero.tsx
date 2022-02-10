import React, { FC } from 'react'
import { Box, Container, IconButton, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const Hero: FC = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', pt: 10 }}>
      <Container sx={{ mb: 10 }}>
        <Typography variant="h6" sx={{ color: 'success.light', mb: 3 }}>
          GET IN TOUCH
        </Typography>
        <Typography
          variant="h2"
          sx={{
            width: 'fit-content',
            borderBottom: '1px solid',
            borderColor: 'success.light',
            pb: 2,
            mb: 10,
          }}
        >
          hello@finx.studio
        </Typography>
      </Container>
      <Container sx={{ mb: { xs: -6, sm: -12 } }}>
        <IconButton
          sx={{
            width: 56,
            height: { xs: 80, sm: 160 },
            bgcolor: 'success.light',
            color: 'white',
            borderRadius: 0,
            cursor: 'pointer',
          }}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Container>
      <img src="/contact/back.png" alt="Contact" width="100%" />
    </Box>
  )
}

export default Hero
