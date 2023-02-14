import { Story, Meta } from '@storybook/react'
import { Typography } from '../Typography/Typography'
import { Card, CardProps } from './Card'

export default {
  component: Card,
  title: 'Card',
  args: {
    name: 'Yuma Kitamura',
    avatar: <img width={60} height={60} alt="" src="https://i.imgur.com/X0CcoU9.jpg" />,
    qrcode: <img width={60} height={60} alt="" src="https://i.imgur.com/IyJU8VC.png" />,
    options: {
      star: 'Web Developers, HR Adviser',
      phone: 'XXX-YYYY-ZZZZ', // (仮)
      email: 'xyz-test@gmail.com', // (仮)
      shares: [
        ['twitter', '@jiyuujinlab'],
        ['mastodon', 'minidon.one@jiyuujin'],
      ],
      location: '{ Kyoto, Osaka }, Japan',
    },
  },
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />

export const WithTags: Story<CardProps> = (args) => (
  <Card
    {...args}
    subheader={
      <Typography variant="body 3">TypeScript | React | NodeJS | Flutter | AWS</Typography>
    }
  />
)
