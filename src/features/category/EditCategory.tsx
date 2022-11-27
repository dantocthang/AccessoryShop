import { useMutation } from '@tanstack/react-query'
import { message } from 'antd'
import React from 'react'
import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'
import { updateCategory } from './services'

function EditCategory() {
    const updateCategoryMutation = useMutation(updateCategory, {
        onSuccess: (data) => {
            if (data.status === 200) {
                message.success('Category updated')
            } else message.error('Something went wrong!')
        },
    })
    return (
        <Wrapper
            title='Edit category: '
            description='Modify categoy name'
        >
            <Form edit handleSubmit={updateCategoryMutation}></Form>
        </Wrapper>
    )
}

export default EditCategory
