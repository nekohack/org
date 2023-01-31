import HeaderSection from '@components/Header'
import { PaymentSection } from '@components/Payment'
import IntroductionSection from '@components/Introduction'
import WorkSection from '@components/Work'
import ProductSection from '@components/Product'
import TimelineSection from '@components/Timeline'
import CommunitySection from '@components/Community'
import SlideSection from '@components/Slide'
import PortraitSection from '@components/Portrait'
import { PAYMENT, SLIDE, TIMELINE } from '@utils/feature.constants'

const Home: FC = () => {
  return (
    <main>
      <HeaderSection />
      {PAYMENT && <PaymentSection />}
      <IntroductionSection />
      <WorkSection />
      <ProductSection />
      {TIMELINE && <TimelineSection />}
      <CommunitySection />
      {SLIDE && <SlideSection />}
      <PortraitSection />
    </main>
  )
}

export default Home
