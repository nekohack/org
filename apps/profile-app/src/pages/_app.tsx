import * as React from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import i18next from 'i18next'
import '../../i18n.init'
import 'zenscroll/zenscroll-min'
import 'css/globals.scss'
import 'css/nprogress.css'
import 'css/fonts.scss'
import { useScrollTop } from 'src/hooks/useScrollTop'
import { useGoogleAdsense } from 'src/hooks/useGoogleAdsense'

function App({ Component, pageProps }: AppProps<{ language: string }>) {
  i18next.changeLanguage(pageProps.language)
  useScrollTop()
  useGoogleAdsense()

  React.useEffect(() => {
    function handleRouteStart() {
      NProgress.start()
    }
    function handleRouteDone() {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
