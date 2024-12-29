import React from 'react'
import { Typography } from '../Typography/Typography'
import { Card } from './Card'

export default {
  component: Card,
  title: 'Card',
  args: {
    name: 'Yuma Kitamura',
    avatar: <img width={60} height={60} alt="" src="https://i.imgur.com/X0CcoU9.jpg" />,
    qrcode: <img width={60} height={60} alt="" src="https://i.imgur.com/IyJU8VC.png" />,
    options: {
      star: 'Web Developer, HR Adviser',
      phone: 'XXX-YYYY-ZZZZ', // (仮)
      email: 'xyz-test@gmail.com', // (仮)
      shares: [
        ['twitter', '@jiyuujinlab'],
        ['mastodon', 'minidon.one@jiyuujin'],
      ],
      location: '{ Kyoto, Osaka }, Japan',
    },
  },
}

export const Default = (args) => <Card {...args} />

export const WithTags = (args) => (
  <Card
    {...args}
    subheader={
      <Typography variant="body 3">TypeScript | React | NodeJS | Flutter | AWS</Typography>
    }
  >
    <Typography variant="body 3">
      On the net, they live under the name of JIYUUJIN. Birthday is November 04, 1988. Born in
      Toyonaka City, Osaka Prefecture. Gender is male. Currently, we are active mainly in the Kansai
      area (Kyoto and Osaka).
    </Typography>
  </Card>
)
