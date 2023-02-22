import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import { CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Payment, PaymentProps } from '.'

export default {
  component: Payment,
  title: 'Payment',
  subcomponents: {
    Payment: Payment,
    Provider: Payment.Provider,
  },
} as Meta

export const Default: Story<PaymentProps> = (args) => {
  const stripePromise = loadStripe(process.env.GATSBY_TEST_STRIPE_PUBLIC_KEY || '')

  return (
    <Payment.Provider stripe={stripePromise}>
      <Payment {...args} onCheckout={action('checkout')}>
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
    </Payment.Provider>
  )
}
