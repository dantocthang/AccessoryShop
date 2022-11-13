import { Link } from 'react-router-dom'

import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from './ProductItem.module.scss'
const cl = classNames.bind(styles)

function ProductItem() {
    return (
        <Link to='/' className={cl('item-wrapper')}>
            <img
                src='https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg'
                alt=''
                className={cl('item-img')}
            />
            <div className={cl('item-info')}>
                <div className={cl('item-name')}>Akko 3087 Midnight</div>
                <div className={cl('item-price')}>120000 VND</div>
                <Button className={cl('item-add')} type='primary'>
                    Add to cart
                </Button>
            </div>
            <div className={cl('category')}>Keyboard</div>
        </Link>
    )
}

export default ProductItem
