import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { ChatInput } from '../ChatInput/ChatInput'

export default {
  component: ChatInput,
  title: 'ChatInput',
  args: {
    placeholder: 'Shift+Enterで送信、Enterで改行',
    onSend: action('send'),
  },
}

export const Default = (args) => (
  <Fragment>
    <ChatInput {...args}></ChatInput>
    <ChatInput {...args} id="focus"></ChatInput>
    <ChatInput {...args} value="test"></ChatInput>
  </Fragment>
)
Default.parameters = {
  pseudo: {
    focus: ['#focus'],
  },
}
