const useLessLoader = require('storybook-less-loader');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    const includeLessConfig = useLessLoader(config);
    return includeLessConfig;
  },
};
