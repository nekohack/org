import { MouseEvent } from 'react'
import * as styles from './Payment.styles'

export interface PaymentProps {
  onCheckout: (event: MouseEvent<HTMLFormElement>) => void
}

export function Payment({ onCheckout, children }: React.PropsWithChildren<PaymentProps>) {
  return (
    <div css={styles.root}>
      <form onSubmit={onCheckout}>
        <div css={styles.checkoutWrapper}>
          {children}
          <div css={styles.checkout}>
            <div css={styles.checkoutManual}>
              <a
                href="https://github.com/nekohack/Code-of-Conduct"
                target="_blank"
                rel="noopener noreferrer"
              >
                Confirm Policy
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
