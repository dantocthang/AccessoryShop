import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cl = classNames.bind(styles)

interface Props {
    type?: string // primary, outline
    to?: string
    size?: string // small, large
    leftIcon?: React.ReactNode
    children: React.ReactNode
    className?: string
    onClick?: Function
}

function Button({
    type,
    size,
    to,
    leftIcon,
    onClick,
    children,
    className,
    ...passwdProps
}: Props) {
    let Component: any = 'button'
    if (to) Component = Link

    return (
        <Component
            className={`${className} ${cl('wrapper', type, size, {
                icon: !!leftIcon,
            })}`}
            to={to}
            {...passwdProps}
        >
            {leftIcon}
            {children}
        </Component>
    )
}

export default Button
