import { NextSeo } from 'next-seo'
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Theme,
  Typography,
} from '@mui/material'
import React from 'react'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import clsx from 'clsx'
import makeStyles from '@mui/styles/makeStyles'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import {
  Block,
  ImageCallout,
  ImageMarquee,
  LandingHeader,
  ProductBar,
  ResponsiveGrid,
  ReviewQuoteStack,
} from '@onextech/material-ui-landing/core'
import { mockImageMarquee, mockReviewQuotes, mockTimelineItems } from './__mocks__/OXDMocks.mocks'
import { seo } from '../app/seo'
import { hero_iix_image, shot_nkk_image } from '../app/images'
import { routes } from '../app/routes'

const useStyles = makeStyles((theme: Theme) => ({
  timeline: {
    '& .MuiTimelineItem-root:before': {
      content: 'none',
    },
    marginBottom: 0,
  },
  timelineList: {
    '& .MuiListItemIcon-root': {
      minWidth: theme.spacing(4),
    },
  },
}))

const ActionDeliverableTimeline = (props) => {
  const { className, items } = props
  const classes = useStyles(props)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Timeline className={clsx(classes.timeline, className)}>
      {items.map((item) => {
        const { title, overline, actionListItems, deliverableListItems } = item

        return (
          <TimelineItem key={title}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box mt={-1}>
                <Typography variant="overline">{overline}</Typography>
                <Typography variant="h4">{title}</Typography>

                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2, md: 4 }}
                  mt={4}
                  mb={10}
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <div>
                    <Typography variant="h6">Actions</Typography>
                    {actionListItems && (
                      <List className={classes.timelineList} sx={{ minWidth: 300 }}>
                        {actionListItems.map((actionListItem) => {
                          const { title } = actionListItem
                          return (
                            <ListItem key={title} alignItems="flex-start" disableGutters>
                              <ListItemIcon>
                                <CheckBoxOutlineBlankOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary={title} />
                            </ListItem>
                          )
                        })}
                      </List>
                    )}
                  </div>
                  <div>
                    <Typography variant="h6">Deliverables</Typography>
                    {deliverableListItems && (
                      <List className={classes.timelineList}>
                        {deliverableListItems.map((deliverableListItem) => {
                          const { title } = deliverableListItem
                          return (
                            <ListItem key={title} alignItems="flex-start" disableGutters>
                              <ListItemIcon>
                                <CheckOutlinedIcon sx={{ color: 'success' }} />
                              </ListItemIcon>
                              <ListItemText primary={title} />
                            </ListItem>
                          )
                        })}
                      </List>
                    )}
                  </div>
                </Stack>
              </Box>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

export const ReviewBlock = () => {
  return (
    <Block reveal>
      <Container maxWidth="sm">
        <ReviewQuoteStack items={mockReviewQuotes} />
      </Container>
    </Block>
  )
}

export const PricingCalloutBlock = () => {
  return (
    <Block reveal>
      <Container maxWidth="md">
        <ImageCallout
          reverse
          title="Easy design for everyone"
          subtitle="Bring your vision to life in minutes"
          button={{
            title: 'View Pricing',
            href: routes.PRICING,
            color: 'secondary',
          }}
          image={shot_nkk_image}
        />
      </Container>
    </Block>
  )
}

const Product = () => {
  return (
    <Box bgcolor="white">
      <NextSeo {...seo.product} />

      <ProductBar
        title={{ title: 'Product Design', href: '#overview' }}
        links={[
          {
            title: 'Overview',
            href: '#overview',
          },
          {
            title: 'Framework',
            href: '#framework',
          },
          {
            title: 'Process',
            href: '#process',
          },
        ]}
        button={{
          title: 'View Pricing',
          href: routes.PRICING,
        }}
      />

      <Block reveal>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <LandingHeader
                anchor="overview"
                size="xl"
                overline="UX Design Agency"
                title="Product Design"
                subtitle="UI/UX Design for Product-led Companies"
              />

              <Stack
                mt={4}
                spacing={{ xs: 2, md: 1 }}
                direction={{ xs: 'column', sm: 'row', md: 'column' }}
                justifyContent={{ xs: 'flex-start', sm: 'space-evenly', md: 'flex-start' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CalendarTodayOutlinedIcon />
                  <Typography>Duration: 4 weeks</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTimeOutlinedIcon />
                  <Typography>Lead Time: 2 weeks</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Block>

      <Block reveal bg={{ ...hero_iix_image, priority: true }} sx={{ height: { xs: 220, md: 360 } }} />

      <Block reveal>
        <Container>
          <LandingHeader anchor="framework" blend overline="Framework" title="Our Unique Framework" mb={4} />

          <ResponsiveGrid container spacing={{ xs: 4, md: 12 }}>
            <Grid item xs={12} md={9}>
              <Typography>
                We’ve developed a unique design delivery framework that delivers results in 4 weeks. We use
                industry-proven methodologies such as Jobs-to-be-Done and Design Sprint to identify product
                improvements, opportunities for growth, and determine the most suitable and budget-friendly solution for
                you.
                <br />
                <br />
                With our experience building over 150 digital products, we’ve managed to optimise our processes and
                deliver highly effective and impactful UX and UI design, quickly. We’ve designed products for teams
                backed by Fortune 500 companies, the Singapore Government, and other leading global multi-national
                companies.
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Stack
                spacing={{ xs: 4, md: 8 }}
                direction={{ xs: 'row', md: 'column' }}
                justifyContent={{ xs: 'space-evenly', md: 'flex-start' }}
                textAlign={{ xs: 'center', md: 'left' }}
              >
                <Stack>
                  <Typography variant="h4">150+</Typography>
                  <Typography>Happy customers</Typography>
                </Stack>
                <Stack>
                  <Typography variant="h4">4 weeks</Typography>
                  <Typography>Turnaround</Typography>
                </Stack>
              </Stack>
            </Grid>
          </ResponsiveGrid>
        </Container>
      </Block>

      <Block reveal bgcolor="black" color="white">
        <Container>
          <LandingHeader
            blend
            overline="Gallery"
            title="Product Showcase"
            subtitle="Discover beautiful products delivered by our Product Design process."
          />
        </Container>

        <Stack spacing={1} mt={6}>
          <ImageMarquee items={mockImageMarquee.slice(0, mockImageMarquee.length / 2)} size="lg" mb={2} />
          <ImageMarquee
            items={mockImageMarquee.slice(mockImageMarquee.length / 2, mockImageMarquee.length)}
            size="lg"
          />
        </Stack>
      </Block>

      <Block>
        <Container>
          <LandingHeader
            anchor="process"
            overline="What to expect"
            title="Our Product Design Process"
            subtitle="We're a digital product UX agency in Singapore."
            mb={8}
          />

          <ActionDeliverableTimeline items={mockTimelineItems} />
        </Container>
      </Block>

      <Block reveal bgcolor="background.default" textAlign="center">
        <Container maxWidth="sm">
          <LandingHeader textAlign="center" overline="What to expect" title="Who is it for?" mb={4} />
          <Typography>
            We work with companies at launch, product-market fit and growth stages. Our cross-functional team of UX, UI,
            Product and Growth experts acts as an extension of your team, bringing in-depth design and product expertise
            to help you discover and solve complex product challenges, ultimately enabling you to ship the best version
            of your product, as soon as possible.
          </Typography>
        </Container>
      </Block>

      <ReviewBlock />

      <PricingCalloutBlock />
    </Box>
  )
}

export default Product
