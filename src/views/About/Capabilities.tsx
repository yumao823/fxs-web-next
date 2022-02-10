import React, { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

const MOCK_EXPERTISE = ['Strategy', 'Branding', 'Web Design', 'Digital Product Design', 'Development']

const MOCK_PLATFORMS = ['Websites', 'Wealth Management Systems', 'Data Automation Systems']

const Capabilities: FC = () => (
  <Block reveal>
    <Container sx={{ py: 10 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        CAPABILITIES
      </Typography>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Our Expertise in Finance
          </Typography>
        </Grid>
        <Grid item md={8} sx={{ px: { xs: 0, md: 2 } }}>
          <Typography variant="h5" sx={{ color: 'grey.600', mb: 5 }}>
            How we help financial enterprises transform their product with our myriad of deep competencies
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Expertise
              </Typography>
              {MOCK_EXPERTISE.map((item) => (
                <Typography variant="h6" sx={{ color: 'grey.600', mb: 2 }}>
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Platforms
              </Typography>
              {MOCK_PLATFORMS.map((item) => (
                <Typography variant="h6" sx={{ color: 'grey.600', mb: 2 }}>
                  {item}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Block>
)

export default Capabilities
