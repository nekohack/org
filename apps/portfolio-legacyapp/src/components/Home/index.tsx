import HeaderSection from '@components/Header'
import PaymentProvider from '@components/Payment'
import IntroductionSection from '@components/Introduction'
import WorkSection from '@components/Work'
import ProductSection from '@components/Product'
import TimelineSection from '@components/Timeline'
import CommunitySection from '@components/Community'
import PortraitSection from '@components/Portrait'
import { PAYMENT_APP, PRODUCT, TIMELINE } from '@core/feature.constants'

const Home = () => {
  return (
    <main>
      <HeaderSection />
      {PAYMENT_APP && <PaymentProvider />}
      <IntroductionSection />
      <WorkSection />
      {PRODUCT && <ProductSection />}
      {TIMELINE && <TimelineSection />}
      <CommunitySection />
      <PortraitSection />
    </main>
  )
}

export default Home
