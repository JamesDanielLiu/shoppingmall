import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('@/views/home/home')
const Category = () => import('@/views/category/category')
const Cart = () => import('@/views/cart/cart')
const Profile = () => import('@/views/profile/profile')
const Detail = () => import('@/views/detail/detail')

const routes = [
    {
        path : '',
        redirect : '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path : '/detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router