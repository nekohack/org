import React, { FC } from 'react'
import { applyPolyfills, defineCustomElements } from '@nekohack/footer-ui/loader'

export const CookieFooterWrapper: FC = () => {
  applyPolyfills().then(() => {
    defineCustomElements()
  })

  return (
    <cookie-footer
      name="yuukit-me-profile-site"
      title="あなたがこのサイト上でベストな体験ができるようCookieを使用しています"
      url="https://nekohack-privacy-policy.netlify.app"
    />
  )
}
