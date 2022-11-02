import React from 'react'

export interface LinkTextProps {
  name: string
  custom?: string
  url: string
}

export const LinkText = (props: React.PropsWithChildren<LinkTextProps>) => {
  const { name, custom, url, children } = props
  return (
    <a
      href={url}
      aria-label={name}
      aria-pressed="true"
      className={custom}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
