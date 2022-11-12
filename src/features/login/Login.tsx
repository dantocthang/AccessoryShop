import { Breadcrumb, Input } from 'antd'
import Button from '../../components/__atom/Button'
import { Link } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import classNames from 'classnames/bind'
import styles from './Login.module.scss'
const cl = classNames.bind(styles)

function Login() {
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password is required'),
    })

    return (
        <div className={cl('wrapper')}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/login'>Home</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={cl('heading')}>ALREADY REGISTERED?</div>
            <div className={cl('container')}>
                <div className={cl('form')}>
                    <div className={cl('form-heading')}>NEW CUSTOMER</div>
                    <div className={cl('text')}>
                        By creating an account with our store, you will be able
                        to move through the checkout process faster, store
                        multiple shipping addresses, view and track your orders
                        in your account and more.
                    </div>
                    <Button to='/register' type='outline'>
                        CREATE AN ACCOUNT
                    </Button>
                </div>
                <div className={cl('form')}>
                    <div className={cl('form-heading')}>LOGIN</div>
                    <div className={cl('text')}>
                        If you have an account with us, please log in.
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={() => {}}
                        validationSchema={LoginSchema}
                    >
                        {({
                            errors,
                            touched,
                            values,
                            handleChange,
                            handleBlur,
                        }) => (
                            <Form className={cl('login')}>
                                <div className={cl('form-group')}>
                                    <Field
                                        component={Input}
                                        size='large'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        status={
                                            errors.email && touched.email
                                                ? 'error'
                                                : ''
                                        }
                                        name='email'
                                        id='email'
                                        value={values.email}
                                        placeholder='Enter email'
                                    ></Field>
                                    <ErrorMessage
                                        component='div'
                                        className='field-error'
                                        name='email'
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <Field
                                        component={Input.Password}
                                        size='large'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        status={
                                            errors.password && touched.password
                                                ? 'error'
                                                : ''
                                        }
                                        name='password'
                                        id='password'
                                        value={values.password}
                                        placeholder='Enter password'
                                    ></Field>
                                    <ErrorMessage
                                        component='div'
                                        className='field-error'
                                        name='password'
                                    />
                                </div>
                                <div className={cl('actions')}>
                                    <Button type='outline'>LOGIN</Button>
                                    <Link
                                        className={cl('link')}
                                        to='/password-recovery'
                                    >
                                        Lost your password?
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login
