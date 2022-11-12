import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { HeartIcon } from '../../Icons'
import logo from '../../../assets/img/global/logo.png'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const cl = classNames.bind(styles)

function Header() {
    return (
        <div className={cl('wrapper')}>
            <div className="grid wide">
                <div className={cl('inner')}>
                    <div className={cl('top')}>
                        <ul className={cl('nav')}>
                            <Link to="/" className={cl('nav-item')}>
                                Shop
                            </Link>
                            <Link to="/" className={cl('nav-item')}>
                                About us
                            </Link>
                            <Link to="/" className={cl('nav-item')}>
                                Contact us
                            </Link>
                            <Link to="/" className={cl('nav-item')}>
                                Faqs
                            </Link>
                        </ul>
                        <ul className={cl('auth')}>
                            <Link to="/" className={cl('nav-item')}>
                                Login
                            </Link>
                            <span>or</span>
                            <Link to="/" className={cl('nav-item')}>
                                Register
                            </Link>
                        </ul>
                    </div>
                    <div className={cl('bottom')}>
                        <img src={logo} alt="" className={cl('logo')} />
                        <div className={cl('tools')}>
                            <div className={cl('contact')}>
                                <div className={cl('phone')}>
                                    Call Us: +777 2345 7885
                                </div>
                                <div className={cl('time')}>
                                    From 8:00 to 21:00 (Mon-Sun) Free by United
                                    States
                                </div>
                            </div>
                            <div className={cl('tool')}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={cl('icon')}
                                />
                                <span className={cl('tool-text')}>
                                    WISHLIST
                                </span>
                            </div>
                            <div className={cl('tool')}>
                                <div className={cl('cart-wrapper')}>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className={cl('icon')}
                                    />
                                    <span className={cl('cart-count')}>1</span>
                                </div>
                                <span className={cl('tool-text')}>MY CART</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
