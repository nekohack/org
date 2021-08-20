import * as React from 'react'
import Link from 'next/link'

import styles from './nav.module.scss'

export const Nav = () => {
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current.classList.add(styles.navActive)
      } else {
        ref.current.classList.remove(styles.navActive)
      }
    }
  }, [])

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop

    return window.pageYOffset > offset
  }

  return (
    <div className={styles.navContainer}>
      <nav ref={ref} className={styles.nav} id="nav">
        <div className={styles.navContent}>
          <h1 className={styles.navIcon}>
            <a href="/">
              Yuma <span className={styles.navHidden}>Kitamura</span>
            </a>
          </h1>

          <div className={styles.navLinks}>
            <Link scroll href="https://webneko.dev">
              <a href="https://webneko.dev" className={styles.navLink}>
                Blog
              </a>
            </Link>
            <Link scroll href="https://yuma-kitamura.nekohack.me">
              <a href="https://yuma-kitamura.nekohack.me" className={styles.navLink}>
                Profile
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
