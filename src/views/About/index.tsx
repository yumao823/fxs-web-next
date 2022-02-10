import React, { FC } from 'react'
import { Box } from '@mui/material'
import AboutUs from './AboutUs'
import Capabilities from './Capabilities'
import Partner from './Partner'

const About: FC = () => (
  <Box sx={{ py: 5 }}>
    <AboutUs />
    <Capabilities />
    <Partner />
  </Box>
)

export default About
