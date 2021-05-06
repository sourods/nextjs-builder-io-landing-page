import React from 'react'
import styles from './MiniSquare.module.css'
import { Image } from '@builder.io/react'

interface MiniSquareProps {
    text: string
    image: string
}

const MiniSquare = ({ text, image }: MiniSquareProps) => (
    <span className={styles.square} >
        <div className={styles.squareImage}>
            {image ? <Image src={image} /> : ''}
        </div>
        { text ? <p>{text}</p> : ''}
    </span>
)


export default MiniSquare