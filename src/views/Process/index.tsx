import React, { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import Approach from './Approach'
import Capabilities from './Capabilities'
import Method from './Method'
import Partner from './Partner'
import Team from './Team'

const MOCK_TITLES = ['Our Capabilities', 'How We Work', 'Our Services']

const Process: FC = () => (
  <>
    <Approach />
    <Block reveal sx={{ py: 0 }}>
      <Box sx={{ bgcolor: 'white', py: 4 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', color: 'grey.600' }}>
          {MOCK_TITLES.map((item, index) => (
            <Typography key={`mt-${item}`} variant="h6" sx={index !== 0 && { ml: 4 }}>
              {item}
            </Typography>
          ))}
        </Container>
      </Box>
    </Block>
    <Capabilities />
    <Method />
    <Partner />
    <Team />
  </>
)

export default Process
