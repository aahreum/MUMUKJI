import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },

  framework: '@storybook/react-vite',
  docs: {
    autodocs: 'tag',
  },
  build: { test: {} },
}
export default config
