import { Fragment } from 'react'
import { t } from 'i18next'
import { degrees } from '@org/shared/data'
import { List, Typography } from '@org/shared/ui'

const IntroductionSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('labels.basic_info')}</Typography>
      <Typography variant="body 1">{t('basic_biography')}</Typography>
      <List title={t('labels.position')}>
        <Fragment>
          {degrees.map((d, i) => (
            <List.Item key={i} label={<Typography variant="subtitle 3">{d.name}</Typography>}>
              <Typography variant="body 3">{d.year}</Typography>
            </List.Item>
          ))}
        </Fragment>
      </List>
    </div>
  )
}

export default IntroductionSection
