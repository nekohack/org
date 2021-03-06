import i18next from 'i18next'
import styles from 'css/skills.module.scss'
import { skills } from '../data/skills'

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h1 className="section__title">{i18next.t('backpack') as string}</h1>
      <p>{i18next.t('backpack_description') as string}</p>
      <div className={styles.skillsContainer}>
        {skills.map((skillsItem, index) => {
          return (
            <div key={index} className={styles.skillsItem}>
              <div className={styles.header}>
                <h1>{skillsItem.header}</h1>
              </div>

              <ul className={styles.skillsItem}>
                {skillsItem.items.map((item, key) => (
                  <li key={key}>
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
