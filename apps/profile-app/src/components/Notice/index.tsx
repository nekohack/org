import { LinkText, Typography } from '@org/shared/ui'
import * as SC from './index.module.scss'

export const Index: FC = () => {
  return (
    <div className={SC.noticeBar}>
      <Typography variant="body 1">
        {'jiyuujin is united with the people of Ukraine and the international community.'}
      </Typography>
    </div>
  )
}
