import type { StorybookConfig } from '@storybook/core-common';

export const addons: StorybookConfig['addons'] = [
  require.resolve('./framework-preset-stencil'),
];