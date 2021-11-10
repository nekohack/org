import * as React from 'react'
import i18next from 'i18next'
import styles from 'css/hobbies.module.scss'
import { hobbies } from '../data/hobbies'

const HobbiesSection = () => {
  return (
    <section id="hobbies">
      <h1 className="section__title">{i18next.t('hobbies')}</h1>
      {hobbies.map((hobbiesItem) => {
        return (
          <div key={hobbiesItem.header} className={styles.hobbiesItem}>
            <div className={styles.header}>
              <h1>{hobbiesItem.header}</h1>
            </div>

            <ul className={styles.hobbiesItem}>
              {hobbiesItem.items.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default HobbiesSection
