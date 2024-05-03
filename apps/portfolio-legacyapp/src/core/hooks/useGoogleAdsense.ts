import { useCallback, useEffect } from 'react'

export function useGoogleAdsense() {
  const loadAd = useCallback(() => {
    // @ts-ignore
    // eslint-disable-next-line
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const component = window.document.getElementById('__next').querySelector('.adsbygoogle')
      if (component) {
        component.addEventListener('load', loadAd)
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        const component = window.document.getElementById('__next').querySelector('.adsbygoogle')
        if (component) {
          component.removeEventListener('load', loadAd)
        }
      }
    }
  }, [loadAd])
}
