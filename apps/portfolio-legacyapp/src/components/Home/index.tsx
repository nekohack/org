import HeaderSection from '@components/Header'
import PaymentProvider from '@components/Payment'
import IntroductionSection from '@components/Introduction'
import WorkSection from '@components/Work'
import ProductSection from '@components/Product'
import JobSection from '@components/Job'
import TimelineSection from '@components/Timeline'
import CommunitySection from '@components/Community'
import SlideSection from '@components/Slide'
import PortraitSection from '@components/Portrait'
import { JOB, PAYMENT_APP, PRODUCT, SLIDE, TIMELINE } from '@utils/feature.constants'

const Home: FC = () => {
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
      {SLIDE && <SlideSection />}
      <PortraitSection />
    </main>
  )
}

export default Home
