import React from 'react'

import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'

function CreateCategory() {
    return (
        <Wrapper
            title='Add category'
            description='Add new category by providing a unique name'
        >
            <Form handleSubmit={() => {}}></Form>
        </Wrapper>
    )
}

export default CreateCategory
