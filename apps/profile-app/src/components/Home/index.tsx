import React, { FC } from 'react'
import Header from '@components/Header'
import { Payment } from '@components/Payment'
import Introduction from '@components/Introduction'
import Work from '@components/Work'
import Product from '@components/Product'
import Timeline from '@components/Timeline'
import Community from '@components/Community'
import Slide from '@components/Slide'
import Portrait from '@components/Portrait'
import { PAYMENT } from '@utils/feature.constants'

const Home: FC = () => {
  return (
    <main>
      <Header />
      {PAYMENT && <Payment />}
      <Introduction />
      <Work />
      <Product />
      <Timeline />
      <Community />
      <Slide />
      <Portrait />
    </main>
  )
}

export default Home
