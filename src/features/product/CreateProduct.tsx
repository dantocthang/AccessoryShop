import React from 'react'
import { message } from 'antd'
import { useMutation } from '@tanstack/react-query'
import { createProduct } from './services'

import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'

function CreateProduct() {
    const createProductMutation = useMutation(createProduct, {
        onSuccess: (data) => {
            if (data.status === 201) {
                message.success('Product added')
            }
        },
    })

    return (
        <Wrapper
            title='Add product'
            description='Fill all the required informations'
        >
            <Form handleSubmit={createProductMutation}></Form>
        </Wrapper>
    )
}

export default CreateProduct
