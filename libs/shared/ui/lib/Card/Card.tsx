import { ReactNode } from 'react'
import { Icon } from '../Icon/Icon'
import { Typography } from '../Typography/Typography'
import * as styles from './Card.styles'
import { css } from '@emotion/react'

export interface CardProps {
  name: string
  avatar: ReactNode
  qrcode: ReactNode
  subheader?: ReactNode
  options: {
    star?: string
    phone?: string
    email?: string
    urls?: string[]
    shares?: string[][]
    location?: string
  }
}

export function Card({
  name,
  avatar,
  qrcode,
  subheader,
  options,
  children,
}: React.PropsWithChildren<CardProps>) {
  const { star, phone, email, urls, shares, location } = options

  return (
    <div css={styles.root}>
      <div css={styles.header} className="bg-gray-700">
        <div css={styles.avatar}>{avatar}</div>
        <div css={styles.name}>
          <Typography variant="subtitle 2">{name}</Typography>
        </div>
        {subheader && <div css={styles.subheader}>{subheader}</div>}
      </div>
      <div css={styles.content}>
        <div css={styles.qrcode}>{qrcode}</div>
        <ul css={styles.contentList}>
          {star && (
            <li>
              <Icon name="star" />
              <Typography variant="body 3">{star}</Typography>
            </li>
          )}
          {phone && (
            <li>
              <Icon name="phone" />
              <Typography variant="body 3">{phone}</Typography>
            </li>
          )}
          {email && (
            <li>
              <Icon name="email" />
              <Typography variant="body 3">{email}</Typography>
            </li>
          )}
          {urls && urls.length > 0 && (
            <li
              css={css`
                display: flex;
                align-items: flex-start !important;
              `}
            >
              <Icon name="map" />
              <span
                css={css`
                  display: grid;
                  gap: 4px;
                `}
              >
                {urls.map((url) => (
                  <a href={url} target="_blank">{url}</a>
                ))}
              </span>
            </li>
          )}
          {shares && shares.length > 0 && (
            <li>
              <Icon name="share" />
              {shares.map(([type, text]) => (
                <a href={type === 'twitter' ? `https://x.com/${text}` : type === 'bluesky' ? `https://bsky.app/${text}.bsky.social` : text} target="_blank">
                  {type === 'twitter' ? `@${text}` : type === 'bluesky' ? `@${text}.bsky.social` : text}
                </a>
              ))}
            </li>
          )}
          {location && (
            <li>
              <Icon name="map" />
              <Typography variant="body 3">{location}</Typography>
            </li>
          )}
          <li>{children}</li>
        </ul>
      </div>
    </div>
  )
}
