import React from 'react'
import styles from './EcsButton.module.css'
import Link from '../Link'

interface EcsButtonProps {
    text: string
    link: string
    type: 'outline' | 'ghost' | 'solid' | 'solid-invert'
}

const EcsButton = ({ text, link, type }: EcsButtonProps) => {
    const isLink = !!link.length
    const className = `${styles.button} ${styles[`button--${type}`]}`
    if (isLink) {
        return (
            <Link href={link} role="button" className={className} />
        )
    }
    return (
        <button className={className} type="button" >
            {text}
        </button>
    )
}

export default EcsButton