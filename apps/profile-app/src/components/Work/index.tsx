import { t } from 'i18next'
import { internalDocs } from '@org/shared/data'
import { Link } from '@org/shared/types'
import { LinkText, Typography } from '@org/shared/ui'

const WorkSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('work')}</Typography>
      <Typography variant="body 1">{t('work_experience')}</Typography>
      <Typography variant="subtitle 2">{t('labels.related_links')}</Typography>
      <ul>
        {internalDocs
          .filter((node: Link) => node.enabled === true)
          .map((node: Link, index: number) => {
            return (
              <li key={index}>
                <LinkText ariaLabel={t(node.text)} url={node.url}>
                  {t(node.text)}
                </LinkText>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default WorkSection
