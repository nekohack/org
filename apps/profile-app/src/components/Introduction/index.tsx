import { useMemo } from 'react'
import i18next from 'i18next'

const IntroductionSection: FC = () => {
  const positionList: string[] = useMemo(
    () => 'Front-End Engineer,Web Developer,HR Adviser'.split(','),
    [],
  )

  return (
    <div className="section">
      <h2>{i18next.t('labels.basic_info')}</h2>
      <p>{i18next.t('basic_biography')}</p>
      <h3>{i18next.t('labels.position')}</h3>
      <ul>
        {positionList?.map((position: string, index: number) => {
          return <li key={index}>{position}</li>
        })}
      </ul>
    </div>
  )
}

export default IntroductionSection
