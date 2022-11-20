import request from '../utils/request'

interface Props {
    id: string
    page: number
    sortBy: string
}

// Get all products
export const getProducts = async ({ page, sortBy }: Partial<Props>) => {
    const res = await request.get('/product', {
        params: { page, sortBy: sortBy || 'id' },
    })
    // console.log(res)
    if (res.status === 200) return res.data
    return []
}

// Get product by id
export const getProductById = async ({ id }: Partial<Props>) => {
    const res = await request.get(`/product/${id}`)
    if (res.status === 200) return res.data
    return {}
}
