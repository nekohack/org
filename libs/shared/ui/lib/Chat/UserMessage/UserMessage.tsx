import { Typography } from '../../Typography/Typography'
import * as styles from './UserMessage.styles'

export interface ChatUserMessageProps {
  who: 'me' | 'other'
}

export function UserMessage(props: React.PropsWithChildren<ChatUserMessageProps>) {
  const { children, who } = props

  return (
    <div css={[styles.root, styles.side[who]]}>
      <div css={[styles.wrapper, styles.position[who]]}>
        <Typography variant="body 3" css={styles.text}>
          {children}
        </Typography>
      </div>
    </div>
  )
}
