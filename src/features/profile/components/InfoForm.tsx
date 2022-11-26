import React from 'react'
import { Input, Popconfirm, Select } from 'antd'
import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik'

import Address from '../../../model/address'
import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from '../Profile.module.scss'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import User from '../../../model/user'
const cl = classNames.bind(styles)
const { Option } = Select

interface FormValues {
    username: string
    password: string
    confirmPassword: string
}

interface Props {
    user: User
}

function FormComp({ user }: Props) {
    return (
        <Formik
            initialValues={
                user.hasOwnProperty('id')
                    ? {
                          username: user.username,
                          password: '',
                          confirmPassword: '',
                      }
                    : {
                          username: '',
                          password: '',
                          confirmPassword: '',
                      }
            }
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
                            <label htmlFor='username' className='form-label'>
                                User name:
                            </label>
                            <Field
                                id='username'
                                name='username'
                                value={values.username}
                                component={Input}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size='large'
                            />
                            <ErrorMessage
                                component='div'
                                className='form-error'
                                name='username'
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
