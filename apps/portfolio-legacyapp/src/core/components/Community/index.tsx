import { t } from 'i18next'
import { communities } from '@org/shared/data'
import { LinkText, List, Typography } from '@org/shared/ui'
import { Fragment } from 'react'

const CommunitySection: FC = () => {
  return (
    <div className="section">
      <List title={t('community')}>
        {communities
          .filter((node) => node.enabled === true && node.status === 'active')
          .map((node, i) => (
            <List.Item
              key={i}
              label={
                <Typography variant="body 2">
                  <LinkText ariaLabel={node.text} url={node.url}>
                    {node.text}
                  </LinkText>
                </Typography>
              }
            >
              <Typography variant="body 3">{node.location}</Typography>
            </List.Item>
          ))}
      </List>
    </div>
  )
}

export default CommunitySection
