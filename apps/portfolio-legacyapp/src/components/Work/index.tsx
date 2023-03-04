import { t } from 'i18next'
import { resumeLinks } from '@org/shared/data'
import { LinkText, List, Typography } from '@org/shared/ui'

const WorkSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 2">{`${t('work')}`}</Typography>
      <Typography variant="body 2">{`${t('work_experience')}`}</Typography>
      <List title={`${t('labels.related_links')}`}>
        {resumeLinks
          .filter((node) => node.enabled === true)
          .map((node, i) => {
            return (
              <List.Item
                key={i}
                label={
                  <LinkText ariaLabel={t(node.text)} url={node.url}>
                    {`${t(node.text)}`}
                  </LinkText>
                }
              />
            )
          })}
      </List>
    </div>
  )
}

export default WorkSection
