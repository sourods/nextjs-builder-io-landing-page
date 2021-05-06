import React from 'react'
import { Image } from '@builder.io/react'
import styles from './hero.module.css'

const Hero = props => {
    const { image, title, buttonLink, buttonText, height } = props

    return (
        <section className={styles.heroContainer} style={{ height }}>
            <div
                className={styles.grid}
            >
                <h2 className={styles.gridTitle}>{title}</h2>
                <a href={buttonLink} className={styles.gridLink}>
                    {buttonText}
                </a>
                <Image image={image} className={styles.gridImage} />
            </div>
        </section>
    )
}

export default Hero