import Login from '../features/login'
import Register from '../features/register'
import Home from '../features/home'
import Detail from '../features/detail'
import Cart from '../features/cart'
import List from '../features/list'
import { CreateBrand, ListBrand } from '../features/brand'

import HomeLayout from '../layouts/HomeLayout'
import AdminLayout from '../layouts/AdminLayout'

const routes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/cart', component: Cart },
    { path: '/product', component: List },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product/:id', component: Detail },
    { path: '/admin/brand/create', component: CreateBrand, layout: AdminLayout },
    { path: '/admin/brand/list', component: ListBrand, layout: AdminLayout },
]

export default routes
