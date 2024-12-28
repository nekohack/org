import react from '@vitejs/plugin-react'

export default {
  core: {
    builder: '@storybook/builder-vite',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: ['../lib/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@nx/react/plugins/storybook'],

  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    )

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    )

    // config.plugins.push(() => import('unocss/vite'))
    // config.plugins.push(() => import('vite-plugin-inspect'))

    return config
  },
}
