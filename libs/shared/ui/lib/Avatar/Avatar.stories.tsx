import React from 'react'
import { css } from '@emotion/react'
import { Avatar } from './Avatar'

export default {
  component: Avatar,
  title: 'Avatar',
  args: {
    alt: 'jiyuujin',
    src: 'https://i.imgur.com/X0CcoU9.jpg',
    size: 'medium',
  },
}

export const Default = (args) => <Avatar {...args} />

export const Sizes = (args) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
    `}
  >
    <Avatar {...args} size="x-small" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="large" />
    <Avatar {...args} size="x-large" />
  </div>
)
