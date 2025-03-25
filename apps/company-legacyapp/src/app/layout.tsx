'use client'

import { useEffect } from 'react'
import Router from 'next/router'
// import { Metadata } from 'next'
import NProgress from 'nprogress'
import 'zenscroll/zenscroll-min'
import '@unocss/reset/tailwind.css'
import 'css/uno.css'
import 'css/globals.scss'
import 'css/nprogress.scss'
import 'css/fonts.scss'
import { useScrollTop } from '@org/shared/hooks'

// export const metadata: Metadata = {
//   title: 'nekohack.me (Under Construction)',
//   description: 'Hi, I am Yuma Kitamura! A Web Developer.',
// }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useScrollTop()

  useEffect(() => {
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

  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
