import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Saldo from '../views/Saldo'
import Saque from '../views/Saque'
import Deposito from '../views/Deposito'
import Logout from "../views/Logout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/saldo',
        name: 'Saldo',
        component: Saldo
    },
    {
        path: '/saque',
        name: 'Saque',
        component: Saque
    },
    {
        path: '/deposito',
        name: 'Deposito',
        component: Deposito
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
