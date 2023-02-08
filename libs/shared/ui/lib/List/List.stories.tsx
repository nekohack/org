import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import { Item as ListItem } from './Item/Item'
import { List, ListProps } from '.'
import { CssResetButton } from '../CssResetButton/CssResetButton'
import React from 'react'

export default {
  component: List,
  title: 'List',
  subcomponents: { ListItem },
  args: {
    title: 'コミュニティ',
  },
} as Meta

export const Default: Story<ListProps> = (args) => (
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
