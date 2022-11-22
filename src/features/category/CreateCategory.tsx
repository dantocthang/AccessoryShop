import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'
import { createCategory } from './services'
import { message } from 'antd'

function CreateCategory() {
    const navigate = useNavigate()
    const createCategoryMutation = useMutation(createCategory, {
        onSuccess: (data) => {
            if (data.status === 200) {
                message.success('Category created')
                navigate('/admin/category/list')
            }
            else message.error('Something went wrong!')
        },
    })
    return (
        <Wrapper
            title='Add category'
            description='Add new category by providing a unique name'
        >
            <Form handleSubmit={createCategoryMutation}></Form>
        </Wrapper>
    )
}

export default CreateCategory
