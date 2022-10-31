module.exports = {
  core: {
    builder: '@storybook/builder-vite',
  },

  stories: [
    '../lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@nrwl/react/plugins/storybook',
  ],
};
