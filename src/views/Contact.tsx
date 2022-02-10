import { NextSeo } from 'next-seo'
import { Box, Button, Container, Grid, TextField, TextFieldProps, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ArrowLink, Block, LandingHeader, ResponsiveGrid } from '@onextech/material-ui-landing/core'
import { useToast } from '@onextech/material-ui-landing/core/ToastProvider'
import { seo } from '../app/seo'
import { appConfig } from '../app/config'
import { useGravisEnquiry } from '../lib/Gravis/useGravisEnquiry'
import { setGoogleTag } from '../lib/GoogleTagManager'
import { withApollo } from '../lib/Apollo'

const ContactForm: React.FC = () => {
  // Defaults
  const textFieldProps = {
    fullWidth: true,
    variant: 'standard' as TextFieldProps['variant'],
    inputProps: { required: true, autoComplete: 'none' },
  }
  const defaultValues = {
    name: '',
    email: '',
    mobile: '',
    content: '',
  }

  // Form
  const { control, handleSubmit, reset } = useForm({ defaultValues })

  // Submit
  const { handleCreateEnquiry } = useGravisEnquiry()
  const { toast } = useToast()
  const onSubmit = async (values) => {
    const onCreate = await handleCreateEnquiry(values)
    if (!onCreate) return toast.error('Please try again later')
    toast.success('Successfully sent')
    setGoogleTag({ event: 'generate_lead', currency: appConfig.currency, value: 1 })
    reset(defaultValues)
  }

  return (
    <Box mt={2} sx={{ 'form > .MuiFormControl-root': { mb: 2 } }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                type="text"
                label="Name"
                placeholder="How should we address you?"
                {...field}
                {...textFieldProps}
              />
            )
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              type="email"
              label="Email"
              placeholder="What is your email address?"
              {...field}
              {...textFieldProps}
            />
          )}
        />

        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Mobile"
              placeholder="What is your mobile number?"
              {...textFieldProps}
              inputProps={{
                required: true,
                pattern: '(6|8|9){1}[0-9]{7}',
                title: 'Please enter a valid Singapore number',
                oninput: 'this.value=this.value.slice(0,this.maxLength)',
                maxLength: 8,
              }}
            />
          )}
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Message"
              placeholder="How may we help you?"
              multiline
              rows={4}
              type="textarea"
              {...textFieldProps}
            />
          )}
        />

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            Send
          </Button>
        </Box>
      </form>
    </Box>
  )
}

const ContactFormWithApollo = withApollo()(ContactForm)

export const ContactGrid: React.FC = () => {
  return (
    <ResponsiveGrid container spacing={{ xs: 5, md: 10 }}>
      <Grid item xs={12} md={6}>
        <Box>
          <LandingHeader
            title="See how we turn ideas into real life products"
            subtitle="Describe your project and leave us your contact info, we’ll get back to you within 24 hours."
          />

          <Box sx={{ mt: { xs: 5, md: 20 } }} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="h5" gutterBottom>
              Our Offices
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {appConfig.companyAddress}
            </Typography>
            <ArrowLink title="Drop us an email" href={`mailto:${appConfig.contact.email}`} mt={2} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="overline">Contact Us</Typography>
        </Box>

        <ContactFormWithApollo />
      </Grid>
    </ResponsiveGrid>
  )
}

const Contact = () => {
  return (
    <Box bgcolor="white">
      <NextSeo {...seo.contact} />

      <Block reveal>
        <Container>
          <ContactGrid />
        </Container>
      </Block>
    </Box>
  )
}

export default Contact
