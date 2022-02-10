import { useEffect } from 'react'

const MuiJssReset = () => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement!.removeChild(jssStyles)
  }, [])

  return null
}

export default MuiJssReset
