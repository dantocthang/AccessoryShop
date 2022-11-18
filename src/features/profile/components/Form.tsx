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
    address: Array<Address>
}

const sampleAddress = {
    phone: '',
    address: '',
    city_id: 0,
    district_id: 0,
    ward_id: 0,
}

function FormComp() {
    return (
        <Formik
            initialValues={{
                fullName: '',
                password: '',
                confirmPassword: '',
                addresses: [sampleAddress],
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
                    <div className={cl('addresses')}>
                        <div className={cl('addresses-heading')}>
                            Add or update receipient profiles
                        </div>
                        <FieldArray name='addresses'>
                            {(arrayHelpers) => (
                                <div className={cl('address-list')}>
                                    {values.addresses.map((a, index) => (
                                        <div className={cl('address-group')}>
                                            <div className='form-group'>
                                                <label
                                                    htmlFor='confirmPassword'
                                                    className='form-label'
                                                >
                                                    City:
                                                </label>
                                                <Field
                                                    component={Select}
                                                    as='select'
                                                    className={cl(
                                                        'address-select'
                                                    )}
                                                    id={`addresses.${index}.city_id`}
                                                    name={`addresses.${index}.city_id`}
                                                    value={
                                                        values.addresses[index]
                                                            .city_id
                                                    }
                                                    onChange={(value: number) =>
                                                        setFieldValue(
                                                            `addresses.${index}.city_id`,
                                                            value
                                                        )
                                                    }
                                                >
                                                    <Option value={0}>
                                                        -- Choose city --
                                                    </Option>
                                                    <Option value={1}>
                                                        Can Tho
                                                    </Option>
                                                </Field>
                                                <ErrorMessage
                                                    component='div'
                                                    className='form-error'
                                                    name={`addresses.${index}.city_id`}
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label
                                                    htmlFor='confirmPassword'
                                                    className='form-label'
                                                >
                                                    District:
                                                </label>
                                                <Field
                                                    component={Select}
                                                    as='select'
                                                    className={cl(
                                                        'address-select'
                                                    )}
                                                    id={`addresses.${index}.district_id`}
                                                    name={`addresses.${index}.district_id`}
                                                    value={
                                                        values.addresses[index]
                                                            .district_id
                                                    }
                                                    onChange={(value: number) =>
                                                        setFieldValue(
                                                            `addresses.${index}.district_id`,
                                                            value
                                                        )
                                                    }
                                                >
                                                    <Option value={0}>
                                                        -- Choose district --
                                                    </Option>
                                                    <Option value={1}>
                                                        Binh Thuy
                                                    </Option>
                                                </Field>
                                                <ErrorMessage
                                                    component='div'
                                                    className='form-error'
                                                    name={`addresses.${index}.district_id`}
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label
                                                    htmlFor='confirmPassword'
                                                    className='form-label'
                                                >
                                                    Ward:
                                                </label>
                                                <Field
                                                    component={Select}
                                                    as='select'
                                                    className={cl(
                                                        'address-select'
                                                    )}
                                                    id={`addresses.${index}.ward_id`}
                                                    name={`addresses.${index}.ward_id`}
                                                    value={
                                                        values.addresses[index]
                                                            .ward_id
                                                    }
                                                    onChange={(value: number) =>
                                                        setFieldValue(
                                                            `addresses.${index}.ward_id`,
                                                            value
                                                        )
                                                    }
                                                >
                                                    <Option value={0}>
                                                        -- Choose ward --
                                                    </Option>
                                                    <Option value={1}>
                                                        Long Tuyen
                                                    </Option>
                                                </Field>
                                                <ErrorMessage
                                                    component='div'
                                                    className='form-error'
                                                    name={`addresses.${index}.ward_id`}
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label
                                                    htmlFor='confirmPassword'
                                                    className='form-label'
                                                >
                                                    Address:
                                                </label>
                                                <Field
                                                    id={`addresses.${index}.address`}
                                                    name={`addresses.${index}.address`}
                                                    component={Input}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <ErrorMessage
                                                    component='div'
                                                    className='form-error'
                                                    name={`addresses.${index}.address`}
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label
                                                    htmlFor={`addresses.${index}.phone`}
                                                    className='form-label'
                                                >
                                                    Phone:
                                                </label>
                                                <Field
                                                    id={`addresses.${index}.phone`}
                                                    name={`addresses.${index}.phone`}
                                                    component={Input}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <ErrorMessage
                                                    component='div'
                                                    className='form-error'
                                                    name={`addresses.${index}.phone`}
                                                />
                                            </div>
                                            <div className={cl('actions')}>
                                                <div
                                                    onClick={() =>
                                                        arrayHelpers.push(
                                                            sampleAddress
                                                        )
                                                    }
                                                    className={cl('action-btn')}
                                                >
                                                    <PlusOutlined />
                                                </div>
                                                <Popconfirm
                                                    onConfirm={() =>
                                                        arrayHelpers.remove(
                                                            index
                                                        )
                                                    }
                                                    title='Are you sure?'
                                                >
                                                    <div
                                                        className={cl(
                                                            'action-btn',
                                                            'danger'
                                                        )}
                                                    >
                                                        <DeleteOutlined />
                                                    </div>
                                                </Popconfirm>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FieldArray>
                    </div>
                    <Button type='primary'>Save</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComp
