/* eslint-disable */
const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images')

const config = {
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

module.exports = withPWA(withOptimizedImages({
  ...config,
  reactStrictMode: true,
  trailingSlash: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
}))
