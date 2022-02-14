import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      { path: 'info', name: 'Info', component: () => import('../views/UserInfo.vue') },
      { path: 'detail', name: 'Detail', component: () => import('../views/UserDetail.vue') },
      { path: 'change_phone', name: 'ChangePhone', component: () => import('../views/UserChangePhone.vue') },
      { path: 'change_password', name: 'ChangePassword', component: () => import('../views/UserChangePassword.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
