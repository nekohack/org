import i18next from 'i18next'
import { products } from '@utils/product.constants'
import { LinkPreview } from '../../../../../libs/shared-ui/LinkPreview'

const Product: FC = () => {
  return (
    <div className="section">
      <h1>{i18next.t('product')}</h1>
      {products
        .filter((node: any) => node.enabled === true)
        .map((node: any, index: number) => {
          return (
            <div key={index}>
              <h2>{i18next.t(node.title)}</h2>
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
                  <h3>{i18next.t('product_technology_used')}</h3>
                  <ul>
                    {node.skills
                      ?.filter(
                        (s: { name: string; url: string; status: 'active' | 'used' }) =>
                          s.status === 'active',
                      )
                      .map(
                        (
                          s: { name: string; category: string; status: 'active' | 'used' },
                          key: number,
                        ) => {
                          return <li key={key}>{`${s.name} (${s.category})`}</li>
                        },
                      )}
                  </ul>
                </>
              )}
              {node.repos && (
                <>
                  <h3>{i18next.t('repository_managed')}</h3>
                  <ul>
                    {node.repos
                      ?.filter(
                        (s: { name: string; url: string; status: 'active' | 'used' }) =>
                          s.status === 'active',
                      )
                      .map(
                        (
                          s: { name: string; url: string; status: 'active' | 'used' },
                          key: number,
                        ) => {
                          return (
                            <li key={key}>
                              <a href={s.url} target="_blank" rel="noopener noreferrer">
                                {s.name}
                              </a>
                            </li>
                          )
                        },
                      )}
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
                  <h3>{i18next.t('sub_product')}</h3>
                  <ul>
                    {node.sub?.map(
                      (
                        s: {
                          title: string
                          skills: Array<{
                            name: string
                            category: string
                            status: 'active' | 'used'
                          }>
                          url: string
                        },
                        key: number,
                      ) => (
                        <li key={key}>
                          <h4>{i18next.t(s.title)}</h4>
                          <h5>{i18next.t('product_technology_used')}</h5>
                          <ul>
                            {s.skills?.map(
                              (
                                s: {
                                  name: string
                                  category: string
                                  status: 'active' | 'used'
                                },
                                key: number,
                              ) => {
                                if (s.status !== 'active') return
                                return <li key={key}>{`${s.name} (${s.category})`}</li>
                              },
                            )}
                          </ul>
                          <h5>{i18next.t('product_url')}</h5>
                          <p>
                            <a href={s.url} target="_blank" rel="noopener noreferrer">
                              {s.url}
                            </a>
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
