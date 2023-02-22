import React from 'react'

export interface LinkTextProps {
  ariaLabel?: string
  url: string
}

export const LinkText = (props: React.PropsWithChildren<LinkTextProps>) => {
  const { ariaLabel, url, children } = props

  return (
    <a href={url} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
