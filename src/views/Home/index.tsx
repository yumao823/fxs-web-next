import React, { FC } from 'react'
import { Box } from '@mui/material'
import Hero from './Hero'
import Role from './Role'
import Status from './Status'
import CaseStudies from './CaseStudies'
import Insights from './Insights'
import Delivery from './Delivery'

const Home: FC = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Hero />
      <Role />
      <Status />
      <CaseStudies />
      <Insights />
      <Delivery />
    </Box>
  )
}

export default Home
