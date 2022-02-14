import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
