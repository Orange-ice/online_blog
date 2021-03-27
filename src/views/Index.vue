<template>
<div>
  <header>
    <a-input-search
      v-model="query.title"
      placeholder="输入标题筛选"
      style="width: 200px"
      @search="onSearch"
    />
  </header>
  <div class="blog-wrapper">
    <section v-for="blog in blogs" :key="blog.id">
      <figure>
        <img :src="blog.User.avatar" alt="">
        <figcaption>{{blog.User.username}}</figcaption>
      </figure>
      <div class="content">
        <h3>{{blog.title}}<span>{{handleDate(blog.updatedAt)}}</span></h3>
        <p>{{blog.description}}</p>
      </div>
    </section>
  </div>
  <div class="pagination-wrapper">
    <a-pagination
      size="small"
      :total="total"
      :show-total="total => `共 ${total} 篇`"
      @change="onChange"
    />
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import {getAllBlogs} from '@/api/blog';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

@Component
export default class Index extends Vue {
  query = {
    limit: 10,
    page: 1,
    title: ''
  }
  total = 0
  blogs: Blog[] = []
  created() {
    this.fetchBlogs()
  }
  onSearch() {
    this.query.page = 1
    this.fetchBlogs()
  }
  onChange(page: number) {
    this.query.page = page
    this.fetchBlogs()
  }
  fetchBlogs() {
    getAllBlogs(this.query).then(response => {
      const resource = response.data
      this.total = resource.total
      this.blogs = resource.blogs
    })
  }
  handleDate(date: string) {
    return dayjs(date).fromNow()
  }
}
</script>

<style scoped lang="scss">
header{
  margin: 16px 80px 0;
  padding-bottom: 16px;
  border-bottom: solid 1px #ccc;
}
.blog-wrapper{
  height: 75vh;
  overflow: auto;
}
section{
  margin: 32px 80px 0;
  display: flex;
  figure{
    font-size: 12px;
    text-align: center;
    margin: 0;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .content{
    p,h3{margin: 0;}
    margin-left: 16px;
    span{
      font-size: 12px;
      color: #999;
      margin-left: 20px;
    }
    p{
      margin-top: 8px;
    }
  }
}
.pagination-wrapper{
  border-top: solid 1px #ccc;
  padding: 24px 0 8px;
  margin: 0 80px;
}
</style>
