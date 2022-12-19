import { useMemo } from 'react'
import { t } from 'i18next'
import { Typography } from '@org/shared/ui'

const IntroductionSection: FC = () => {
  const positionList: string[] = useMemo(
    () => 'Front-End Engineer,Web Developer,HR Adviser'.split(','),
    [],
  )

  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('labels.basic_info')}</Typography>
      <Typography variant="body 1">{t('basic_biography')}</Typography>
      <Typography variant="subtitle 2">{t('labels.position')}</Typography>
      <ul>
        {positionList?.map((position: string, index: number) => {
          return <li key={index}>{position}</li>
        })}
      </ul>
    </div>
  )
}

export default IntroductionSection
