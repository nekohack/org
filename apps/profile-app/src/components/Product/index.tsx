import { t } from 'i18next'
import { products } from '@org/shared/data'
import { Product, Repo, Skill } from '@org/shared/types'
import { LinkPreview, LinkText, Typography } from '@org/shared/ui'

const ProductSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('product')}</Typography>
      {products
        .filter((node: Product) => node.enabled === true)
        .map((node: Product, index: number) => {
          return (
            <div key={index}>
              <Typography variant="subtitle 2">{t(node.title)}</Typography>
              {node.image.length === 1 &&
                node.image.map((i, key: number) => (
                  <div key={key}>
                    <img alt="" src={`/og/${i}.jpg`} />
                  </div>
                ))}
              {node.description.map((d: string, key: number) => {
                return (
                  <Typography variant="body 2" key={key}>
                    <div dangerouslySetInnerHTML={{ __html: t(d) }} />
                  </Typography>
                )
              })}
              {node.skills && (
                <>
                  <Typography variant="subtitle 2">{t('product_technology_used')}</Typography>
                  <ul>
                    {node.skills
                      ?.filter((s: Skill) => s.status === 'active')
                      .map((s: Skill, key: number) => {
                        return <li key={key}>{`${s.name} (${s.category})`}</li>
                      })}
                  </ul>
                </>
              )}
              {node.repos && (
                <>
                  <Typography variant="subtitle 2">{t('repository_managed')}</Typography>
                  <ul>
                    {node.repos
                      ?.filter((s: Repo) => s.status === 'active')
                      .map((s: Repo, key: number) => {
                        return (
                          <li key={key}>
                            <LinkText ariaLabel={s.name} url={s.url}>
                              {s.name}
                            </LinkText>
                          </li>
                        )
                      })}
                  </ul>
                </>
              )}
              {node.url.length !== 0 &&
                node.url.map((u: string, key: number) => (
                  <div key={key} style={{ padding: '4px 0' }}>
                    <LinkPreview
                      title={t(node.title[key])}
                      url={u}
                      image={`/og/${node.image[key] || ''}.jpg`}
                    />
                  </div>
                ))}
              {node.sub && (
                <>
                  <Typography variant="subtitle 2">{t('sub_product')}</Typography>
                  <ul>
                    {node.sub?.map(
                      (
                        s: {
                          title: string
                          skills: Skill[]
                          url: string
                        },
                        key: number,
                      ) => (
                        <li key={key}>
                          <Typography variant="body 2">{t(s.title)}</Typography>
                          <Typography variant="subtitle 3">
                            {t('product_technology_used')}
                          </Typography>
                          <ul>
                            {s.skills?.map((s: Skill, key: number) => {
                              if (s.status !== 'active') return
                              return <li key={key}>{`${s.name} (${s.category})`}</li>
                            })}
                          </ul>
                          <Typography variant="body 3">{t('product_url')}</Typography>
                          <p>
                            <LinkText ariaLabel={s.url} url={s.url}>
                              {s.url}
                            </LinkText>
                          </p>
                        </li>
                      ),
                    )}
                  </ul>
                </>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default ProductSection
