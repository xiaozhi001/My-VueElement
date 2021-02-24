# vue-element

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 创建webpack项目

``` bash
# 安装依赖vue-router、element-ui、sass-loader、node-sass
cd vue-element
npm install vue-router --save-dev
npm i element-ui -S
npm install sass-loader node-sass --save-dev
npm install axios vue-axios --save

```
## 在项目中使用element-ui模块

```bash
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

## Element组件

```bash
# Layout布局
1.先行后列（一行24列）
# Container容器
```
## 开发流程

```bash
# 创建组件

# 配置路由
```
## 路由导航守卫》控制访问权限

```bash
# 为路由对象，添加beforeEach 导航守卫
router.beforeEach((to, from, next)=>{
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
# 退出功能实现原理
1.清空token
window.sessionStorage.clear()
2.跳转到登录页
this.$router.push('/login')

#配置axios发起登录请求
1.如果某个方法的返回结果是promise，我们可以用await（只能用在被async修饰的方法中）
```
## 主页面设计

```bash
# 通过接口获取菜单数据
1.通过axios请求拦截器添加token，保证拥有获取数据的权限
//axios请求拦截(预处理请求！)
axios.interceptors.request.use(config => {
  //为请求对象，添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

#实现首页路由的重定向效果
VUE定义组件 》router定义路由规则 》<router-view>放置路由占位符

```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
