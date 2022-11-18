import Login from '../features/login'
import Register from '../features/register'
import Home from '../features/home'
import Detail from '../features/detail'
import Cart from '../features/cart'
import List from '../features/list'
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
    { path: '/cart', component: Cart },
    { path: '/product', component: List },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/product/:id', component: Detail },
    {
        path: '/admin/brand/create',
        component: CreateBrand,
        layout: AdminLayout,
    },
    { path: '/admin/brand/list', component: ListBrand, layout: AdminLayout },
    { path: '/admin/brand/:id', component: EditBrand, layout: AdminLayout },
    {
        path: '/admin/category/create',
        component: CreateCategory,
        layout: AdminLayout,
    },
    {
        path: '/admin/category/list',
        component: ListCategory,
        layout: AdminLayout,
    },
    {
        path: '/admin/category/:id',
        component: EditCategory,
        layout: AdminLayout,
    },
    {
        path: '/admin/product/create',
        component: CreateProduct,
        layout: AdminLayout,
    },
    {
        path: '/admin/product/list',
        component: ListProduct,
        layout: AdminLayout,
    },
    {
        path: '/admin/product/:id',
        component: EditProduct,
        layout: AdminLayout,
    },
]

export default routes
