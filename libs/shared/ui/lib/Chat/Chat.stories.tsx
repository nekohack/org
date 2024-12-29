import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { css } from '@emotion/react'
import { ChatInput } from '../ChatInput/ChatInput'
import { Chat } from './'

export default {
  component: Chat,
  title: 'Chat',
  subcomponents: {
    User: Chat.User,
    UserMessage: Chat.UserMessage,
  },
}

export const Default = (args) => {
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
      <Chat {...args} width={392} height={512}>
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
            <Chat.UserMessage who={i % 2 === 0 ? 'me' : 'other'}>
              {'text message'.repeat((i % 10) + 1)}
            </Chat.UserMessage>
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
