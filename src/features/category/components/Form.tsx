import { Input } from 'antd'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '../../../components/__atom/Button'

const CategorySchema = Yup.object().shape({
    name: Yup.string().min(1).required('Required'),
})

interface Props {
    edit?: boolean
    handleSubmit: Function
}

function FormComp({ edit, handleSubmit = () => {} }: Props) {
    return (
        <Formik
            initialValues={{ name: '' }}
            enableReinitialize={true}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={CategorySchema}
        >
            {({ values, errors, handleChange, handleBlur }) => (
                <Form>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='name'>
                            Name
                        </label>
                        <Field
                            component={Input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            size='large'
                            name='name'
                            id='name'
                            status={errors.name ? 'error' : ''}
                            value={values.name}
                        />
                        <div className='form-error'>{errors.name}</div>
                    </div>
                    <div className='d-flex mt-4 flex-align-center gap-3'>
                        <Button to='/admin/category/list' type='outline'>
                            BACK
                        </Button>
                        <Button>{edit ? 'SAVE' : 'CREATE'}</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormComp
