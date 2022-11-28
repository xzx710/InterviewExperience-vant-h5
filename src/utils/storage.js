/**
 * 封装本地存储
*/
const KEY = 'my-token-vant-mobile'

// 获取token
export const getToken = () => {
  return localStorage.getItem(KEY)
}

// 设置token
export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}

// 删除token
export const delToken = () => {
  localStorage.removeItem(KEY)
}
