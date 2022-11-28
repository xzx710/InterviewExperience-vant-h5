import request from '@/utils/request'

/**
 * 获取面经文章列表
 * @param {{current:Number,sorter:String}} obj
 * @returns
 */
export const getArticles = (obj) => {
  return request.get('/interview/query', {
    params: {
      ...obj,
      pageSize: 10
    }
  })
}

/**
 * 获取收藏的面经文章列表
 * @param {Number} page
 * @returns
 */
export const getArticlesCollect = (page) => {
  return request.get('/interview/opt/list', {
    params: {
      page,
      pageSize: 10,
      optType: 2
    }
  })
}

/**
 * 获取喜欢的面经文章列表
 * @param {Number} page
 * @returns
 */
export const getArticlesLike = (page) => {
  return request.get('/interview/opt/list', {
    params: {
      page,
      pageSize: 10,
      optType: 1
    }
  })
}

/**
 * 获取面经文章详情
 * @param {Number} id 面经的id
 * @returns
 */
export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

/**
 * 更新喜欢面经
 * @param {Number} id 面经id
 * @returns
 */
export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1
  })
}

/**
 * 更新收藏面经
 * @param {Number} id 面经id
 * @returns
 */
export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2
  })
}
