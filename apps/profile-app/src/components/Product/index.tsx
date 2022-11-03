import i18next from 'i18next'
import { Repo, Skill } from '@org/shared/types'
import { LinkPreview, LinkText } from '@org/shared/ui'
import { products } from '@utils/product.constants'

const Product: FC = () => {
  return (
    <div className="section">
      <h2>{i18next.t('product')}</h2>
      {products
        .filter((node: any) => node.enabled === true)
        .map((node: any, index: number) => {
          return (
            <div key={index}>
              <h3>{i18next.t(node.title)}</h3>
              {node.image.length === 1 &&
                node.image.map((i, key: number) => (
                  <div key={key}>
                    <img src={`/og/${i}.jpg`} alt={node.title[key]} decoding="async" />
                  </div>
                ))}
              {node.description.map((d: string, key: number) => {
                return <p key={key} dangerouslySetInnerHTML={{ __html: i18next.t(d) }} />
              })}
              {node.skills && (
                <>
                  <h4>{i18next.t('product_technology_used')}</h4>
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
                  <h4>{i18next.t('repository_managed')}</h4>
                  <ul>
                    {node.repos
                      ?.filter((s: Repo) => s.status === 'active')
                      .map((s: Repo, key: number) => {
                        return (
                          <li key={key}>
                            <LinkText name={s.name} url={s.url}>
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
                      title={i18next.t(node.title[key])}
                      url={u}
                      image={node.image[key] || ''}
                    />
                  </div>
                ))}
              {node.sub && (
                <>
                  <h4>{i18next.t('sub_product')}</h4>
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
                          <h5>{i18next.t(s.title)}</h5>
                          <h6>{i18next.t('product_technology_used')}</h6>
                          <ul>
                            {s.skills?.map((s: Skill, key: number) => {
                              if (s.status !== 'active') return
                              return <li key={key}>{`${s.name} (${s.category})`}</li>
                            })}
                          </ul>
                          <h5>{i18next.t('product_url')}</h5>
                          <p>
                            <LinkText name={s.url} url={s.url}>
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

export default Product
