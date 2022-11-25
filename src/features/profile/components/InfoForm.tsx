import React from 'react'
import { Input, Popconfirm, Select } from 'antd'
import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik'

import Address from '../../../model/address'
import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from '../Profile.module.scss'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
const cl = classNames.bind(styles)
const { Option } = Select

interface FormValues {
    fullName: string
    password: string
    confirmPassword: string
}

function FormComp() {
    return (
        <Formik
            initialValues={{
                fullName: '',
                password: '',
                confirmPassword: '',
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ values, handleChange, handleBlur, setFieldValue }) => (
                <Form className={cl('form')}>
                    <div className={cl('heading')}>
                        Welcome to the information
                    </div>
                    <div className={cl('subheading')}>
                        Check or change your informations as you want
                    </div>
                    <div className={cl('basic')}>
                        <div className='form-group'>
                            <label htmlFor='fullName' className='form-label'>
                                Full name:
                            </label>
                            <Field
                                id='fullName'
                                name='fullName'
                                component={Input}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size='large'
                            />
                            <ErrorMessage
                                component='div'
                                className='form-error'
                                name='fullName'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password' className='form-label'>
                                Password:
                            </label>
                            <Field
                                id='password'
                                name='password'
                                component={Input.Password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size='large'
                            />
                            <ErrorMessage
                                component='div'
                                className='form-error'
                                name='password'
                            />
                        </div>
                        <div className='form-group'>
                            <label
                                htmlFor='confirmPassword'
                                className='form-label'
                            >
                                Confirm password:
                            </label>
                            <Field
                                id='confirmPassword'
                                name='confirmPassword'
                                component={Input.Password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size='large'
                            />
                            <ErrorMessage
                                component='div'
                                className='form-error'
                                name='confirmPassword'
                            />
                        </div>
                    </div>
                    <Button type='primary'>Save</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComp
