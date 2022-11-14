import React from 'react'

import Wrapper from '../../components/__atom/FormWrapper'
import Form from './components/Form'

function CreateBrand() {
    return (
        <Wrapper
            title='Add Brand'
            description='Add new brand by providing a unique name'
        >
            <Form></Form>
        </Wrapper>
    )
}

export default CreateBrand
