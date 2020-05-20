module.exports = {
   stories: ['../src/components/StoriesExample**/*.stories.js'],
   addons: [
      '@storybook/preset-create-react-app',
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-storysource',
      '@storybook/addon-knobs/register',
      '@storybook/addon-docs/preset'
   ]
}
