import React from 'react'



import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
const cl = classNames.bind(styles);

function Info() {
  return (
    <div className={cl('info-wrapper')}>
        <div className={cl('image')}>
            <img src="https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg" alt="" className={cl('img')} />
        </div>
        <div className={cl('name')}>Arasia</div>
        <div className={cl('email')}>a@gmail.com</div>
    </div>
  )
}

export default Info