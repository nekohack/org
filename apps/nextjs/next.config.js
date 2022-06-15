// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withOptimizedImages = require('next-optimized-images')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

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

const rewriteConfig = {
  basePath: 'home',
  assetPrefix: 'home',
  async rewrites() {
    return [
      {
        source: '/home/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/home/images/:query*',
        destination: '/_next/image/:query*'
      },
      {
        source: '/home/_next/:path*',
        destination: '/_next/:path*',
      },
    ]
  }
}

module.exports = withNx(
  withPWA(
    withOptimizedImages({
      ...config,
      ...rewriteConfig,
      reactStrictMode: true,
      trailingSlash: true,
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV !== 'production',
      },
    }),
  ),
)
