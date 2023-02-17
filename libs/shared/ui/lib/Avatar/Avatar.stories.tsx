import React from 'react'
import { css } from '@emotion/react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from './Avatar'

export default {
  component: Avatar,
  title: 'Avatar',
  args: {
    alt: 'jiyuujin',
    src: 'https://i.imgur.com/X0CcoU9.jpg',
    size: 'medium',
  },
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Sizes: Story<AvatarProps> = (args) => (
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
