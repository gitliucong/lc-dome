import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'  //静态导入

//路由懒加载
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AllGoods',
    name: 'AllGoods',
    component: () => import('../views/AllGoods.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/Collect.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue')
  },
]
const router = new VueRouter({
  routes
})
//路由守卫-进行全局路由拦截
// 挂载路由守卫
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if (to.path === '/login') return next()
//   const tokenStr = window.localStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })



export default router
