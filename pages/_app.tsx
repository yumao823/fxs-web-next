import React from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { ThemeProvider } from '@mui/material/styles'
import { ToastProvider, TopProgressBar } from '@onextech/material-ui-landing/core'
import { PAGE_MOTIONS } from '../src/lib/FramerMotion'
import { GoogleTagManager } from '../src/lib/GoogleTagManager'
import { appConfig } from '../src/app/config'
import { createEmotionCache } from '../src/lib/Mui'
import { theme } from '../src/theme/theme'

import 'nprogress/nprogress.css'

const isSSR = typeof window === 'undefined'

// Emotion for material-ui
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props

  // @link: https://github.com/zeit/next.js/tree/master/examples/with-dynamic-app-layout
  const Layout = Component['Layout'] || React.Fragment
  const children = <Component {...pageProps} />

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <GoogleTagManager />
          <TopProgressBar />

          <ToastProvider>
            <Layout>
              <DefaultSeo {...appConfig.meta} />

              <AnimatePresence exitBeforeEnter>
                <motion.div key={router.route} {...(isSSR ? { style: { opacity: 1 } } : PAGE_MOTIONS.fade)}>
                  {children}
                </motion.div>
              </AnimatePresence>
            </Layout>
          </ToastProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
