import React, { useCallback, useEffect, useRef } from 'react'
import * as styles from './index.styles'

export interface ModalProps {
  onClose: () => void
}

export const Modal = ({ children, onClose }: React.PropsWithChildren<ModalProps>) => {
  const ref = useRef(null)

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.()
      }
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])

  return (
    <div css={styles.mask}>
      <div ref={ref} css={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}
