import React from 'react'

import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'
import AdminItem from './components/AdminItem'
import { getStatistics } from './services'
import { useQuery } from '@tanstack/react-query'
import { Spin } from 'antd'
import formatCurrency from '../../utils/formatCurrency'
import { AppstoreOutlined, DollarCircleOutlined, UsergroupAddOutlined } from '@ant-design/icons'
const cl = classNames.bind(styles)

function Dashboard() {
    const statisticsQuery = useQuery(['statistics'], getStatistics)
    return (
        <div className={cl('wrapper')}>
            <div className={cl('heading')}>Overview</div>
            <div className={cl('group')}>
                {statisticsQuery.isLoading ? (
                    <Spin />
                ) : statisticsQuery.data !== null ? (
                    <>
                        <AdminItem
                            title='Users'
                            value={statisticsQuery.data.totalUser || 0}
                            description='Total users of website'
                            icon={
                                <UsergroupAddOutlined
                                    className={cl('item-icon')}
                                />
                            }
                        ></AdminItem>
                        <AdminItem
                            title='Products'
                            value={statisticsQuery.data.totalProduct || 0}
                            description='Total products'
                            icon={
                                <AppstoreOutlined className={cl('item-icon')} />
                            }
                        ></AdminItem>
                        <AdminItem
                            title='Lifetime Sales'
                            value={formatCurrency(
                                statisticsQuery.data.totalTurnover || 0
                            )}
                            description='Lorem ipsum dolor sit amet.'
                            icon={
                                <DollarCircleOutlined className={cl('item-icon')} />
                            }
                        ></AdminItem>
                    </>
                ) : (
                    'ERROR'
                )}
            </div>
        </div>
    )
}

export default Dashboard
