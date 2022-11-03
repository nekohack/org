import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from './index'

export default {
  component: Modal,
  title: 'Modal',
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args}>Test</Modal>

export const Primary = Template.bind({})
Primary.args = {
  onClose: () => {},
}
