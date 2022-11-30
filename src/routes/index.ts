import Login from '../features/login'
import Register from '../features/register'
import Home from '../features/home'
import Detail from '../features/detail'
import Cart from '../features/cart'
import Checkout from '../features/checkout'
import Invoice from '../features/user-order'
import PaymentSuccess from '../features/payment-success'
import PaymentFailed from '../features/payment-failed'
import List from '../features/list'
import Order from '../features/order'
import { CreateBrand, ListBrand, EditBrand } from '../features/brand'
import {
    CreateCategory,
    ListCategory,
    EditCategory,
} from '../features/category'
import { CreateProduct, ListProduct, EditProduct } from '../features/product'
import Profile from '../features/profile'

import HomeLayout from '../layouts/HomeLayout'
import AdminLayout from '../layouts/AdminLayout'

const routes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/product', component: List },
    { path: '/cart', component: Cart, role: 'user' },
    { path: '/checkout', component: Checkout, role: 'user' },
    { path: '/invoice', component: Invoice, role: 'user' },
    { path: '/payment-success', component: PaymentSuccess, role: 'user' },
    { path: '/payment-failed', component: PaymentFailed, role: 'user' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile, role: 'user' },
    {
        path: '/admin/order',
        component: Order,
        layout: AdminLayout,
        role: 'admin',
    },
    { path: '/product/:id', component: Detail },
    {
        path: '/admin/brand/create',
        component: CreateBrand,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/brand/list',
        component: ListBrand,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/brand/:id',
        component: EditBrand,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/category/create',
        component: CreateCategory,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/category/list',
        component: ListCategory,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/category/:id',
        component: EditCategory,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/product/create',
        component: CreateProduct,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/product/list',
        component: ListProduct,
        layout: AdminLayout,
        role: 'admin',
    },
    {
        path: '/admin/product/:id',
        component: EditProduct,
        layout: AdminLayout,
        role: 'admin',
    },
]

export default routes
