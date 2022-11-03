import i18next from 'i18next'
import { CommunityItem } from '@org/shared/types'
import { LinkText } from '@org/shared/ui'
import { communities } from '@utils/community.constants'

const Community: FC = () => {
  return (
    <div className="section">
      <h1>{i18next.t('community')}</h1>
      <ul>
        {communities
          .filter((node: CommunityItem) => node.enabled === true && node.status === 'active')
          .map((node: CommunityItem, index: number) => {
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

export default Community
