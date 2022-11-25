import request from '../../../utils/request'

export const confirmOrder = async ({
    invoice_id,
    user_id,
}: {
    invoice_id: number
    user_id: number
}) => {
    const res = await request.put(`/invoice/setPaySuccess/${invoice_id}`, {
        invoice_id,
        user_id,
        paymentMethod: 'COD',
    })
    return res
}
