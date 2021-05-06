import { Builder } from '@builder.io/react';
import Button from './EcsButton';

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
      required: true,
      defaultValue: '/iabadabadu',
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

Builder.registerComponent(Button, ButtonBuilder);