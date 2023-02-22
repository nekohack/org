import { Payment as PaymentWrap } from './Payment'
import { Provider } from './Provider/Provider'

export type { PaymentProps } from './Payment'
export type { ProviderProps } from './Provider/Provider'

export const Payment = Object.assign(PaymentWrap, {
  Provider,
})
