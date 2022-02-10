import React from 'react'
import { Grid } from '@mui/material'
import TypographyGuide from './TypographyGuide'
import ButtonGuide from './ButtonGuide'
import PaletteGuide from './PaletteGuide'

interface StyleGuideProps {}

const StyleGuide: React.FC<StyleGuideProps> = (props) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <TypographyGuide />
        </Grid>
        <Grid item sm={5}>
          <ButtonGuide />
        </Grid>
        <Grid item sm>
          <PaletteGuide />
        </Grid>
      </Grid>
    </>
  )
}

export default StyleGuide
