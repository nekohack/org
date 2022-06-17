import React, { FC } from 'react'
import i18next from 'i18next'
import * as SC from './index.module.scss'

export const Index: FC = () => {
  return (
    <footer className={SC.footer}>
      <p className={SC.contact}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {i18next.t('contact')}
        </a>
      </p>
      <p className={SC.copyright}>Created © 2020 jiyuujin LAB. All Rights Reserved.</p>
    </footer>
  )
}
