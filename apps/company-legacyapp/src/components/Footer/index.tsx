import { t } from 'i18next'
import { LinkText } from '@org/shared/ui'
import { css } from '@emotion/react'

export const FooterSection: FC = () => {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12rem;
        margin-top: 2rem;
        padding-bottom: 2rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
        `}
      >
        <p>
          <div
            css={css`
              font-size: 1.2rem;
              font-weight: 400;
              background: transparent;
              cursor: pointer;
              filter: brightness(90%);
              padding: 0.3rem 0.8rem;
            `}
          >
            <LinkText
              ariaLabel={t('at_once_read_privacy_policy') as string}
              url="https://nekohack-privacy-policy.netlify.app/"
            >
              {`${t('at_once_read_privacy_policy')}`}
            </LinkText>
          </div>
          <div
            css={css`
              font-size: 1.2rem;
              font-weight: 400;
              background: transparent;
              cursor: pointer;
              filter: brightness(90%);
              padding: 0.3rem 0.8rem;
            `}
          >
            <LinkText
              ariaLabel={t('at_once_read_privacy_policy') as string}
              url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
            >
              {`${t('please_contact_easily_from_the_survey_form')}`}
            </LinkText>
          </div>
        </p>

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 1.2rem;
              font-weight: 400;
              background: transparent;
              cursor: pointer;
              filter: brightness(90%);
              padding: 0.3rem 0.8rem;
              &:hover {
                background-color: #474747;
              }
            `}
          >
            <LinkText ariaLabel="Twitter" url="https://twitter.com/jiyuujinlab">
              Twitter
            </LinkText>
          </div>
          <div
            css={css`
              font-size: 1.2rem;
              font-weight: 400;
              background: transparent;
              cursor: pointer;
              filter: brightness(90%);
              padding: 0.3rem 0.8rem;
              &:hover {
                background-color: #474747;
              }
            `}
          >
            <LinkText ariaLabel="GitHub" url="https://github.com/jiyuujin">
              GitHub
            </LinkText>
          </div>
        </div>
      </div>
    </footer>
  )
}
