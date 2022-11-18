export default interface Product {
    id: number
    name: string
    description: string
    price: number
    stock: number
    modelYear: number
    category_id: number
    brand_id: number
    imageUrl: string
    imagePublicId: string
    category: {}
    brand: {}
}
