import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载组件，通过路由添加映射关系
const Login= () => import('views/Login')
const Test= () => import('views/Test')

// 1.安装插件
Vue.use(VueRouter)

const routes =[
  // {
  //   path: '',
  //   redirect: '/login'
  // },
  // {
  //   path: '/login',
  //   component: Login
  // },
  {
    path: '',
    redirect: '/test'
  },
  {
    path: '/test',
    component: Test
  }
]

// 2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出
export default router




