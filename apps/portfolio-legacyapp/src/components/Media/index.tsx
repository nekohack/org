import { t } from 'i18next'
import { Timeline, Typography } from '@org/shared/ui'

interface MediaSectionProps {
  medias: any
}

const MediaSection = ({ medias }: MediaSectionProps) => {
  return (
    <section id="media">
      <Typography variant="subtitle 2">{t('media')}</Typography>
      <div className="section-wrapper">
        <Timeline>
          {medias.slice(0, 10).map((item, index) => (
            <Timeline.Card key={index}>
              <span className="flex absolute -left-11 justify-center items-center w-10 h-10 bg-slate-700 rounded-full text-lg border-gray-500 border-2">
                {item.link.startsWith('https://blog.nekohack.me/') && '🐈'}
                {item.link.startsWith('https://zenn.dev/') && '🐝'}
                {item.link.startsWith('https://note.com/') && '🐉'}
              </span>
              <div className="ml-2">
                <div className="p-2 sm:p-4 rounded-lg border shadow-sm bg-gray-700 border-gray-600 text-gray-300">
                  <div className="justify-between mb-3 sm:flex items-baseline gap-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      title={item.title}
                      className="text-sm font-semibold text-blue-300 hover:underline"
                    >
                      {item.title}
                    </a>
                    <div className="text-sm font-normal">
                      {item.link.startsWith('https://blog.nekohack.me/') && '個人ブログ'}
                      {item.link.startsWith('https://zenn.dev/') && 'Zenn'}
                      {item.link.startsWith('https://note.com/') && 'note'}
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <Typography variant="body 3">
                      <div dangerouslySetInnerHTML={{ __html: item.summary || item.content }} />
                    </Typography>
                  </div>
                </div>
              </div>
            </Timeline.Card>
          ))}
        </Timeline>
      </div>
    </section>
  )
}

export default MediaSection
