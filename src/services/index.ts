import request from "../utils/request"

export const getProducts = async () => {
    const res = await request.get('/product/')
    if (res.status === 200) return res.data
    return []
}