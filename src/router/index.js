import Vue from 'vue'
import Router from 'vue-router'
const home = () =>
    import ('../pages/home/index.vue')
const classify = () =>
    import ('../pages/classify/index.vue')
const shoppingCar = () =>
    import ('../pages/shoppingCar/index.vue')
const mine = () =>
    import ('../pages/mine/index.vue')
Vue.use(Router)
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/classify',
        component: classify
    },
    {
        path: '/shoppingCar',
        component: shoppingCar,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/mine',
        component: mine
    },
]
export default new Router({
    // model: 'history',
    routes
})