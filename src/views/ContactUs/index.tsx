import React, { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import Hero from './Hero'
import Form from './Form'

const ContactUs: FC = () => {
  return (
    <>
      <Hero />
      <Block reveal>
        <Container sx={{ py: 10 }}>
          <Grid container>
            <Grid item xs={12} md={5} sx={{ pr: 4 }}>
              <Typography variant="h6" sx={{ color: 'success.light', mb: 3 }}>
                OUT OFFICE
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Singapore
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.600', mb: 6 }}>
                Crown at Robinson, <br /> 140 Robinson Road, Singapore 068907
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                pl: { xs: 0, sm: 4 },
                borderColor: 'grey.400',
                borderLeftStyle: 'solid',
                borderLeftWidth: { xs: 0, sm: 1 },
              }}
            >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Block>
    </>
  )
}

export default ContactUs
