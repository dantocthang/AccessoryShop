import React from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'

import classNames from 'classnames/bind'
import styles from './MiniCart.module.scss'
const cl = classNames.bind(styles)

function MiniCartItem() {
    return (
        <Link to='/' className={cl('item-wrapper')}>
            <img
                src='https://wokiee.jamstacktemplates.dev/assets/images/product/product-03.jpg'
                alt=''
                className={cl('item-img')}
            />
            <div className={cl('item-info')}>
                <div>Akko midnight 3087</div>
                <div>3 x 120000 VND</div>
            </div>
            <div
                onClick={(e) => e.preventDefault()}
                className={cl('item-delete')}
            >
                <DeleteOutlined />
            </div>
        </Link>
    )
}

export default MiniCartItem
