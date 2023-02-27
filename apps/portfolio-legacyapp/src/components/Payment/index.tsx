import { Fragment, MouseEvent, useState } from 'react'
import { css } from '@emotion/react'
import { CardElement, useElements } from '@stripe/react-stripe-js'
import * as stripeJs from '@stripe/stripe-js'
import { CssResetButton, Modal, Payment } from '@org/shared/ui'
import { PAYMENT_API } from '@utils/feature.constants'

interface PaymentSectionProps {
  stripe: stripeJs.Stripe | Promise<stripeJs.Stripe | null> | null
}

const PaymentSection = ({ stripe }: PaymentSectionProps) => {
  const stripeEndpoint = PAYMENT_API
    ? process.env.NEXT_LIVE_LAMBDA_ENDPOINT
    : process.env.NEXT_TEST_LAMBDA_ENDPOINT

  const elements = useElements()
  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  async function onCheckout(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!stripe && !elements) return

    const res = await fetch(stripeEndpoint, {
      method: 'post',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    const jsonData = JSON.parse(data.body)
    const secret = jsonData.charge.client_secret

    const card = elements.getElement(CardElement)

    // @ts-expect-error
    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: card,
        billing_details: {
          name: 'username',
        },
      },
    })

    if (!result?.error) {
      if (result?.paymentIntent?.status === 'succeeded') {
        alert('Charged successful!')
      }
      return
    }

    console.log(result?.error.message)
  }

  return (
    <Fragment>
      <CssResetButton
        css={css`
          display: block;
          width: 100%;
          height: 37px;
          margin-bottom: 0.8rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          background-color: #6772e5;
          border: none;
          border-radius: 2px;
        `}
        onClick={handle}
      >
        Contribute
      </CssResetButton>
      {open && (
        <Modal onClose={handle}>
          <Payment onCheckout={onCheckout}>
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '18px',
                    color: '#424770',
                    letterSpacing: '0.025em',
                    fontFamily: 'Source Code Pro, monospace',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </Payment>
        </Modal>
      )}
    </Fragment>
  )
}

const PaymentProvider = () => {
  const stripe = stripeJs.loadStripe(
    PAYMENT_API ? process.env.NEXT_LIVE_STRIPE_PUBLIC_KEY : process.env.NEXT_TEST_STRIPE_PUBLIC_KEY,
  )

  return (
    <Payment.Provider stripe={stripe}>
      <PaymentSection stripe={stripe} />
    </Payment.Provider>
  )
}

export default PaymentProvider
