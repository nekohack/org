import React from 'react'
import { CssResetButton } from './CssResetButton'
import { action } from '@storybook/addon-actions'

export default {
  component: CssResetButton,
  title: 'CssResetButton',
}

export const Default = (args) => (
  <CssResetButton {...args} onClick={action('clicked')}>
    <div>hoge</div>
  </CssResetButton>
)

export const Disabled = (args) => (
  <CssResetButton {...args} disabled>
    <div>hoge</div>
  </CssResetButton>
)
