import i18next from 'i18next'
import styles from 'css/skills.module.scss'
import { skills } from '../data/skills'

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h2 className="section__title">{i18next.t('backpack') as string}</h2>
      <p>{i18next.t('backpack_description') as string}</p>
      <div className={styles.skillsContainer}>
        {skills.map((skillsItem, index) => {
          return (
            <div key={index} className={styles.skillsItem}>
              <div className={styles.header}>
                <h3>{skillsItem.header}</h3>
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
