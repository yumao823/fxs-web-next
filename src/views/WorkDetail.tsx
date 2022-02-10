import { NextSeo } from 'next-seo'
import { Box, CircularProgress, Container, Grid, Theme } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import Image, { ImageProps } from 'next/image'
import makeStyles from '@mui/styles/makeStyles'
import { Block, GalleryGrid, LandingHeader } from '@onextech/material-ui-landing/core'
import { setSeoTitle } from '../app/seo'
import { CaseStudyItem, mockCaseStudies } from './__mocks__/OXDMocks.mocks'

const useStyles = makeStyles((theme: Theme) => ({
  sticky: {
    position: 'sticky',
    top: 0,
    paddingTop: `calc(50px + ${theme.spacing(4)})`,
  },
}))

interface CaseStudyHeroBlockProps {
  item: CaseStudyItem['hero']
}

const CaseStudyHeroBlock: React.FC<CaseStudyHeroBlockProps> = (props) => {
  const { item } = props
  const { image, ...rest } = item

  return (
    <>
      <Block reveal>
        <Container>
          <LandingHeader size="xl" {...rest} />
        </Container>
      </Block>

      <Block
        bg={{ ...image, placeholder: 'blur', priority: true } as ImageProps}
        sx={{ height: { xs: 400, md: 750 } }}
      />
    </>
  )
}

interface CaseStudyGalleryBlockProps {
  item: CaseStudyItem['gallery']
}

const CaseStudyGalleryBlock: React.FC<CaseStudyGalleryBlockProps> = (props) => {
  const { item } = props
  const { images, ...rest } = item

  const imagesWithBlur = images.map((image) => ({ ...image, placeholder: 'blur' })) as ImageProps[]

  return (
    <Block reveal bgcolor="background.default">
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={12} md={6}>
            <LandingHeader {...rest} />
          </Grid>
        </Grid>

        <GalleryGrid items={imagesWithBlur} sx={{ mt: 2 }} />
      </Container>
    </Block>
  )
}

const TallImageGrid = (props) => {
  const { reverse, overline, title, subtitle, image } = props
  const classes = useStyles(props)

  return (
    <Grid container spacing={8} flexDirection={reverse ? 'row-reverse' : 'row'}>
      <Grid item xs={12} md={5}>
        <LandingHeader className={classes.sticky} overline={overline} title={title} subtitle={subtitle} />
      </Grid>
      <Grid item xs={12} md={7}>
        <Image placeholder="blur" {...image} />
      </Grid>
    </Grid>
  )
}

const LoadingJSX = (
  <Block middle>
    <CircularProgress />
  </Block>
)

const WorkDetail = () => {
  const router = useRouter()
  const {
    query: { slug },
  } = router

  if (!slug) return LoadingJSX

  const caseStudy = mockCaseStudies.find((caseStudy) => caseStudy.slug === slug)
  if (!caseStudy) return LoadingJSX
  const { title, subtitle, hero, talls, gallery } = caseStudy

  return (
    <Box bgcolor="white" pb={10}>
      <NextSeo title={setSeoTitle(title)} description={subtitle} />

      <CaseStudyHeroBlock item={hero} />

      <Block reveal>
        <Container>
          <TallImageGrid {...talls[0]} />
        </Container>
      </Block>

      <CaseStudyGalleryBlock item={gallery} />

      <Block reveal>
        <Container>
          <TallImageGrid {...talls[1]} reverse />
        </Container>
      </Block>
    </Box>
  )
}

export default WorkDetail
