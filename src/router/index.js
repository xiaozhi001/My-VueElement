import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载组件，通过路由添加映射关系
const Login = () =>
    import ('views/Login')
const Home = () =>
    import ('views/Home')

// 1.安装插件
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }
]

// 2.创建router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行 next()放行 next('/login')强制跳转
    if (to.path == '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()

})

//导出
export default router