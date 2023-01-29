import { useEffect } from 'react'
import { Router } from 'next/router'

export function useScrollTop() {
  useEffect(() => {
    function onChangeStart() {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0,
      })

      window.scroll({
        behavior: 'smooth',
        top: 0,
        left: 0,
      })
    }

    Router.events.on('routeChangeStart', onChangeStart)

    return () => {
      Router.events.off('routeChangeStart', onChangeStart)
    }
  }, [])
}
