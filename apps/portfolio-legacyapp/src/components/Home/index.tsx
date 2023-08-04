import HeaderSection from '@components/Header'
import PaymentProvider from '@components/Payment'
import IntroductionSection from '@components/Introduction'
import WorkSection from '@components/Work'
import ProductSection from '@components/Product'
import JobSection from '@components/Job'
import TimelineSection from '@components/Timeline'
import CommunitySection from '@components/Community'
import PortraitSection from '@components/Portrait'
import { JOB, PAYMENT_APP, PRODUCT, TIMELINE } from '@utils/feature.constants'

const Home = () => {
  return (
    <main>
      <HeaderSection />
      {PAYMENT_APP && <PaymentProvider />}
      <IntroductionSection />
      <WorkSection />
      {PRODUCT && <ProductSection />}
      {JOB && <JobSection />}
      {TIMELINE && <TimelineSection />}
      <CommunitySection />
      <PortraitSection />
    </main>
  )
}

export default Home
