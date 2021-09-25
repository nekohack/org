import * as React from 'react'
import styles from 'css/skills.module.scss'
import { useLocale } from '@hooks/useLocale'
import { skills } from '../data/skills'

const SkillsSection = () => {
  const { t } = useLocale()

  return (
    <section id="skills">
      <h1 className="section__title">{t.backpack}</h1>
      <p>{t.backpack_description}</p>
      <div className={styles.skillsContainer}>
        {skills.map((skillsItem) => {
          return (
            <div key={skillsItem.header} className={styles.skillsItem}>
              <div className={styles.header}>
                <h1>{skillsItem.header}</h1>
              </div>

              <ul className={styles.skillsItem}>
                {skillsItem.items.map((item) => (
                  <li key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
