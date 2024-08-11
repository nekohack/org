import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import Stripe from 'stripe'

type Bindings ={
  LIVE_STRIPE_PUBLIC_KEY: string
  LIVE_STRIPE_SECRET_KEY: string
}

const SHOW_TEMPLATE = false

const app = new Hono<{ Bindings: Bindings }>()

app.post('/checkout', async (c) => {
  const stripe = new Stripe(c.env.LIVE_STRIPE_SECRET_KEY)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 198000,
    currency: 'jpy',
  })

  if (SHOW_TEMPLATE) {
    return c.html(`
      <html>
        <head>
          <title>Elements</title>
          <style>
            html,
            body {
              height: 100%;
            }
            main {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              padding-top: 40px;
              padding-bottom: 40px;
              background-color: #fefefe;
            }
            form > * {
              margin-bottom: 20px;
            }
          </style>
          <script src="https://js.stripe.com/v3/"></script>
        </head>
        <body>
          <main>
            <h2>Order</h2>
            <form id="order-form">
              <div id="payment-element"></div>
              <button type="submit">Order</button>
            </form>
          </main>
          <script>
            const stripe = Stripe("${c.env.LIVE_STRIPE_PUBLIC_KEY}");
            const elements = stripe.elements({
              clientSecret: "${paymentIntent.client_secret}",
              appearance: {
                theme: "stripe"
              }
            });
            const paymentElement = elements.create("payment");
            paymentElement.mount("#payment-element");
            const form = document.getElementById("order-form");
            form.addEventListener("submit", async e => {
              e.preventDefault();
              const result = await stripe.confirmPayment({
                elements,
                redirect: "if_required",
              });
              console.log(result);
              alert("Order Complete");
            });
          </script>
        </body>
      </html>    
    `)
  }

  return c.json({
    message: 'Charged successful',
    paymentIntent,
  })
})

export const handler = handle(app)
