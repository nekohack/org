import React, { FC } from 'react'
import i18next from 'i18next'
import { products } from '@utils/product.constants'

const Product: FC = () => {
  return (
    <div className="section">
      <h1>{i18next.t('product')}</h1>
      {products
        .filter((node: any) => node.enabled === true)
        .map((node: any) => {
          return (
            <div key={node.id}>
              <h2>{i18next.t(node.title)}</h2>
              {node.image && (
                <img src={node.image} alt={node.title} width={600} height={400} decoding="async" />
              )}
              {node.description.map((d: string, index: number) => {
                return <p key={index} dangerouslySetInnerHTML={{ __html: i18next.t(d) }} />
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
                      .map((s: { name: string; category: string; status: 'active' | 'used' }) => {
                        return <li key={s.name}>{`${s.name} (${s.category})`}</li>
                      })}
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
                      .map((s: { name: string; url: string; status: 'active' | 'used' }) => {
                        return (
                          <li key={s.name}>
                            <a href={s.url} target="_blank" rel="noopener noreferrer">
                              {s.name}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </>
              )}
              {node.url && (
                <>
                  <h3>{i18next.t('product_url')}</h3>
                  <p>
                    <a href={node.url} target="_blank" rel="noopener noreferrer">
                      {node.url}
                    </a>
                  </p>
                </>
              )}
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
                        index: number,
                      ) => (
                        <li key={index}>
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
