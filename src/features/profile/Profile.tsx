import React from 'react'

import Form from './components/Form'
import InfoForm from './components/InfoForm'
import Info from './components/Info'
import Nav from './components/Nav'

import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
const cl = classNames.bind(styles)

function Profile() {
    return (
        <div className={cl('wrapper')}>
            <div className='row'>
                <div className='col l-4 m-6 c-12'>
                    <Info></Info>
                    <Nav></Nav>
                </div>
                <div className='col l-8 m-6 c-12'>
                    <InfoForm />
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}

export default Profile
