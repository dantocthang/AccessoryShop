import React from 'react'

import { Image, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import Button from '../../components/__atom/Button'
import Wrapper from '../../components/__atom/FormWrapper'
import { Edit, Delete } from '../../components/__atom/ActionIcon'
import productPlaceholder from '../../assets/img/components/product_placeholder.png'

interface DataType {
    key: string
    id: number
    name: string
    price: number
    modelYear: number
    imageUrl: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '',
        dataIndex: '',
        key: 'image',
        render: (_, record) => (
            <Image
                width={100}
                height={100}
                src='https://product.hstatic.net/1000026716/product/ban-phim-co-akko-pc75b-plus-v2-black-gold-11_3d105b6dfbe2492284562002c6f995f5.jpg'
                fallback={productPlaceholder}
            />
        ),
        width: 132,
        responsive: ['md']
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Model year',
        dataIndex: 'modelYear',
        key: 'modelYear',
        responsive: ['lg']
    },
    {
        title: 'Action',
        dataIndex: undefined,
        key: 'action',
        render: (_, record) => (
            <div className='d-flex flex-align-center gap-3'>
                <Edit
                    to={`/admin/product/${record.id}`}
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
        name: 'Akko 3087 Midnight',
        price: 990000,
        modelYear: 2020,
        imageUrl: '',
    },
]

function ListProduct() {
    return (
        <Wrapper title='Products' description={`Manage all products`}>
            <Button
                type='primary'
                to='/admin/product/create'
                className='mt-4 mb-4'
            >
                Add new category
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Wrapper>
    )
}

export default ListProduct
