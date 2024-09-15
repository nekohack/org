import { Fragment, MouseEvent } from 'react'
import { css } from '@emotion/react'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import * as stripeJs from '@stripe/stripe-js'
import { CssResetButton } from '@org/shared/ui'

const PaymentSection = () => {
  const stripe = useStripe()
  const elements = useElements()

  async function onCheckout(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!stripe && !elements) return

    const res = await fetch(process.env.NEXT_PUBLIC_LIVE_LAMBDA_ENDPOINT, {
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
      <form onSubmit={onCheckout}>
        <div
          css={css`
            display: grid;
            gap: 20px;
          `}
        >
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
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <CssResetButton
              type="submit"
              css={css`
                display: block;
                width: 280px;
                height: 37px;
                margin-bottom: 0.8rem;
                font-weight: 600;
                color: #fff;
                cursor: pointer;
                background-color: #6772e5;
                border: none;
                border-radius: 2px;
              `}
              disabled={!stripe}
            >
              Contribute
            </CssResetButton>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

const PaymentProvider = () => {
  const stripe = stripeJs.loadStripe(process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLIC_KEY)

  return (
    <Elements stripe={stripe}>
      <PaymentSection />
    </Elements>
  )
}

export default PaymentProvider
