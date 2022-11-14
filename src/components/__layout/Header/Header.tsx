import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Popover } from 'antd'
import {
    SearchOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from '@ant-design/icons'

import UserMenu from '../../__combined/UserMenu'
import MiniCart from '../../__combined/MiniCart'
import Search from '../../__atom/Search'

import logo from '../../../assets/img/global/logo_primary.png'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cl = classNames.bind(styles)

function Header() {
    const [searchVisible, setSearchVisible] = useState(false)
    return (
        <div className={cl('wrapper')}>
            <div className={cl('inner')}>
                <div className={`grid wide ${cl('top-wrapper')}`}>
                    <div className={cl('top')}>
                        <img src={logo} alt='' className={cl('logo')} />
                        <div className={cl('funcs')}>
                            <div
                                onClick={() => setSearchVisible(true)}
                                className={cl('func')}
                            >
                                <SearchOutlined className={cl('icon')} />
                            </div>
                            <div className={cl('func')}>
                                <Popover
                                    trigger={'click'}
                                    content={<MiniCart />}
                                    title={null}
                                    placement='bottomRight'
                                >
                                    <ShoppingCartOutlined
                                        className={cl('icon')}
                                    />
                                </Popover>
                            </div>
                            <div className={cl('func')}>
                                <Popover
                                    trigger={'click'}
                                    content={<UserMenu />}
                                    title={null}
                                    placement='bottomRight'
                                >
                                    <UserOutlined className={cl('icon')} />
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl('bottom-wrapper')}>
                    <div className={`grid wide h-full`}>
                        <div className={cl('bottom')}>
                            <NavLink
                                to='/'
                                className={(state) =>
                                    cl('nav-item', { active: state.isActive })
                                }
                            >
                                HOME
                                <div className={cl('nav-item-extend')}>
                                    content
                                </div>
                            </NavLink>
                            <NavLink
                                to='/shop'
                                className={(state) =>
                                    cl('nav-item', { active: state.isActive })
                                }
                            >
                                SHOP
                                <div className={cl('nav-item-extend')}>
                                    content
                                </div>
                            </NavLink>
                            <NavLink
                                to='/contact'
                                className={(state) =>
                                    cl('nav-item', { active: state.isActive })
                                }
                            >
                                CONTACT
                                <div className={cl('nav-item-extend')}>
                                    content
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Search
                    onClose={() => setSearchVisible(false)}
                    onSearch={() => {}}
                    visible={searchVisible}
                    className={cl('search')}
                />
            </div>
        </div>
    )
}

export default Header
