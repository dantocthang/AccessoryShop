import Login from '../features/login'
import Register from '../features/register'
import Home from '../features/home'

import HomeLayout from '../layouts/HomeLayout'

const routes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

export default routes
