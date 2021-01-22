// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false
// import axios from 'axios'
// 配置请求的根路径
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axios.interceptors.request.use(config => {
//   // 为请求对象，添加Token验证的Authorization字段
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须return config
//   return config
// })
// Vue.prototype.$http = axios
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
