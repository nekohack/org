import { t } from 'i18next'
import { technologies } from '@org/shared/data'
import { Typography } from '@org/shared/ui'
import styles from 'css/skills.module.scss'

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <Typography variant="subtitle 1">{`${t('backpack')}`}</Typography>
      <Typography variant="body 1">{`${t('backpack_description')}`}</Typography>
      <div className={styles.skillsContainer}>
        {technologies.map((skillsItem, index) => {
          return (
            <div key={index} className={styles.skillsItem}>
              <div className={styles.header}>
                <Typography variant="subtitle 2">{skillsItem.title}</Typography>
              </div>

              <ul className={styles.skillsItem}>
                {skillsItem.skills.map((item, key) => (
                  <li key={key}>
                    <Typography variant="body 2">{item.name}</Typography>
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
