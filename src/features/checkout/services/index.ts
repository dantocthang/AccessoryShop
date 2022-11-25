import request from '../../../utils/request'

interface Props {
    address_id: number
    user_id: number
    cart_id?: number
}

export const createOrder = async (values: Props) => {
    const res = await request.post('/invoice/create', { ...values, cart_id: 0 })
    return res
}




