import { css } from '@emotion/react'
import { t } from 'i18next'
import { products } from '@org/shared/data'
import { Skill } from '@org/shared/types'
import { Avatar, Card, Typography } from '@org/shared/ui'

const ProductSection: FC = () => {
  const tags = (skills: Skill[]) => {
    let result = ''
    skills
      .filter((s) => s.status === 'active')
      .forEach((s, index) => {
        result += s.name
        if (index !== skills.filter((s) => s.status === 'active').length - 1) result += ', '
      })
    return result
  }

  return (
    <section className="section">
      <Typography variant="subtitle 1">{t('product')}</Typography>
      <div className="section-wrapper">
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 12px;
          `}
        >
          {products
            .filter((node) => node.enabled === true)
            .map((node, index) => {
              return (
                <Card
                  key={index}
                  name={t(node.title)}
                  subheader={<Typography variant="body 3">{tags(node.skills)}</Typography>}
                  avatar={<Avatar alt="" src="https://i.imgur.com/X0CcoU9.jpg" size="large" />}
                  qrcode={<img width={90} height={60} alt="" src={`/og/${node.image}.jpg`} />}
                  options={{
                    star: node.position,
                    urls: node.urls,
                    shares: node.shares,
                  }}
                >
                  <Typography variant="body 3">{t(node.description)}</Typography>
                </Card>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
