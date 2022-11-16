import { Link } from 'react-router-dom'

import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from './ProductItem.module.scss'
const cl = classNames.bind(styles)

interface Props {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
}

function ProductItem({ id, name, description, price, imageUrl }: Props) {
    return (
        <Link to={`/product/${id}`} className={cl('item-wrapper')}>
            <img
                src={
                    imageUrl ||
                    'https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg'
                }
                alt=''
                className={cl('item-img')}
            />
            <div className={cl('item-info')}>
                <div className={cl('item-name')}>{name}</div>
                <div className={cl('item-price')}>{price} VND</div>
                <Button className={cl('item-add')} type='primary'>
                    Add to cart
                </Button>
            </div>
            <div className={cl('category')}>Keyboard</div>
        </Link>
    )
}

export default ProductItem
