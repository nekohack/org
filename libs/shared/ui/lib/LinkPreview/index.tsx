import styles from './link-preview.module.scss'

export interface LinkPreviewProps {
  title: string
  description?: string
  url: string
  image: string | undefined
}

export const LinkPreview: FC<LinkPreviewProps> = ({ title, description, url, image }) => {
  return (
    <div className={styles.linkPreview}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.linkPreviewTitle}>{title}</div>
        <div className={styles.linkPreviewDescription}>{description}</div>
        <div className={styles.linkPreviewUrl}>{url}</div>
      </a>
      <img className={styles.linkPreviewImage} alt="" src={`/og/${image}.jpg`} />
    </div>
  )
}
