<template>
  <div class="wrapper">
    <div class="title">
      <img :src="blog.User.avatar" alt="">
      <div class="titleText">
        <h4>{{ blog.title }}</h4>
        <p>
          <span @click="$router.push(`/user/${blog.User.id}`)">{{ blog.User.username }}</span>发布于{{handleDate(blog.updatedAt)}}
        </p>
      </div>
    </div>
    <section class="hljs" v-html="markdown"></section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {checkBlogDetail} from '@/api/blog';
import dayjs from 'dayjs';
import marked from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

@Component
export default class Detail extends Vue {
  get id() {
    return this.$route.params.id
  }
  get markdown() {
    this.initMarked()
    return marked(this.blog.content)
  }
  blog: Blog= {
    id: '',
    title: '',
    description: '',
    content: '',
    updatedAt: '',
    User: {
      username: '',
      avatar: ''
    }
  }
  handleDate(date: string) {
    return dayjs(date).fromNow()
  }
  created() {
    this.fetchDetail()
  }
  fetchDetail() {
    checkBlogDetail(this.id).then(response => {
      this.blog = response.data
    })
  }
  initMarked() {
    hljs.configure({
      tabReplace: '  ',
      classPrefix: 'hljs-',
      languages: ['CSS', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript']
    })

    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight: code => hljs.highlightAuto(code).value
    })
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  .title {
    display: flex;
    margin: 24px 150px 0;
    padding-bottom: 32px;
    border-bottom: solid 1px #E1E1E1;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .titleText {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 22px;
      h4 {margin: 0;font-size: large}
      p {
        margin: 0;
        font-size: smaller;
        color: #999999;
        span {margin-right: 8px;color: #5EB3FF;cursor: pointer;}
      }
    }
  }
  section{
    margin: 16px 150px 0;
  }
}
</style>
