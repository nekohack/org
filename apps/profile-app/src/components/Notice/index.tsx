import { LinkText } from '@org/shared/ui'
import * as SC from './index.module.scss'

export const Index: FC = () => {
  return (
    <div className={SC.noticeBar}>
      <LinkText name="jiyuujin" url="https://twitter.com/jiyuujinlab">
        jiyuujin
      </LinkText>
      {'is united with the people of Ukraine and the international community.'}
    </div>
  )
}
