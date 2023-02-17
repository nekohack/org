import { match } from 'ts-pattern'
import * as styles from './Avatar.styles'

export interface AvatarProps {
  alt: string
  src: string
  size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
}

export function Avatar(props: AvatarProps) {
  const { size, ...rest } = props

  const applySize = match(size)
    .with('x-small', () => ({ width: 24, height: 24 }))
    .with('small', () => ({ width: 32, height: 32 }))
    .with('medium', () => ({ width: 40, height: 40 }))
    .with('large', () => ({ width: 56, height: 56 }))
    .with('x-large', () => ({ width: 60, height: 60 }))
    .exhaustive()

  return <img {...rest} {...applySize} css={styles.root} />
}
