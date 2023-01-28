const react = require('@vitejs/plugin-react')

module.exports = {
  core: {
    builder: '@storybook/builder-vite',
  },

  stories: ['../lib/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@nrwl/react/plugins/storybook'],

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

    return config
  },
}
