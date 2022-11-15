import React from 'react'
import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'

function EditCategory() {
    return (
        <Wrapper
            title='Edit category: Keyboard'
            description='Modify categoy name'
        >
            <Form edit handleSubmit={() => {}}></Form>
        </Wrapper>
    )
}

export default EditCategory
