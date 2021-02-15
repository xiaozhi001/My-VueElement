import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'https://www.liulongbin.top:8888/api/private/v1/',
        timeout: 5000
    })

    // 2.axios的拦截器
    instance.interceptors.request.use(config => {
        // 为请求对象，添加Token验证的Authorization字段
        config.headers.Authorization = window.sessionStorage.getItem('token')
            // 在最后必须return config
        return config
    })

    // 3.发送真正的网络请求
    return instance(config)
}