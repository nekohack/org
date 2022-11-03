import i18next from 'i18next'
import { Link } from '@org/shared/types'
import { LinkText } from '@org/shared/ui'
import { links } from '@utils/link.constants'

const Work: FC = () => {
  return (
    <div className="section">
      <h2>{i18next.t('work')}</h2>
      <p>{i18next.t('work_experience')}</p>
      <h3>{i18next.t('labels.related_links')}</h3>
      <ul>
        {links
          .filter((node: Link) => node.enabled === true)
          .map((node: Link, index: number) => {
            return (
              <li key={index}>
                <LinkText name={i18next.t(node.text)} url={node.url}>
                  {i18next.t(node.text)}
                </LinkText>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Work
