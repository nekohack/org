import ReactLinkify from 'react-linkify'
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
          <LinkifyTargetBlank>{children}</LinkifyTargetBlank>
        </Typography>
      </div>
    </div>
  )
}

function LinkifyTargetBlank({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ReactLinkify
      componentDecorator={(href: string, text: string, key: number) =>
        text.startsWith('http') ? (
          <a href={href} key={key} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          text
        )
      }
    >
      {children}
    </ReactLinkify>
  )
}
