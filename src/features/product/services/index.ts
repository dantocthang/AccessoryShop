import request from '../../../utils/request'
interface Props {
    id: number
}

export const getProducts = async () => {
    const res = await request.get('/product/')
    if (res.status === 200) return res.data
    return []
}

export const deleteProduct = async ({ id }: Partial<Props>) => {
    const res = await request.delete(`/product/${id}`)
    return res
}

export const getPrerequisites = async () => {
    return Promise.all([request.get('/brand'), request.get('/category')]).then(
        (values) => console.log(values)
    )
}
