import { action } from '@storybook/addon-actions'
import { Item as ListItem } from './Item/Item'
import { List } from '.'
import { CssResetButton } from '../CssResetButton/CssResetButton'
import React from 'react'

export default {
  component: List,
  title: 'List',
  subcomponents: { ListItem },
  args: {
    title: 'コミュニティ',
  },
}

export const Default = (args) => (
  <div style={{ width: '800px' }}>
    <List {...args}>
      <List.Item label={<div>テスト1</div>}>
        <CssResetButton onClick={action('clicked')}>Tap</CssResetButton>
      </List.Item>
      <List.Item label={<div>テスト2</div>}>
        <CssResetButton onClick={action('clicked')}>Tap</CssResetButton>
      </List.Item>
    </List>
  </div>
)
