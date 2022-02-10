import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'

interface ButtonGuideProps {}

const MUIButtonVariants = (props) => {
  const { color } = props

  const ButtonProps = { color }

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small" {...ButtonProps}>
          Small
        </Button>
        <Button size="medium" {...ButtonProps}>
          Medium
        </Button>
        <Button size="large" {...ButtonProps}>
          Large
        </Button>
        <Button disabled {...ButtonProps}>
          Disabled
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" {...ButtonProps}>
          Small
        </Button>
        <Button variant="outlined" size="medium" {...ButtonProps}>
          Medium
        </Button>
        <Button variant="outlined" size="large" {...ButtonProps}>
          Large
        </Button>
        <Button variant="outlined" disabled {...ButtonProps}>
          Disabled
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" {...ButtonProps}>
          Small
        </Button>
        <Button variant="contained" size="medium" {...ButtonProps}>
          Medium
        </Button>
        <Button variant="contained" size="large" {...ButtonProps}>
          Large
        </Button>
        <Button variant="contained" disabled {...ButtonProps}>
          Disabled
        </Button>
      </div>
      <div>
        <IconButton aria-label="delete" size="small" {...ButtonProps}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" {...ButtonProps} size="large">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" {...ButtonProps} size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" {...ButtonProps} size="large">
          <DeleteIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="delete" disabled {...ButtonProps} size="large">
          <DeleteIcon />
        </IconButton>
      </div>
    </Box>
  )
}

const ButtonGuide: React.FC<ButtonGuideProps> = (props) => {
  return (
    <>
      <MUIButtonVariants color="primary" />
      <MUIButtonVariants color="secondary" />
    </>
  )
}

export default ButtonGuide
