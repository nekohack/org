import React from 'react'
import * as styles from './index.styles'

export interface LinkPreviewProps {
  title: string
  description?: string
  url: string
  image: string | undefined
}

export const LinkPreview = (props: LinkPreviewProps) => {
  const { title, description, url, image } = props
  return (
    <div css={styles.linkPreview}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div css={styles.linkPreviewTitle}>{title}</div>
        <div css={styles.linkPreviewDescription}>{description}</div>
        <div css={styles.linkPreviewUrl}>{url}</div>
      </a>
      <img css={styles.linkPreviewImage} alt="" src={image} />
    </div>
  )
}
