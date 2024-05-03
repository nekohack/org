import React from 'react'
import * as styles from './Link.styles'

interface LinkProps {
    href: string
}

export function Link({ href, children }: React.PropsWithChildren<LinkProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={styles.link}
    >
      {children}
    </a>
  )
}