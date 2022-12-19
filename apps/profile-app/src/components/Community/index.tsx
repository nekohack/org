import { t } from 'i18next'
import { communities } from '@org/data'
import { Community } from '@org/shared/types'
import { LinkText, Typography } from '@org/shared/ui'

const CommunitySection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('community')}</Typography>
      <ul>
        {communities
          .filter((node: Community) => node.enabled === true && node.status === 'active')
          .map((node: Community, index: number) => {
            return (
              <li key={index}>
                <LinkText ariaLabel={node.text} url={node.url}>
                  {node.text}
                </LinkText>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CommunitySection
