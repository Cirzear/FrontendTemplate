import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('@/views/index/index.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/index/login.vue') }
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHistory(),
  routes
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router