import React from 'react'
import * as styles from './NewMessageBar.styles'

export type ChatNewMessageBarProps = React.HTMLProps<HTMLButtonElement>

export function NewMessageBar(props: React.PropsWithChildren<ChatNewMessageBarProps>) {
  const { children, onClick } = props

  return (
    <button css={styles.root} onClick={onClick}>
      {children}
    </button>
  )
}
