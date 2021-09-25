/* eslint-disable */
const withPWA = require('next-pwa')

const config = {
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL || 'https://twitter.com',
        permanent: true,
      },
      {
        source: '/github',
        destination: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      }
    }

    return config
  },
  experimental: { esmExternals: 'loose' },
}

const localeConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
}

module.exports = withPWA({
  ...config,
  ...localeConfig,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
})
