import Item from '../../../components/__combined/ProductItem'

import classNames from 'classnames/bind'
import styles from '../Home.module.scss'
const cl = classNames.bind(styles)

function List() {
    return (
        <div className='grid wide'>
            <div className={cl('list-wrapper')}>
                <div className={cl('list-heading')}>
                    TENDING
                </div>
                <div className={cl('list-subheading')}>TOP VIEW IN THIS WEEK</div>
                <div className='row'>
                    <div className='col l-3 m-4 c-6'>
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
