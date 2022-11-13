import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { LeftOutlined, DeleteOutlined } from '@ant-design/icons'

import Item from './components/CartItem'
import Button from '../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
const cl = classNames.bind(styles)

function Cart() {
    return (
        <div className={cl('wrapper')}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/cart'>Cart</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={cl('main')}>
                <div className={cl('heading')}>SHOPPING CART</div>
                <div className={`row ${cl('content')}`}>
                    <div className={`col l-8 m-8 c-12 ${cl('items')}`}>
                        <Item />
                        <div className={cl('tools')}>
                            <Link className={cl('tool')} to='/'>
                                <LeftOutlined className={cl('icon')} /> CONTINUE
                                SHOPPING
                            </Link>
                            <div className={cl('tool')}>
                                <DeleteOutlined className={cl('icon')} /> CLEAR
                                SHOPPING CART
                            </div>
                        </div>
                    </div>
                    <div className={`col l-4 m-4 c-12`}>
                        <div className={cl('summary')}>
                            <div className={cl('total')}>
                                <div className={cl('label')}>SUBTOTAL:</div>
                                <div>990000 VND</div>
                            </div>
                            <div className={cl('total')}>
                                <div className={cl('label', 'bold')}>
                                    GRAND TOTAL:
                                </div>
                                <div>990000 VND</div>
                            </div>
                            <Button
                                size='large'
                                type='primary'
                                className={cl('checkout')}
                            >
                                PROCEED TO CHECKOUT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
