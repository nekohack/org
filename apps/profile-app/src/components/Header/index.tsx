import React, { FC } from 'react'
import TextLoop from 'react-text-loop'
import * as SC from './index.module.scss'
import { positions } from '@utils/position.constants'

const Header: FC = () => {
  return (
    <div className={SC.title}>
      <TextLoop interval={5000}>
        {positions.map((position: string) => (
          <div key={position}>{position}</div>
        ))}
      </TextLoop>
      <div className={SC.name}>Yuma Kitamura</div>
      <div className={SC.locale}>Osaka, Kyoto in Japan</div>
    </div>
  )
}

export default Header
