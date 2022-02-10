import React, { FC } from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Button from 'src/components/Button'

const MOCK_CATEGORIES = ['Digital Advisory', 'Product Strategy', 'UI/UX Design', 'Software Development', 'Branding']

const Partner: FC = () => (
  <Block reveal>
    <Container sx={{ py: 6 }}>
      <Grid container>
        <Grid item md={6} sx={{ pr: 4, mb: 6 }}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            <Box component="span" sx={{ color: 'success.light', mr: 1 }}>
              Your Partner
            </Box>
            <Box component="span" sx={{ color: 'primary.dark' }}>
              on the journey from now to what's next
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ mb: 6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis vel volutpat, vel et amet vestibulum.
            Vestibulum elementum consequat diam bibendum nibh diam cursus. Dis consectetur sit sagittis a, arcu
            tincidunt. Mi aliquam pretium, nulla lorem.
          </Typography>
          <Button label="View Our Services" underline />
        </Grid>
        <Grid item md={6} xs={12}>
          <Divider />
          {MOCK_CATEGORIES.map((item) => (
            <Box key={`mc-${item}`}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <Typography sx={{ py: 3 }}>{item}</Typography>
                <ArrowForwardIcon sx={{ color: 'success.light' }} />
              </Box>
              <Divider />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Block>
)

export default Partner
