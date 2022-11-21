import Product from './product'

export default interface CartItem{
    id: number
    product: Product
    quantity: number
}