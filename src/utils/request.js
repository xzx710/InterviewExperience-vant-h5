/**
 * 封装axios
 */
import axios from 'axios'
import { Toast } from 'vant'
import { getToken, delToken } from './storage'
import router from '@/router'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

request.interceptors.request.use(function (config) {
  // 处理请求数据
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 处理请求错误
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 处理响应数据
  return response.data
}, function (error) {
  if (error.response) {
    // 有错误响应, 提示错误提示
    if (error.response.status === 401) {
      // token过期
      delToken()
      router.push('/login')
    } else {
      Toast(error.response.data.message)
    }
  }
  return Promise.reject(error)
})

export default request
