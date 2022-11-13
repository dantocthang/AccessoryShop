import Login from '../features/login'
import Register from '../features/register'
import Home from '../features/home'
import Detail from '../features/detail'
import Cart from '../features/cart'
import List from '../features/list'

import HomeLayout from '../layouts/HomeLayout'

const routes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/cart', component: Cart },
    { path: '/product', component: List },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product/:id', component: Detail },
]

export default routes
