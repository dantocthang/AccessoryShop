import { Breadcrumb, Input } from 'antd'
import Button from '../../components/__atom/Button'
import { Link } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import classNames from 'classnames/bind'
import styles from './Register.module.scss'
const cl = classNames.bind(styles)

function Register() {
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(1, 'Name too short')
            .max(50, 'Name too long')
            .required('Enter your full name'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,50}$/,
                'Password must contains at least one Uppercase letter, one lowercase letter and a number'
            ),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Passwords must match'
        ),
    })

    return (
        <div className={cl('wrapper')}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/register'>Register</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={cl('heading')}>CREATE AN ACCOUNT</div>
            <div className={cl('container')}>
                <div className={cl('form')}>
                    <div className={cl('form-heading')}>
                        PERSONAL INFORMATION
                    </div>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        onSubmit={() => {}}
                        validationSchema={SignupSchema}
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
                                    <label
                                        htmlFor='fullName'
                                        className={cl('form-label')}
                                    >
                                        FULL NAME *
                                    </label>
                                    <Field
                                        component={Input}
                                        size='large'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        status={
                                            errors.fullName && touched.fullName
                                                ? 'error'
                                                : ''
                                        }
                                        name='fullName'
                                        id='fullName'
                                        value={values.fullName}
                                        placeholder='Enter full name'
                                    ></Field>
                                    <ErrorMessage
                                        component='div'
                                        className='field-error'
                                        name='fullName'
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <label
                                        htmlFor='email'
                                        className={cl('form-label')}
                                    >
                                        EMAIL *
                                    </label>
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
                                    <label
                                        htmlFor='password'
                                        className={cl('form-label')}
                                    >
                                        PASSWORD *
                                    </label>
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
                                <div className={cl('form-group')}>
                                    <label
                                        htmlFor='confirmPassword'
                                        className={cl('form-label')}
                                    >
                                        CONFIRM PASSWORD *
                                    </label>
                                    <Field
                                        component={Input.Password}
                                        size='large'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        status={
                                            errors.confirmPassword &&
                                            touched.confirmPassword
                                                ? 'error'
                                                : ''
                                        }
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        value={values.confirmPassword}
                                        placeholder='Confirm password'
                                    ></Field>
                                    <ErrorMessage
                                        component='div'
                                        className='field-error'
                                        name='confirmPassword'
                                    />
                                </div>
                                <div className={cl('actions')}>
                                    <Button type='outline'>REGISTER</Button>
                                    <span>or</span>
                                    <Link className={cl('link')} to='/'>
                                        Return to home page?
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

export default Register
