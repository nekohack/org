import React from 'react'
import { action } from '@storybook/addon-actions'
import { Modal } from './Modal'

export default {
  component: Modal,
  title: 'Modal',
  args: {
    onClose: action('closed'),
  },
}

export const Default = (args) => <Modal {...args}>Test</Modal>
