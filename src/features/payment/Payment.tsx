import React from 'react'
import classNames from 'classnames/bind'
import styles from './Payment.module.scss'
import Button from '../../components/__atom/Button'
import { useMutation } from '@tanstack/react-query'
import { confirmOrder } from './services'
import { useAppSelector } from '../../hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { message } from 'antd'
const cl = classNames.bind(styles)

function Payment() {
    const navigate = useNavigate()
    const { invoiceId } = useParams()
    const user = useAppSelector((state) => state.auth)
    const confirmPaymentMutation = useMutation(confirmOrder, {
        onSuccess: (data) => {
            console.log(data)
            message.success(data.data.message)
            navigate('/')
        },
    })

    const handleConfirm = () => {
        confirmPaymentMutation.mutate({
            user_id: user.id,
            invoice_id: parseInt(invoiceId || '1'),
        })
    }
    return (
        <div className={cl('wrapper')}>
            <div className={cl('text')}>Confirm your payment!</div>
            <Button onClick={handleConfirm} type='primary' size='large'>
                CONFIRM
            </Button>
        </div>
    )
}

export default Payment
