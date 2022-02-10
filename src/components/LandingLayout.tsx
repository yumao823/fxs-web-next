import React from 'react'
import { Box } from '@mui/material'
import { Header } from '@onextech/material-ui-landing/core'
import Footer from './Footer'
import { headerNavItems } from '../app/navConfig'
import Logo from './Logo'

interface LandingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  const { children } = props

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        '& > main': { flex: 1 },
      }}
    >
      <Header logo={Logo} navItems={headerNavItems} sx={{ py: 2 }} />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

export default LandingLayout
