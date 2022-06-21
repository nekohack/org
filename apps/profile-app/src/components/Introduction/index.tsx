import React, { FC, useMemo } from 'react'
import i18next from 'i18next'

const Introduction: FC = () => {
  const positionList: string[] = useMemo(
    () => 'Front-End Engineer,Web Developer,HR Adviser'.split(','),
    [],
  )

  return (
    <div className="section">
      <h1>{i18next.t('labels.basic_info')}</h1>
      <p>{i18next.t('basic_biography')}</p>
      <h2>{i18next.t('labels.position')}</h2>
      <ul>
        {positionList?.map((position: string, index: number) => {
          return <li key={index}>{position}</li>
        })}
      </ul>
    </div>
  )
}

export default Introduction
