import React from 'react'
import {
    ShoppingOutlined,
    UserOutlined,
    LoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './UserMenu.module.scss'
const cl = classNames.bind(styles)

interface Props {}

function UserMenu({}: Props) {
    return (
        <div className={cl('wrapper')}>
            <Link to='/cart' className={cl('item')}>
                <ShoppingOutlined className={cl('icon')} />
                Cart
            </Link>
            <Link to='/profile' className={cl('item')}>
                <UserOutlined className={cl('icon')} />
                Account
            </Link>
            <Link to='/login' className={cl('item')}>
                <LoginOutlined className={cl('icon')} />
                Login
            </Link>
            <Link to='/register' className={cl('item')}>
                <UserOutlined className={cl('icon')} />
                Register
            </Link>
            <Link to='/logout' className={cl('item')}>
                <LogoutOutlined className={cl('icon')} />
                Logout
            </Link>
        </div>
    )
}

export default UserMenu
