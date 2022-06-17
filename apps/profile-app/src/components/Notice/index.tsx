import React, { FC } from 'react'
import * as SC from './index.module.scss'

export const Index: FC = () => {
  return (
    <div className={SC.noticeBar}>
      <a href="https://twitter.com/jiyuujinlab" target="_blank" rel="noopener noreferrer">
        jiyuujin
      </a>
      {'is united with the people of Ukraine and the international community.'}
    </div>
  )
}
