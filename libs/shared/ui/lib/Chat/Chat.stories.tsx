import { css } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { ChatInput } from '../ChatInput/ChatInput'
import { Chat, ChatProps } from './'

export default {
  component: Chat,
  title: 'Chat',
  subcomponents: {
    Date: Chat.Date,
    NewMessageBar: Chat.NewMessageBar,
    Time: Chat.Time,
    User: Chat.User,
    UserMessage: Chat.UserMessage,
  },
} as Meta

export const Default: Story<ChatProps> = (args) => {
  const [count, setCount] = useState(0)

  useEffectOnce(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1)
    }, 300)

    return () => clearInterval(id)
  })

  return (
    <div
      css={css`
        background: #efefef;
        width: 402px;
        height: 576px;
      `}
    >
      <Chat
        {...args}
        width={392}
        height={512}
        renderNewMessage={(onClick: React.MouseEventHandler<HTMLButtonElement> | undefined) => (
          <Chat.NewMessageBar onClick={onClick}>新しいメッセージがあります</Chat.NewMessageBar>
        )}
      >
        {Array.from({ length: count }).map((_, i) => (
          <Chat.User
            key={i}
            avatar={
              <img
                width={60}
                height={60}
                css={css`
                  border-radius: 100%;
                `}
                alt=""
                src="https://i.imgur.com/X0CcoU9.jpg"
              />
            }
            time="12:00"
            who={i % 2 === 0 ? 'me' : 'other'}
          >
            <Chat.UserMessage who="me">{'text message'.repeat((i % 10) + 1)}</Chat.UserMessage>
          </Chat.User>
        ))}
      </Chat>
      <div
        css={css`
          padding: 0 4px;
          background: #efefef;
        `}
      >
        <ChatInput placeholder="Shift+Enterで送信、Enterで改行" />
      </div>
    </div>
  )
}
