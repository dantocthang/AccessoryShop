import React from 'react'

import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import Button from '../../components/__atom/Button'
import Wrapper from '../../components/__atom/FormWrapper'
import { Edit, Delete } from '../../components/__atom/ActionIcon'

interface DataType {
    key: string
    id: number
    name: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Action',
        dataIndex: undefined,
        key: 'action',
        render: (_, record) => (
            <div className='d-flex flex-align-center gap-3'>
                <Edit
                    to='/admin/category/1'
                    onClick={() => console.log('hi')}
                ></Edit>
                <Delete onClick={() => console.log('delete')} />
            </div>
        ),
    },
]

const data: DataType[] = [
    {
        key: '1',
        id: 1,
        name: 'John Brown',
    },
]

function ListCategory() {
    return (
        <Wrapper title='Categories' description={`Manage all categories`}>
            <Button
                type='primary'
                to='/admin/category/create'
                className='mt-4 mb-4'
            >
                Add new category
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Wrapper>
    )
}

export default ListCategory
