<template>
  <div class="like-page">
    <van-nav-bar fixed title="我的点赞" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="(article, index) in articleList" :key="index" :article="article" />
    </van-list>
  </div>
</template>

<script>
import { getArticlesLike } from '@/api/article'
export default {
  name: 'LikeView',
  data () {
    return {
      articleList: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getArticlesLike(this.page)
      this.articleList.push(...data.rows)
      this.loading = false
      if (this.page === data.pageTotal || !data.rows.length) {
        this.finished = true
      } else {
        this.page++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
