import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CheckoutForm } from './form-card'
import * as SC from './index.module.scss'

export const PaymentSection: FC = () => {
  const isTest = false

  const stripeApiKey = isTest
    ? process.env.GATSBY_TEST_STRIPE_PUBLIC_KEY
    : process.env.GATSBY_LIVE_STRIPE_PUBLIC_KEY
  const stripePromise = loadStripe(stripeApiKey)

  return (
    <div style={{ padding: '4px 0' }}>
      <Elements stripe={stripePromise}>
        <div className={`wrapper ${SC.wrapperPayment}`}>
          <CheckoutForm isTest={isTest} />
        </div>
      </Elements>
    </div>
  )
}
