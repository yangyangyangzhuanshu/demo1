import Vue from 'vue'
import VueRouter from 'vue-router'
// import Mail from '@/views/mail/index'

Vue.use(VueRouter)
const routes = [
  {
    path: '/mail',
    name: 'mail',
    component: () => import(/* webpackChunkName: 'mail' */'@/views/mail/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
