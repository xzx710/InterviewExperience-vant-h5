<template>
  <van-cell class="article-item" @click="$router.push(`/detail/${article.id}`)">
    <template #title>
      <div class="head">
        <img
          src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png"
          alt=""
        />
        <div class="con">
          <p class="title van-ellipsis">{{article.stem}}</p>
          <p class="other">{{article.creator}} | {{article.createdAt}}</p>
        </div>
      </div>
    </template>
    <template #label>
      <div class="body van-multi-ellipsis--l2">
        {{clearHtmlTag(article.content)}}
      </div>
      <div class="foot">点赞 {{article.likeCount}} | 浏览 {{article.views}}</div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: ['article'],
  methods: {
    // 去除html标签
    clearHtmlTag (str) {
      return str.replace(/<[^>]+>/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
