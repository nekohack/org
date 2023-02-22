import { Elements } from '@stripe/react-stripe-js'
import * as stripeJs from '@stripe/stripe-js'

export interface ProviderProps {
  stripe: stripeJs.Stripe | Promise<stripeJs.Stripe | null> | null
}

export function Provider({ stripe, children }: React.PropsWithChildren<ProviderProps>) {
  return <Elements stripe={stripe}>{children}</Elements>
}
