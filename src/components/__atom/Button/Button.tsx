import React from 'react'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cl = classNames.bind(styles)

interface Props {
    type?: string // primary, outline
    to?: string
    size?: string // small, large
    leftIcon?: React.ReactNode
    loading?: boolean
    children: React.ReactNode
    className?: string
    onClick?: Function
}

function Button({
    type,
    size,
    to,
    leftIcon,
    loading,
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
                loading: loading,
            })}`}
            to={to}
            {...passwdProps}
        >
            {loading && <Spin className={cl('spin')} size='small'/>}
            {leftIcon}
            {children}
        </Component>
    )
}

export default Button
