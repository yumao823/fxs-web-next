import React, { FC } from 'react'
import { Button as MaterialButton, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface ButtonProps {
  underline?: boolean
  label: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, underline = false, onClick }) => (
  <MaterialButton
    sx={
      underline
        ? {
            borderBottom: '3px solid',
            borderColor: 'success.light',
            borderRadius: 0,
            width: 'fit-content',
          }
        : { width: 'fit-content' }
    }
    onClick={onClick}
  >
    <Typography variant="h6" sx={{ mr: 1 }}>
      {label}
    </Typography>
    <ArrowForwardIcon sx={!underline && { color: 'success.light' }} />
  </MaterialButton>
)

export default Button
