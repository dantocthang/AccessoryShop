import React from 'react'
import { Input, message, Popconfirm, Select, Spin } from 'antd'
import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'

import Address from '../../../model/address'
import Button from '../../../components/__atom/Button'

import classNames from 'classnames/bind'
import styles from '../Profile.module.scss'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createAddress, getAddresses } from '../../../services'
import { useAppSelector } from '../../../hooks'
const cl = classNames.bind(styles)
const { Option } = Select

const sampleAddress = {
    city_id: 0,
    district_id: 0,
    ward_id: 0,
    address: '',
    phone: '',
}

const AddressSchema = Yup.object().shape({
    addresses: Yup.array().of(
        Yup.object().shape({
            city_id: Yup.number()
                .min(1, 'Please choose city')
                .required('Please choose city'),
            district_id: Yup.number().min(1, 'Please choose district'),
            ward_id: Yup.number().min(1, 'Please choose ward'),
            address: Yup.string().required(
                'Please enter your delivery address'
            ),
            phone: Yup.string()
                .trim()
                .matches(
                    /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                    'Invalid phone number'
                )
                .required('Please enter a valid phone number'),
        })
    ),
})

function FormComp() {
    const user = useAppSelector((state) => state.auth)
    const addressQuery = useQuery(['addresses'], () => getAddresses(user.id))

    const createAddressMutation = useMutation(createAddress, {
        onSuccess: (data) => {
            if (data.status === 200) {
                message.success('New address profile added!')
            }
        },
    })

    const handleSubmit = (values: any) => {
        console.log(values)
        for (const address of values.addresses) {
            if (address.hasOwnProperty('id')) {
                // Update
            } else {
                createAddressMutation.mutate({
                    address: address.address,
                    phone: address.phone,
                    ward_id: address.ward_id || 1,
                    user_id: user.id,
                })
            }
        }
    }

    if (addressQuery.isLoading) return <Spin />

    return (
        <Formik
            initialValues={{
                addresses:
                    addressQuery?.data?.map((x: Address) => ({
                        ...x,
                        district_id: x.ward.district.id,
                        city_id: x.ward.district.city.id,
                        ward_id: x.ward.id,
                    })) || [],
            }}
            enableReinitialize
            validationSchema={AddressSchema}
            onSubmit={handleSubmit}
        >
            {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                setFieldValue,
            }) => (
                <Form className={cl('form')}>
                    <div className={cl('addresses')}>
                        <div className={cl('addresses-heading')}>
                            Add or update receipient profiles
                        </div>
                        <FieldArray name='addresses'>
                            {(arrayHelpers) => (
                                <div className={cl('address-list')}>
                                    {values.addresses.map(
                                        (a: Address, index: number) => (
                                            <div
                                                className={cl('address-group')}
                                            >
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
                                                            values.addresses[
                                                                index
                                                            ].city_id
                                                        }
                                                        onChange={(
                                                            value: number
                                                        ) =>
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
                                                            values.addresses[
                                                                index
                                                            ].district_id
                                                        }
                                                        onChange={(
                                                            value: number
                                                        ) =>
                                                            setFieldValue(
                                                                `addresses.${index}.district_id`,
                                                                value
                                                            )
                                                        }
                                                    >
                                                        <Option value={0}>
                                                            -- Choose district
                                                            --
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
                                                            values.addresses[
                                                                index
                                                            ].ward_id
                                                        }
                                                        onChange={(
                                                            value: number
                                                        ) =>
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
                                                        value={
                                                            values.addresses[
                                                                index
                                                            ].address
                                                        }
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
                                                        value={
                                                            values.addresses[
                                                                index
                                                            ].phone
                                                        }
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
                                                        className={cl(
                                                            'action-btn'
                                                        )}
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
                                        )
                                    )}
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
