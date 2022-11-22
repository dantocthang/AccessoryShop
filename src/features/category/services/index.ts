import request from '../../../utils/request'

export const getCategories = async () => {
    const res = await request.get('/category')
    if (res.status === 200) return res.data
    return []
}

export const getCategoryById = async (id?: string) => {
    const res = await request.get(`/category/${id}`)
    if (res.status === 200) return res.data
    return null
}

export const createCategory = async ({ name }: { name: string }) => {
    const res = await request.post('/category', { name })
    return res
}

export const updateCategory = async ({
    id,
    name,
}: {
    id: number
    name: string
}) => {
    const res = await request.put(`/category/${id}`, { name })
    return res
}

export const deleteCategory = async (id: number) => {
    const res = await request.delete(`/category/${id}`)
    return res
}
