import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import classNames from 'classnames/bind'
import styles from './Search.module.scss'
const cl = classNames.bind(styles)

interface Props {
    className?: string
    visible: boolean
    onClose: Function
    onSearch: Function
}

function Search({ className, visible = false, onClose, onSearch }: Props) {
    return (
        <div className={`${className} ${cl('wrapper', { visible: visible })}`}>
            <div className={`grid wide ${cl('inner')}`}>
                <div className={cl('nav')}>
                    <div className={cl('text')}>What are you looking for?</div>
                    <div onClick={() => onClose()} className={cl('icon')}>
                        <CloseOutlined />
                    </div>
                </div>
                <div className={cl('search')}>
                    <Input
                        className={cl('input')}
                        size='large'
                        bordered={false}
                        placeholder='Search...'
                    />
                    <div onClick={() => onSearch()} className={cl('icon')}>
                        <SearchOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
