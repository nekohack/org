import i18next from 'i18next'
import { communities } from '@org/data'
import { Community } from '@org/shared/types'
import { LinkText } from '@org/shared/ui'

const CommunitySection: FC = () => {
  return (
    <div className="section">
      <h2>{i18next.t('community')}</h2>
      <ul>
        {communities
          .filter((node: Community) => node.enabled === true && node.status === 'active')
          .map((node: Community, index: number) => {
            return (
              <li key={index}>
                <LinkText name={node.text} url={node.url}>
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
