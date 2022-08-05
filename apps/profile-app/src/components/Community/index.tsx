import i18next from 'i18next'
import { communities } from '@utils/community.constants'

const Community: FC = () => {
  return (
    <div className="section">
      <h1>{i18next.t('community')}</h1>
      <ul>
        {communities
          .filter((node: any) => node.enabled === true && node.status === 'active')
          .map((node: any, index: number) => {
            return (
              <li key={index}>
                <a
                  href={node.url}
                  role="button"
                  aria-pressed="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {node.text}
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Community
