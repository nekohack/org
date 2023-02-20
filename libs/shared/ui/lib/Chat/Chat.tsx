import React, { forwardRef, useImperativeHandle } from 'react'
import SimpleBar from 'simplebar-react'
import { useChat } from './Chat.hooks'
import * as styles from './Chat.styles'
import 'simplebar-react/dist/simplebar.min.css'

export interface ChatProps {
  type?: 'chat'
  width: number
  height: number
  renderNewMessage: (
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    onClose: () => void,
  ) => React.ReactElement
}

export const Chat = forwardRef((props: React.PropsWithChildren<ChatProps>, ref) => {
  const { type = 'chat', width, height, renderNewMessage } = props
  const children = React.Children.toArray(props.children)
  const { calculating, parentRef, handleScroll, scrollToBottom, virtualizer, isAtBottomRef } =
    useChat(children)

  useImperativeHandle(ref, () => ({
    scrollToBottom,
  }))

  return (
    <div css={styles.root(calculating)}>
      <SimpleBar
        css={[styles.vScrollWrapper(width, height)]}
        scrollableNodeProps={{ ref: parentRef }}
        onScrollCapture={handleScroll}
      >
        <ul css={styles.list(virtualizer.getTotalSize())}>
          {virtualizer.getVirtualItems().map((virtualRow) => {
            return (
              <li
                key={virtualRow.index}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                css={styles.item(virtualRow.start)}
              >
                {children[virtualRow.index]}
              </li>
            )
          })}
        </ul>
      </SimpleBar>
      {!isAtBottomRef.current && (
        <div css={styles.newMessage(width)}>{renderNewMessage(scrollToBottom, () => {})}</div>
      )}
    </div>
  )
})
