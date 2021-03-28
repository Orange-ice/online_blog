<template>
  <div class="myselfWrapper">
    <div class="title">
      <img :src="user.avatar" alt="" class="avatar">
      <h3>{{user.username}}</h3>
    </div>

    <div class="container">
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{new Date(blog.createdAt).getDate()}}</span>
          <span class="month">{{new Date(blog.createdAt).getMonth() + 1}}月</span>
          <span class="year">{{new Date(blog.createdAt).getFullYear()}}</span>
        </div>
        <div class="content">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
          <div class="actions">
            <router-link :to="`/edit/${blog.id}`">编辑</router-link>
            <a href="#" @click="askDelete(blog.id)">删除</a>
          </div>
        </div>
      </div>
      <!-- 询问删除对话框 -->
      <a-modal
          v-model="visible"
          title="提示"
          @ok="handleOk"
          ok-text="确认"
          cancel-text="取消"
      >
        <p>确定要删除该博客吗？</p>
        <p>注：一旦删除不可撤销</p>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import {getUserBlogs} from '@/api/auth';
import {Getter} from 'vuex-class';
import {deleteBlog} from '@/api/blog';

@Component
export default class Myself extends Vue {
  @Getter id!: string
  user = {
    username: '',
    avatar: ''
  }
  visible = false
  currentDeleteId = ''
  blogs: BlogItem[] = []
  created() {
    this.fetchBlogs()
  }
  fetchBlogs() {
    getUserBlogs(this.id).then(response => {
      const resource = response.data
      this.user = resource.user
      this.blogs = resource.blogs
    })
  }
  askDelete(id: string) {
    this.currentDeleteId = id
    this.visible = true
  }
  handleOk() {
    deleteBlog(this.currentDeleteId).then(() => {
      this.visible = false
      this.$message.success('删除成功')
      this.fetchBlogs()
    })
  }
}
</script>

<style scoped lang="scss">
.myselfWrapper{
  margin: 0 150px;
  .title{
    display: flex;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: solid 1px #ebebeb;
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    h3{
      margin-top: 10px;
      margin-left: 16px;
    }
  }
  .container{
    height: 75vh;
    overflow: auto;
  }
  .item{
    margin: 20px 0;
    display: flex;
    .date{
      //border: solid 1px red;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .day{
        font-size: 40px;
        line-height: 40px;
      }
    }
    .content{
      margin-left: 16px;
      h3{margin: 0;}
      p{margin: 8px 0 0;}
      .actions{
        a{margin-right: 16px}
      }
    }
  }
}
</style>
