import HeaderSection from '@components/Header'
import PaymentProvider from '@components/Payment'
import IntroductionSection from '@components/Introduction'
import WorkSection from '@components/Work'
import MediaSection from '@components/Media'
import ProductSection from '@components/Product'
import JobSection from '@components/Job'
import TimelineSection from '@components/Timeline'
import CommunitySection from '@components/Community'
import PortraitSection from '@components/Portrait'
import { JOB, MEDIA, PAYMENT_APP, PRODUCT, TIMELINE } from '@utils/feature.constants'

interface HomeProps {
  medias: any
}

const Home = ({ medias }: HomeProps) => {
  return (
    <main>
      <HeaderSection />
      {PAYMENT_APP && <PaymentProvider />}
      <IntroductionSection />
      <WorkSection />
      {MEDIA && <MediaSection medias={medias} />}
      {PRODUCT && <ProductSection />}
      {JOB && <JobSection />}
      {TIMELINE && <TimelineSection />}
      <CommunitySection />
      <PortraitSection />
    </main>
  )
}

export default Home
