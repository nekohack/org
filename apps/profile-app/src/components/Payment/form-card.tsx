import { Fragment, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { NekoButton } from 'nekohack-ui'
import { t } from 'i18next'
import * as SC from './form-card.module.scss'
import { Modal } from '@org/shared/ui'
import { Card } from '@components/Payment/card'

interface CheckoutFormProps {
  isTest?: boolean
}

export const CheckoutForm: FCWithChildren<CheckoutFormProps> = ({ isTest }: CheckoutFormProps) => {
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

    const card = elements.getElement(CardElement)

    const result = await stripe?.confirmCardPayment(secret, {
      payment_method: {
        card: card,
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
    <Fragment>
      <NekoButton onClick={handleOpen}>{t('labels.contribute')}</NekoButton>
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
                {t('labels.payment')}
              </button>
              <div className={SC.manual}>
                <a
                  href="https://github.com/nekohack/Code-of-Conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('confirm_policy')}
                </a>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}
