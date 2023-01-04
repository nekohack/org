import { t } from 'i18next'
import dayjs from 'dayjs'
import { talks } from '@org/shared/data'
import { Talk } from '@org/shared/types'
import { LinkPreview, LinkText, Typography } from '@org/shared/ui'

const SlideSection: FC = () => {
  const dateFormat = (d: string) => {
    return dayjs(new Date(d)).format('YYYY年MM月DD日')
  }

  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('slide')}</Typography>
      <ul>
        {talks
          .filter((node: Talk) => node.enabled === true)
          .map((node: Talk, index: number) => {
            return (
              <li key={index}>
                <Typography variant="body 1">{dateFormat(node.date)}</Typography>
                <div style={{ display: 'flex', flexDirection: 'column', verticalAlign: 'middle' }}>
                  <Typography variant="body 2">
                    {node.host === 'me' && node.place === 'EventIn' ? (
                      <LinkText ariaLabel="EventIn" url="https://jp.vcube.com/eventdx/eventin">
                        EventIn
                      </LinkText>
                    ) : node.host === 'me' && node.place === 'Zoom' ? (
                      <LinkText ariaLabel="Zoom" url="https://explore.zoom.us/ja/products/meetings">
                        Zoom
                      </LinkText>
                    ) : node.host === 'me' && node.place === 'Meet' ? (
                      <LinkText
                        ariaLabel="Meet"
                        url="https://workspace.google.co.jp/intl/ja/products/meet"
                      >
                        Meet
                      </LinkText>
                    ) : (
                      node.host
                    )}
                    {node.youtubeUrl && (
                      <LinkText ariaLabel={t('labels.youtube_live')} url={node.youtubeUrl}>
                        {t('labels.youtube_live')}
                      </LinkText>
                    )}
                  </Typography>
                </div>
                {node.url && (
                  <LinkPreview
                    title={t(node.text)}
                    url={node.url}
                    image={`/og/${node.image || ''}.jpg`}
                  />
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default SlideSection
