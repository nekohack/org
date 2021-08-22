import * as React from 'react'
import format from 'date-fns/format'
import styles from './footer.module.scss'

async function fetchLastUpdated(setLastUpdated: React.Dispatch<React.SetStateAction<string>>) {
  const data = await fetch('https://api.github.com/repos/nekohack/nekohack.me')
    .then((v) => v.json())
    .catch(() => null)

  if (!data) return null

  if (data.updated_at) {
    const formatted = format(new Date(data.updated_at), 'MMMM dd, yyyy HH:mm')
    setLastUpdated(formatted)
  }
}

export const Footer = () => {
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetchLastUpdated(setLastUpdated)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Created by <a href="https://github.com/nekohack/nekohack.me">Portfolio</a> with ❤️
          <br />
          Colors: Dark mode. Built with <a href="https://nextjs.org">Next.js</a>
          <br />
          {lastUpdated ? <>Last updated: {lastUpdated}</> : null}
        </p>

        <div className={styles.footerLinks}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
