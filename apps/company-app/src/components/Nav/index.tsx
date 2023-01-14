import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export const Nav: FC = () => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
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
          <h2 className={styles.navIcon}>
            <a href="/">
              Yuma <span className={styles.navHidden}>Kitamura</span>
            </a>
          </h2>

          <div className={styles.navLinks}>
            <Link scroll href="https://blog.nekohack.me/">
              <a href="https://blog.nekohack.me/" className={styles.navLink}>
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
