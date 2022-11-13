import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Image, InputNumber } from 'antd'

import Button from '../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from './Detail.module.scss'
const cl = classNames.bind(styles)

function Detail() {
    return (
        <div className={cl('wrapper')}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/product'>Product</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/product/1'>Product 1</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={cl('main')}>
                <div className={cl('image-wrapper')}>
                    <Image
                        className={cl('image')}
                        src=''
                        fallback='https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg'
                    ></Image>
                </div>
                <div className={cl('info')}>
                    <div className={cl('text')}>Availability: Stock</div>
                    <div className={cl('name')}>Akko 3087 Midnight</div>
                    <div className={cl('price')}>990000 VND</div>
                    <div className={cl('text')}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Praesentium voluptas consequatur, sit nihil quod
                        eum est ipsa quam molestias quibusdam!
                    </div>
                    <div className={cl('cart')}>
                        <InputNumber size='large' defaultValue={1} />
                        <Button
                            className={cl('button')}
                            size='large'
                            type='primary'
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
