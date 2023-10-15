import { useEffect, useRef } from 'react'
import { css } from '@emotion/react'

export const NavSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current?.classList.add('navActive')
      } else {
        ref.current?.classList.remove('navActive')
      }
    }
  }, [])

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop ?? 0

    return window.pageYOffset > offset
  }

  return (
    <div
      css={css`
        width: 100%;
        height: 6rem;
      `}
    >
      <nav
        ref={ref}
        css={css`
          z-index: 199;
          width: 100%;
          height: 6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 200ms;
        `}
        id="nav"
      >
        <div
          css={css`
            width: 90%;
            display: flex;
            justify-content: space-between;
          `}
        >
          <h2
            css={css`
              font-size: 2rem;
              font-weight: 500;
            `}
          >
            <a href="/">
              Yuma <span>Kitamura</span>
            </a>
          </h2>

          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <a
              href="https://blog.nekohack.me/"
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
              Blog
            </a>
            <a
              href="https://yuma-kitamura.nekohack.me"
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
              Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
