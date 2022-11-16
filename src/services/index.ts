import request from '../utils/request'

interface Props {
    id: string
}

// Get all products
export const getProducts = async () => {
    const res = await request.get('/product/')
    if (res.status === 200) return res.data
    return []
}

// Get product by id
export const getProductById = async ({ id }: Partial<Props>) => {
    const res = await request.get(`/product/${id}`)
    if (res.status === 200) return res.data
    return {}
}
