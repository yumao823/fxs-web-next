import React from 'react'
import { Box, Tooltip, TooltipProps } from '@mui/material'
import get from 'lodash/get'

const MUIPaletteColor = (props) => {
  const { color } = props

  const defaultBoxProps = {
    width: (theme) => theme.spacing(5),
    height: (theme) => theme.spacing(5),
    border: (theme) => `1px solid ${theme.palette.divider}`,
  }

  const defaultTooltipProps: Partial<TooltipProps> = { arrow: true, placement: 'top' }

  const renderColorBox = (color) => {
    return (
      <Tooltip {...defaultTooltipProps} title={color}>
        <Box sx={{ ...defaultBoxProps, bgcolor: (theme) => get(theme.palette, color) }} />
      </Tooltip>
    )
  }

  const isSingleColor = typeof color === 'string'

  if (isSingleColor) return renderColorBox(color)

  return <>{color.map((col) => renderColorBox(col))}</>
}

interface PaletteGuideProps {}

const PaletteGuide: React.FC<PaletteGuideProps> = (props) => {
  return (
    <>
      <MUIPaletteColor color={['primary.light', 'primary.main', 'primary.dark']} />
      <MUIPaletteColor color={['secondary.light', 'secondary.main', 'secondary.dark']} />
      <MUIPaletteColor color={['text.primary', 'text.secondary', 'text.disabled']} />
      <MUIPaletteColor color={['divider']} />
      <MUIPaletteColor color={['background.default', 'background.paper']} />
    </>
  )
}

export default PaletteGuide
