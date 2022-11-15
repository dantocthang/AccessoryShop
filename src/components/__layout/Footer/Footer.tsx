import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cl = classNames.bind(styles)

function Footer() {
    return (
        <div className={cl('wrapper')}>
            <div className='grid wide'>
                <div className={cl('inner')}>
                    <div className='row'>
                        <div className='col l-3 m-4 c-6'>
                            <div className={cl('column')}>
                                <div className={cl('heading')}>Categories</div>
                                <ul className={cl('list')}>
                                    <li>
                                        <Link to='/' className={cl('item')}>
                                            Casual
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className={cl('item')}>
                                            Modern
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-3 m-4 c-6'>
                            <div className={cl('column')}>
                                <div className={cl('heading')}>Brands</div>
                                <ul className={cl('list')}>
                                    <li>
                                        <Link to='/' className={cl('item')}>
                                            Akko
                                        </Link>
                                    </li>
                                    <li>
                                        {' '}
                                        <Link to='/' className={cl('item')}>
                                            Logitech
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-3 m-4 c-6'>
                            <div className={cl('column')}>
                                <div className={cl('heading')}>About us</div>
                                <div className={cl('text')}>
                                    Lorem ipsum dolor sit amet conse ctetur
                                    adipisicing elit, sed do eiusmod tempor ut
                                    labore et dolore. Lorem ipsum dolor amet
                                    conse ctetur adipisicing elit, sedo eiusmod
                                    tempor incididunt ut labore etdolore.
                                </div>
                            </div>
                        </div>
                        <div className='col l-3 m-4 c-6'>
                            <div className={cl('column')}>
                                <div className={cl('heading')}>Contact</div>
                                <div className={cl('text')}>
                                    <div className={cl('text-item')}>
                                        <span className={cl('label')}>
                                            Address:
                                        </span>
                                        2548 Broaddus Maple Court Avenue,
                                        Madisonville KY 4783, USA
                                    </div>
                                    <div className={cl('text-item')}>
                                        <span className={cl('label')}>
                                            Phone:
                                        </span>
                                        +777 2345 7885; +777 2345 7886
                                    </div>
                                    <div className={cl('text-item')}>
                                        <span className={cl('label')}>
                                            Hours:
                                        </span>
                                        7 Days a week from 10 am to 6 pm
                                    </div>
                                    <div className={cl('text-item')}>
                                        <span className={cl('label')}>
                                            E-mail:
                                        </span>
                                        <Link className={cl('item')} to='/'>
                                            info@gmail.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
