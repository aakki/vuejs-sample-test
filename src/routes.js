import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '*',
        name: 'notFound',
        component: NotFound
    }
]

export default routes
