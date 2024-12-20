import { t } from 'i18next'
import { Icon, Link, Typography } from '@org/shared/ui'
import { socialLinks, technologies } from '@org/shared/data'
import { css } from '@emotion/react'

const IntroductionSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('labels.basic_info')}</Typography>
      <Typography
        variant="body 1"
        css={css`
          white-space: pre-wrap;
        `}
      >
        {t('basic_biography')}
      </Typography>

      <div
        css={css`
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin: 1.5rem 0;
          &:nth-child(2n + 2) {
            margin: 0 10px;
          }
          @media (max-width: 767px) {
            flex-direction: column;
          }
        `}
      >
        {socialLinks.map((s, key) => (
          <Link key={key} href={s.url}>
            <div
              css={css`
                width: 1.2rem;
                margin-right: 1.2rem;
              `}
            >
              <Icon name={s.text} />
            </div>
            {s.description}
          </Link>
        ))}
      </div>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, minmax(min(15rem, 100%), 1fr));
          gap: 1rem;

          @media (max-width: 910px) {
            grid-template-columns: repeat(2, minmax(min(15rem, 100%), 1fr));
          }

          @media (max-width: 500px) {
            grid-template-columns: repeat(2, minmax(min(7rem, 100%), 1fr));
          }
        `}
      >
        {technologies.map((skillsItem, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  margin-bottom: 0.7rem;
                `}
              >
                <Typography variant="subtitle 2">{skillsItem.title}</Typography>
              </div>

              <ul>
                {skillsItem.skills.map((item, key) => (
                  <li
                    key={key}
                    css={css`
                      list-style-type: none;
                    `}
                  >
                    <Typography variant="body 2">{item.name}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IntroductionSection
