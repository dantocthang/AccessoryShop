import React from 'react'
import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'

function EditBrand() {
    return (
        <Wrapper
            title='Edit Brand: Brand A'
            description='Add new brand by providing a unique name'
        >
            <Form edit handleSubmit={()=>{}}></Form>
        </Wrapper>
    )
}

export default EditBrand