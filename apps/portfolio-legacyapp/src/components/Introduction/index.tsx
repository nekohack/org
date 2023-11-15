import { t } from 'i18next'
import { Icon, Typography } from '@org/shared/ui'
import { socialLinks } from '@org/shared/data'

const IntroductionSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('labels.basic_info')}</Typography>
      <Typography variant="body 1">{t('basic_biography')}</Typography>
      <ul style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px' }}>
        {socialLinks.map((l, key) => (
          <li key={key} style={{ width: 'calc(50% - 4px)' }}>
            <a
              href={l.url}
              target="_blank"
              rel="noopenner noreferrer"
              style={{
                display: 'grid',
                alignItems: 'center',
                gridTemplateColumns: 'auto 1fr',
                gap: '8px',
              }}
            >
              <Icon name={l.text} />
              <Typography variant="body 3">{l.description}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IntroductionSection
