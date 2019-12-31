import Login from '../containers/Login'
import Home from '@/containers/Home'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]
export default routes