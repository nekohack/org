import React, { useState } from 'react'
import i18next from 'i18next'
import { NekoButton } from 'nekohack-ui'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Modal } from '@org/shared/ui'
import * as SC from './index.module.scss'

import { Card } from '../Card'

type CheckoutFormType = {
  isTest: boolean
}

export const PaymentSection: FC = () => {
  const isTest = false

  const stripeApiKey = isTest
    ? process.env.GATSBY_TEST_STRIPE_PUBLIC_KEY
    : process.env.GATSBY_LIVE_STRIPE_PUBLIC_KEY
  const stripePromise = loadStripe(stripeApiKey)

  return (
    <div style={{ padding: '4px 0' }}>
      <Elements stripe={stripePromise}>
        <CheckoutForm isTest={isTest} />
      </Elements>
    </div>
  )
}

export const CheckoutForm: FCWithChildren<CheckoutFormType> = ({ isTest }: CheckoutFormType) => {
  const stripe = useStripe()

  const elements = useElements()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const res = await fetch(process.env.GATSBY_LIVE_LAMBDA_ENDPOINT, {
      method: 'post',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    const jsonData = JSON.parse(data.body)
    const secret = jsonData.charge.client_secret

    const card = elements?.getElement(CardElement)

    const result = await stripe?.confirmCardPayment(secret, {
      payment_method: {
        card: card!,
        billing_details: {
          name: 'username',
        },
      },
    })

    if (result?.error) {
      // console.log(result?.error.message)
    } else {
      if (result?.paymentIntent?.status === 'succeeded') {
        alert('Charged successful!')
      }
    }
  }

  return (
    <div className={`wrapper ${SC.wrapperPayment}`}>
      <NekoButton onClick={handleOpen}>{i18next.t('labels.contribute')}</NekoButton>
      {open && (
        <Modal onClose={handleOpen}>
          <div className={SC.content}>
            <form className={SC.checkoutForm} onSubmit={handleSubmit}>
              <div className={SC.checkoutFormInfo}>
                <Card />
              </div>
              <div
                style={{
                  width: '100%',
                  padding: '12px 0',
                }}
              >
                <CardElement
                  options={{
                    hidePostalCode: true,
                  }}
                />
              </div>
              <button className={SC.checkoutFormButton} disabled={!stripe}>
                {i18next.t('labels.payment')}
              </button>
              <div className={SC.manual}>
                <a
                  href="https://github.com/nekohack/Code-of-Conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {i18next.t('confirm_policy')}
                </a>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  )
}
