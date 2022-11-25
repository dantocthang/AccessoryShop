import classNames from 'classnames/bind'
import styles from '../Checkout.module.scss'
import Heading from './Heading'
import Item from './Item'
import Button from '../../../components/__atom/Button'
import CartItem from '../../../model/cart-item'
import { Divider } from 'antd'
const cl = classNames.bind(styles)

function Total({ cart = [] }: { cart: CartItem[] }) {
    return (
        <div className={cl('numbers')}>
            <Heading>Your Order</Heading>
            <div className='mt-4'>
                <Item label='Products' value='Total'></Item>
                <Divider style={{marginBlock: '10px'}} />
                {cart?.length > 0 &&
                    cart.map((x) => (
                        <Item
                            label={x.product.name}
                            value={`${x.quantity} x ${x.product.price} VND`}
                        ></Item>
                    ))}
                <Divider style={{marginBlock: '10px'}} />
                <Item
                    label='Subtotal'
                    value={`${cart.reduce(
                        (acc, item) =>
                            (acc += item.product.price * item.quantity),
                        0
                    )} VND`}
                ></Item>
                <Divider style={{marginBlock: '10px'}} />

                <Item label='Shipping' value='30000 VND'></Item>
                <Divider style={{marginBlock: '10px'}} />

                <Item
                    label='Total'
                    value={`${
                        cart.reduce(
                            (acc, item) =>
                                (acc += item.product.price * item.quantity),
                            0
                        ) + 30000
                    } VND`}
                    bold
                ></Item>
                <Divider style={{marginBlock: '10px'}} />
            </div>
            <Button type='primary' className='mt-4'>
                Place Order
            </Button>
        </div>
    )
}

export default Total
