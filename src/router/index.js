import { getToken } from '@/utils/storage'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/Detail')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/article',
    children: [
      { path: '/article', component: () => import('@/views/Article') },
      { path: '/like', component: () => import('@/views/Like') },
      { path: '/collect', component: () => import('@/views/Collect') },
      { path: '/user', component: () => import('@/views/User') }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 设置白名单
const whiteList = ['/login', '/register']

// 设置全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取token
  const token = getToken()

  if (whiteList.includes(to.path)) {
    if (token) {
      // 有token，还想跳转到登录注册页面，阻止跳转，返回原来页面
      next(from.path)
    } else {
      next()
    }
  } else {
    if (token) {
      next()
    } else {
      // 无token且不是白名单，阻止跳转，直接跳转到登录页
      next('/login')
    }
  }
})
export default router
