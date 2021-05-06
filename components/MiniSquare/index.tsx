import { Builder } from '@builder.io/react';
import EcsMiniSquare from './MiniSquare';

export const MiniSquareBuilder = {
    name: 'MiniSquare',
    inputs: [
        {
            name: 'text',
            type: 'string',
            defaultValue: '',
        },
        {
            name: "image", type: "file", allowedFileTypes: ["jpeg", "png"]
        }
    ],
}

Builder.registerComponent(EcsMiniSquare, MiniSquareBuilder);