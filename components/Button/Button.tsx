import React from 'react'
import styles from './Button.module.css'
import Link from '../Link'

interface ButtonProps {
    text: string
    link: string
    type: 'outline' | 'ghost' | 'solid' | 'solid-invert'
}

const Button = ({ text, link, type }: ButtonProps) => {
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

export default Button