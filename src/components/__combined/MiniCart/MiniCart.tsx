import { Link } from 'react-router-dom'

import { Divider } from 'antd'

import MiniCartItem from './MiniCartItem'
import Button from '../../__atom/Button'

import classNames from 'classnames/bind'
import styles from './MiniCart.module.scss'
const cl = classNames.bind(styles)

function MiniCart() {
    return (
        <div className={cl('wrapper')}>
            <MiniCartItem />
            <Divider />
            <div className={cl('sub-total')}>
                <span>SUBTOTAL:</span>
                <span>120000 VND</span>
            </div>
            <Button className={cl('button')} to='/checkout' type='primary'>
                Proceed to Checkout
            </Button>
            <Link className={cl('link')} to='/cart'>View cart</Link>
        </div>
    )
}

export default MiniCart
