import Stripe from 'stripe'
import * as dotenv from 'dotenv'

dotenv.config()

exports.handler = async (event, context, callback) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*',
  }

  const secretKey = process.env.NODE_ENV === 'test'
    ? process.env.NEXT_TEST_STRIPE_SECRET_KEY
    : process.env.NEXT_LIVE_STRIPE_SECRET_KEY
  const price = event.queryStringParameters.price

  const stripe = new Stripe(secretKey)
  const customer = await stripe.paymentIntents.create({
    amount: price,
    currency: 'jpy',
  })

  if (!customer) {
    callback(null, {
      headers,
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error occurred while charging the customer.',
      }),
    })
    return
  }

  console.log(customer.id)

  callback(null, {
    headers,
    statusCode: 200,
    body: JSON.stringify({
      message: 'Payment success',
      res: customer.id,
    }),
  })
}
