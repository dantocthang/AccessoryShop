import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Select, Breadcrumb } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faTableCells } from '@fortawesome/free-solid-svg-icons'

import Item from '../../components/__combined/ProductItem'

import classNames from 'classnames/bind'
import styles from './List.module.scss'
const cl = classNames.bind(styles)

function List() {
    const [gridValue, setGridValue] = useState([3, 4, 6])
    return (
        <div className={cl('wrapper')}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/product'>Product</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={cl('heading')}>Products (101)</div>
            <div className={cl('filter')}>
                <div className={cl('sort')}>
                   <span> SORT BY:</span>
                    <Select value={''}>
                        <Select.Option value={''}>Default</Select.Option>
                        <Select.Option value={'price-ASC'}>
                            Price: Increasing
                        </Select.Option>
                        <Select.Option value={'price-DESC'}>
                            Price: Decreasing
                        </Select.Option>
                    </Select>
                </div>
                <div className={cl('grid')}>
                    <FontAwesomeIcon
                        onClick={() => setGridValue([4, 6, 12])}
                        icon={faBorderAll}
                        className={cl('grid-icon', {
                            active: gridValue[0] === 4,
                        })}
                    />
                    <FontAwesomeIcon
                        onClick={() => setGridValue([3, 4, 6])}
                        icon={faTableCells}
                        className={cl('grid-icon', {
                            active: gridValue[0] === 3,
                        })}
                    />
                </div>
            </div>
            <div className={cl('list')}>
                <div className='row'>
                    <div
                        className={`col l-${gridValue[0]} m-${gridValue[1]} c-${gridValue[2]}`}
                    >
                        <div className={cl('item')}>
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
