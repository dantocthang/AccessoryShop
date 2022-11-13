import {Link} from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'
import {InputNumber} from 'antd'

import classNames from 'classnames/bind'
import styles from '../Cart.module.scss'
const cl = classNames.bind(styles)

function CartItem() {
    return (
        <div className={cl('item-wrapper')}>
            <DeleteOutlined className={cl('item-delete')} />
            <img
                src='https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg'
                alt=''
                className={cl('item-image')}
            />
            <Link to='/' className={cl('item-info')}>
                <div className={cl('item-name')}>Akko 3087 Midnight</div>
                <div className={cl('item-price')}>990000 VND</div>
            </Link>
            <InputNumber size='large' defaultValue={1} />
            <div className={cl('item-subtotal')}>990000 VND</div>
        </div>
    )
}

export default CartItem
