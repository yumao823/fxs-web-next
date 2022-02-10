import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TagManager, { DataLayerArgs } from 'react-gtm-module'

export const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

// https://stackoverflow.com/questions/60729564/next-js-react-gtm-module-referenceerror-document-is-not-defined
if (process.browser) {
  TagManager.initialize({
    gtmId: GOOGLE_TAG_MANAGER_ID,
  })
}

export const setPageView = (url: string) => {
  if (process.env.NODE_ENV !== 'production') return

  TagManager.dataLayer({
    dataLayer: { event: 'pageview', page: url },
  })
}

/**
 * GoogleTagManager initializer with pageview setting for SPA via `react-gtm-module`
 * @link https://www.npmjs.com/package/react-gtm-module
 * @constructor
 */
export const GoogleTagManager = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => setPageView(url)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}

/**
 * setGoogleTag
 * @link List of GA4 Recommended Events: https://support.google.com/analytics/answer/9267735
 * @param {object} dataLayerObject
 * @example
 * setGoogleTag({ event: 'generate_lead', currency: 'SGD', value: 1 })
 */
export const setGoogleTag = (dataLayerObject: DataLayerArgs['dataLayer']) => {
  if (process.env.NODE_ENV !== 'production') return

  return TagManager.dataLayer({ dataLayer: dataLayerObject })
}
