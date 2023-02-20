import React, { ReactNode } from 'react'
import { Typography } from '../../Typography/Typography'
import { Chat } from '../'
import { ChatUserMessageProps } from '../UserMessage/UserMessage'
import * as styles from './User.styles'

export interface ChatUserProps extends ChatUserMessageProps {
  avatar?: ReactNode
  name?: string
  date?: string
  time?: string
  label?: ReactNode
}

export function User(props: React.PropsWithChildren<ChatUserProps>) {
  return (
    <React.Fragment>
      {props.who === 'other' ? <Other {...props} /> : <Me {...props} />}
    </React.Fragment>
  )
}

function Other(props: React.PropsWithChildren<ChatUserProps>) {
  const { children, avatar, name, time, who, date, label } = props

  return (
    <div css={[styles.root, time && styles.offset]}>
      {date && <Chat.Date date={date} />}
      <div css={[styles.user, styles.wrapper[who]]}>
        <div css={styles.avater}>{avatar}</div>
        <div css={styles.item}>
          <div css={styles.nameBox}>
            {name && (
              <Typography variant="body 3" css={styles.name}>
                {name}
              </Typography>
            )}

            {label}
          </div>

          <div css={styles.messages}>
            <div>{children}</div>
            <div css={styles.options}>
              <span css={styles.time}>{time && <Chat.Time time={time} />}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Me(props: React.PropsWithChildren<ChatUserProps>) {
  const { children, time, who, date } = props

  return (
    <div css={[styles.root, time && styles.offset]}>
      {date && <Chat.Date date={date} />}
      <div css={[styles.user, styles.wrapper[who]]}>
        <div css={styles.options}>
          <span css={styles.time}>{time && <Chat.Time time={time} />}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
