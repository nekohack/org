import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Modal, ModalProps } from './Modal'

export default {
  component: Modal,
  title: 'Modal',
  args: {
    onClose: action('closed'),
  },
} as Meta

export const Default: Story<ModalProps> = (args) => <Modal {...args}>Test</Modal>
