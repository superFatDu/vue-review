import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/Slot/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
