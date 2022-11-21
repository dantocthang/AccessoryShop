import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useAppSelector } from '../../../hooks'
import { addToCart } from '../../../services'
import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from './ProductItem.module.scss'
const cl = classNames.bind(styles)

interface Props {
    id: number
    name: string
    price: number
    imageUrl: string
    category: any
}

function ProductItem({ id, name, price, imageUrl, category }: Props) {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const user = useAppSelector((state) => state.auth)
    const addToCartMutation = useMutation(addToCart, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(['cart'])
        },
    })

    const handleAddToCart = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        if (!user.hasOwnProperty('id')) navigate('/login')
        else
            addToCartMutation.mutate({
                product_id: id,
                quantity: 1,
                user_id: user.id,
            })
    }

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
                <Button
                    onClick={handleAddToCart}
                    className={cl('item-add')}
                    type='primary'
                >
                    Add to cart
                </Button>
            </div>
            <div className={cl('category')}>{category.name}</div>
        </Link>
    )
}

export default ProductItem
