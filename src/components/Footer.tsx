import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'

const MOCK_NAVS = [
  {
    title: 'Company',
    data: ['Home', 'About', 'Porcess', 'Blog', 'Work'],
  },
  {
    title: 'Portfolio',
    data: ['Julius Baer', 'UOB', 'OctiFi', 'Spiking', 'SGPay'],
  },
  {
    title: 'Services',
    data: ['Digital Advisory', 'Product Strategy', 'UI/UX Design', 'Software Development', 'Branding'],
  },
]

const MOCK_SOCIALS = [
  {
    id: 0,
    icon: <LinkedInIcon />,
  },
  {
    id: 1,
    icon: <FacebookOutlinedIcon />,
  },
  {
    id: 2,
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    icon: <Typography sx={{ lineHeight: 'initial', fontWeight: 'bold' }}>Be</Typography>,
  },
  {
    id: 4,
    icon: <SportsBasketballIcon />,
  },
]

const Footer: FC = () => (
  <Box sx={{ bgcolor: 'black', color: 'white', py: 16 }}>
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ mb: { xs: 6, md: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: 200, mb: 10 }}>
            FINX
          </Typography>
          <Typography variant="h4" sx={{ mb: 10, mr: { xs: 0, sm: 28 } }}>
            Making innovation a predictable driver of growth
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600' }}>
            © 2021 FINX Studio Singapore. All rights reserved
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600' }}>
            140 Robinson Road, Singapore 068907
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid container sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            {MOCK_NAVS.map((nav) => (
              <Grid key={`nv-${nav.title}`} item xs={12} sm={4}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {nav.title}
                </Typography>
                {nav.data.map((item) => (
                  <Typography key={`nd-${item}`} variant="body2" sx={{ color: 'grey.600', mb: 2, cursor: 'pointer' }}>
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
          <Grid container sx={{ mt: 'auto' }}>
            <Grid item xs={12} sm={7} sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 0 } }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <ArrowForwardIcon sx={{ color: 'success.light', ml: 2 }} />
              <Typography variant="body2" sx={{ color: 'grey.600', ml: 'auto' }}>
                hello@finx.studio
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {MOCK_SOCIALS.map((item) => (
                <Box key={`sc-${item.id}`} sx={{ cursor: 'pointer', ml: 2 }}>
                  {item.icon}
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer
