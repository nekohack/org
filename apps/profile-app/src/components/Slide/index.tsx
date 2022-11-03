import i18next from 'i18next'
import dayjs from 'dayjs'
import { Talk } from '@org/shared/types'
import { LinkPreview, LinkText } from '@org/shared/ui'
import { talks } from '@utils/talk.constants'

const Slide: FC = () => {
  const dateFormat = (d: string) => {
    return dayjs(new Date(d)).format('YYYY年MM月DD日')
  }

  return (
    <div className="section">
      <h2>{i18next.t('slide')}</h2>
      <ul>
        {talks
          .filter((node: Talk) => node.enabled === true)
          .map((node: Talk, index: number) => {
            return (
              <li key={index}>
                <p>{dateFormat(node.date)}</p>
                <p style={{ display: 'flex', flexDirection: 'column', verticalAlign: 'middle' }}>
                  {node.host === 'me' && node.place === 'EventIn' ? (
                    <LinkText name="EventIn" url="https://jp.vcube.com/eventdx/eventin">
                      EventIn
                    </LinkText>
                  ) : node.host === 'me' && node.place === 'Zoom' ? (
                    <LinkText name="Zoom" url="https://explore.zoom.us/ja/products/meetings">
                      Zoom
                    </LinkText>
                  ) : node.host === 'me' && node.place === 'Meet' ? (
                    <LinkText
                      name="Meet"
                      url="https://workspace.google.co.jp/intl/ja/products/meet"
                    >
                      Meet
                    </LinkText>
                  ) : (
                    node.host
                  )}
                  {node.youtubeUrl && (
                    <LinkText name={i18next.t('labels.youtube_live')} url={node.youtubeUrl}>
                      {i18next.t('labels.youtube_live')}
                    </LinkText>
                  )}
                </p>
                {node.url && (
                  <LinkPreview
                    title={i18next.t(node.text)}
                    url={node.url}
                    image={node.image || ''}
                  />
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Slide
