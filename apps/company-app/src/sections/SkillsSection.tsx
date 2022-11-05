import i18next from 'i18next'
import { technologies } from '@org/data'
import styles from 'css/skills.module.scss'

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h2 className="section__title">{i18next.t('backpack') as string}</h2>
      <p>{i18next.t('backpack_description') as string}</p>
      <div className={styles.skillsContainer}>
        {technologies.map((skillsItem, index) => {
          return (
            <div key={index} className={styles.skillsItem}>
              <div className={styles.header}>
                <h3>{skillsItem.title}</h3>
              </div>

              <ul className={styles.skillsItem}>
                {skillsItem.skills.map((item, key) => (
                  <li key={key}>
                    <p>{item.name}</p>
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
