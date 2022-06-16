import * as React from 'react'
import i18next from 'i18next'
import styles from 'css/link-preview.module.scss'
import { works } from '../data/works'

const WorksSection = () => {
  const showWorks = React.useMemo(() => {
    return works.filter((work) => work.status === 'enabled')
  }, [])
  return (
    <section id="works">
      <h1 className="section__title">{i18next.t('works')}</h1>
      <p>{i18next.t('works_description')}</p>
      <div>
        {showWorks.map((work, index) => {
          return (
            <div key={index}>
              <h2>{work.title}</h2>
              <div className={styles.linkPreview}>
                <a href={work.url} target="_blank" rel="noopener noreferrer">
                  <div className={styles.linkPreviewTitle}>{work.title}</div>
                  <div className={styles.linkPreviewDescription}>{i18next.t(work.description)}</div>
                  <div className={styles.linkPreviewUrl}>{work.url}</div>
                </a>
                <img className={styles.linkPreviewImage} src={`/og/${work.image}.jpg`} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorksSection
