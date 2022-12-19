import React from 'react'

export interface LinkTextProps {
  ariaLabel?: string
  customClass?: string
  url: string
}

export const LinkText = (props: React.PropsWithChildren<LinkTextProps>) => {
  const { ariaLabel, customClass, url, children } = props

  return (
    <a
      href={url}
      aria-label={ariaLabel}
      aria-pressed="true"
      className={customClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
