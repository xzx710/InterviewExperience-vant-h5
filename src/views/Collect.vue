<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
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
import { getArticlesCollect } from '@/api/article'
export default {
  name: 'CollectView',
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
      // 异步更新数据
      const { data } = await getArticlesCollect(this.page)
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
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
