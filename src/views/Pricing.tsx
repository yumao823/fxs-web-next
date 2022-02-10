import { NextSeo } from 'next-seo'
import { Box, ButtonProps, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import { SxProps } from '@mui/system'
import { AccordionList, ArrowLink, Block, LandingHeader, ResponsiveDialog } from '@onextech/material-ui-landing/core'
import dynamic from 'next/dynamic'
import { seo } from '../app/seo'
import { mockFAQItems, mockPricingItems } from './__mocks__/OXDMocks.mocks'
import { hero_mbk_image, white_smooth_texture_image } from '../app/images'
import { routes } from '../app/routes'

const ContactGrid = dynamic(import('./Contact').then((mod) => mod.ContactGrid))

interface PricingCardItem {
  title: string
  subtitle: string
  price: number
  features: string[]
  buttonTitle: string
  sx?: SxProps
  ButtonProps?: ButtonProps
}
interface PricingCardProps {
  item: PricingCardItem
}
const PricingCard: React.FC<PricingCardProps> = (props) => {
  const { item } = props
  const { title, price, subtitle, features, sx, buttonTitle, ButtonProps } = item

  return (
    <Card sx={{ borderRadius: 2, padding: 3, backgroundColor: 'background.default', ...sx }}>
      <CardContent>
        <Typography variant="overline">{title}</Typography>
        <Typography variant="h3" gutterBottom>
          ${price.toLocaleString()}
        </Typography>
        <Typography variant="body2">{subtitle}</Typography>
        <Stack mt={3} spacing={1}>
          {features.map((feature) => {
            return (
              <Stack key={feature} direction="row" spacing={1}>
                <CheckOutlinedIcon fontSize="small" />
                <Typography variant="body2">{feature}</Typography>
              </Stack>
            )
          })}
        </Stack>
      </CardContent>

      <CardActions sx={{ mt: 3 }}>
        <ResponsiveDialog buttonTitle={buttonTitle} variant="contained" fullWidth size="large" {...ButtonProps}>
          <ContactGrid />
        </ResponsiveDialog>
      </CardActions>
    </Card>
  )
}

interface PricingGridProps {
  items: PricingCardItem[]
}
const PricingGrid: React.FC<PricingGridProps> = (props) => {
  const { items } = props

  return (
    <Grid container spacing={3}>
      {items.map((item) => {
        return (
          <Grid key={item.title} item xs={12} md>
            <PricingCard item={item} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export const PricingBlock: React.FC = () => {
  return (
    <Block reveal>
      <Container>
        <LandingHeader
          textAlign="center"
          overline="Pricing"
          title="Transparent pricing"
          subtitle="Bring your ideas to life"
          mb={6}
        />
        <PricingGrid items={mockPricingItems} />
      </Container>
    </Block>
  )
}

const Pricing = () => {
  return (
    <Box bgcolor="white">
      <NextSeo {...seo.pricing} />

      <Block reveal bg={{ ...hero_mbk_image, priority: true }} sx={{ height: { xs: 220, md: 360 } }} />

      <PricingBlock />

      <Block reveal>
        <Container maxWidth="sm">
          <LandingHeader textAlign="center" title="FAQ" subtitle="Frequently Asked Questions" mb={6} />
          <AccordionList items={mockFAQItems} />
        </Container>
      </Block>

      <Block reveal bg={white_smooth_texture_image} sx={{ height: { xs: 220, md: 360 } }} textAlign="center" middle>
        <Container>
          <LandingHeader title="Get Started" textAlign="inherit" />
          <ArrowLink title="Contact Us" href={routes.CONTACT} />
        </Container>
      </Block>
    </Box>
  )
}

export default Pricing
