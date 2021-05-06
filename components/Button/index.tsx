import { Builder } from '@builder.io/react';
import EcsButton from './Button';

export const ButtonBuilder = {
  name: 'Button',
  inputs: [
    {
      name: 'text',
      type: 'string',
      required: true,
      defaultValue: 'Click me',
    },
    {
      name: 'link',
      type: 'url',
      defaultValue: '',
    },
    {
      name: 'type',
      type: 'string',
      required: true,
      enum: ['outline', 'ghost', 'solid', 'solid-invert'],
      defaultValue: 'solid',
    },
  ],
}

Builder.registerComponent(EcsButton, ButtonBuilder);